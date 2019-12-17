import React, { useState, useEffect, useRef } from 'react';
import { SfIcon } from '../../atoms';
import classnames from 'classnames';
import '@storefront-ui/shared/styles/components/SfSlidingSection.scss';

export const SfSlidingSection = ({ active, mobile, scrollLock, staticContent, slidingContent, closeIcon }) => {
  const [isActive, setIsActive] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [hasScrollLock, setHasScrollLock] = useState(false);
  const [desktopMin, setDesktopMin] = useState(1024);
  const [hammer, setHammer] = useState();
  const [hasStaticHeight, setHasStaticHeight] = useState(false);

  const ref = useRef(null);

  useEffect(() => {
    import('hammerjs').then((h) => {
      const Hammer = h.default;
      setHammer(
        new Hammer(document, {
          enable: false,
        }).on('pan', touchHandler),
      );
      isMobileHandler();
      window.addEventListener('resize', isMobileHandler, {
        passive: true,
      });
    });
    return () => {
      scrollUnlock();
      hammer.destroy();
    };
  }, []);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    if (!mobile) {
      setIsActive(false);
      setHasScrollLock(false);
      // hammer.set({ enable: false });
      return;
    }
    setHasScrollLock(true);
    console.log(hammer);
    // hammer.set({ enable: true });
  }, [isMobile]);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    if (!active) {
      setHasStaticHeight(false);
      if (!isMobile) {
        setHasScrollLock(false);
        return;
      }
      setHasScrollLock(true);
      return;
    }
    setHasScrollLock(false);
  }, [isActive]);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    if (!scrollLock) {
      scrollUnlock();
      return;
    }
    scrollLockF();
  }, [hasScrollLock]);

  const touchPreventDefault = (e) => {
    e.preventDefault();
  };
  const isMobileHandler = () => {
    setIsMobile(Math.max(document.documentElement.clientWidth, window.innerWidth) < desktopMin);
  };
  const scrollLockF = () => {
    window.scrollTo(0, 0);
    document.body.classList.add('sf-sliding-section--has-scroll-lock');
    window.addEventListener('touchmove', touchPreventDefault, {
      passive: false,
    });
  };
  const scrollUnlock = () => {
    document.body.classList.remove('sf-sliding-section--has-scroll-lock');
    window.removeEventListener('touchmove', touchPreventDefault, {
      passive: false,
    });
  };
  const touchHandler = (event) => {
    const { direction, isFinal } = event;
    if (!hasStaticHeight && ref && ref.current && ref.current.offsetHeight > 0) {
      setHasStaticHeight(true);
      ref.current.style.setProperty('height', `${ref.current.offsetHeight}px`);
    }
    if (!isActive && isFinal && direction === 8) {
      setIsActive(true);
    }
    if (isActive && isFinal && direction === 16) {
      setIsActive(false);
    }
  };
  const closeHandler = () => {
    setIsActive(false);
  };

  return (
    <section className={classnames({ 'sf-sliding-section': true, 'sf-sliding-section--is-active': isActive })}>
      <div className="sf-sliding-section__static" ref={ref}>
        {staticContent && staticContent}
      </div>
      <div className="sf-sliding-section__sliding">
        <div className="sf-sliding-section__mobile-bar">
          {!closeIcon && (
            <button className="sf-sliding-section__close" onClick={closeHandler}>
              <SfIcon icon="cross" size="xxs" />
            </button>
          )}
          {closeIcon && closeIcon}
        </div>
        {slidingContent && slidingContent}
      </div>
    </section>
  );
};

SfSlidingSection.defaultProps = {};
