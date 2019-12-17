import React, { useState, useEffect, useRef } from 'react';
import classnames from 'classnames';
import '@storefront-ui/shared/styles/components/SfSticky.scss';

export const SfSticky = ({ children }) => {
  const [isSticky, setIsSticky] = useState(false);
  const [isBound, setIsBound] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [parent, setParent] = useState({ parentTop: 0, parentHeight: 0 });
  const [stickyValues, setStickyValues] = useState({
    top: 0,
    height: 0,
    width: 0,
    padding: {
      top: 0,
      right: 0,
      left: 0,
      bottom: 0,
    },
  });

  const ref = useRef(null);

  useEffect(() => {
    if (!isIE && ref && ref.current) return;
    ref.current.parentElement.style.position = 'relative';
    setStickyValues({
      ...stickyValues,
      padding: {
        ...stickyValues.padding,
        ...computedPadding(),
      },
      top: ref.current.parentElement.offsetTop,
      height: ref.current.parentElement.offsetHeight,
      width: ref.current.parentElement.offsetWidth,
    });
    setParent({
      ...parent,
      parentTop: ref.current.parentElement.offsetTop,
      parentHeight: ref.current.parentElement.offsetHeight,
    });

    window.addEventListener('scroll', scrollHandler, true);
    window.addEventListener('resize', resizeHandler, true);

    return () => {
      window.removeEventListener('scroll', scrollHandler);
      window.removeEventListener('resize', resizeHandler);
    };
  }, []);

  useEffect(() => {
    scrollYF();
    parentTop();
  }, [scrollY]);

  useEffect(() => {
    if (isSticky) {
      if (ref.current.nextSibling) {
        ref.current.parentElement.style.paddingTop = `${stickyValues.height + stickyValues.padding.top}px`;
      }
    } else {
      if (ref.current.nextSibling && scrollY <= stickyValues.parentTop + stickyValues.top) {
        ref.current.parentElement.style.paddingTop = '';
      }
    }
  }, [isSticky]);

  useEffect(() => {
    if (isBound) {
      ref.current.parentElement.style.bottom = `${stickyValues.padding.bottom}px`; //if parent have padding
    } else {
      ref.current.parentElement.style.bottom = '';
    }
  }, [isBound]);

  const scrollYF = () => {
    toggleSticky();
    toggleBound();
  };

  const parentTop = () => {
    ref.current.parentElement.style.bottom = '';
    ref.current.parentElement.style.paddingTop = '';

    setIsBound(false);
    setIsSticky(false);

    computedPadding();
    setParent({
      ...parent,
      parentHeight: ref.current.parentElement.offsetHeight,
    });
  };

  // const width = (value) => {
  //   ref.current.style.maxWidth = `${value}px`;
  // }

  const isIE = () => {
    if (typeof window === 'undefined') return;
    const ua = window.navigator.userAgent;
    return ua.indexOf('MSIE ') > -1 || ua.indexOf('Trident/ ') > -1;
  };

  // const maxWidth = () => {
  //   return stickyValues.width - (stickyValues.padding.right + stickyValues.padding.left);
  // }

  const scrollBegin = () => {
    return parent.parentTop + stickyValues.top;
  };

  const scrollEnd = () => {
    return parent.parentHeight + parent.parentTop - stickyValues.height - stickyValues.padding.bottom;
  };

  const scrollHandler = () => {
    setScrollY(Math.ceil(window.pageYOffset));
  };

  const resizeHandler = () => {
    if (ref && ref.current) {
      setStickyValues({ ...stickyValues, width: ref.current.parentElement.offsetWidth });
      setParent({ ...parent, parentTop: ref.current.parentElement.offsetTop });
    }
  };

  const toggleSticky = () => {
    if (scrollY >= parent.parentTop + stickyValues.top && scrollY < scrollEnd()) {
      setIsSticky(true);
    } else {
      setIsSticky(false);
    }
  };

  const toggleBound = () => {
    if (scrollY >= scrollEnd() && scrollBegin() < scrollEnd()) {
      setIsBound(true);
    } else {
      setIsBound(false);
    }
  };

  const computedPadding = () => {
    const computed = window.getComputedStyle(ref.current);
    return {
      top: parseInt(computed['padding-top'], 10),
      right: parseInt(computed['padding-right'], 10),
      bottom: parseInt(computed['padding-bottom'], 10),
      left: parseInt(computed['padding-left'], 10),
    };
  };

  return (
    <div
      className={classnames({
        'sf-sticky': true,
        'sf-sticky--sticky': isSticky,
        'sf-sticky--bound': isBound,
      })}
      ref={ref}
    >
      {children}
    </div>
  );
};
