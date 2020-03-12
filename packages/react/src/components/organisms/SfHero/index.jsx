import React, { useState, useEffect, useRef } from 'react';
import Glide from '@glidejs/glide';
import classnames from 'classnames';
import { SfArrow, SfBullets } from '../../atoms';
import PropTypes from 'prop-types';
import '@storefront-ui/shared/styles/components/SfHero.scss';
import '@storefront-ui/shared/styles/components/SfBullets.scss';

const defaultOptions = {
  type: "slider",
  rewind: true,
  autoplay: 5000,
  perView: 1,
  gap: 0
}

export const SfHero = ({
  children,
  classname,
  sliderOptions,
  style
}) => {

  const [glideObj, setGlideObj] = useState();
  const [currentPage, setCurrentPage] = useState(1);
  const glide = useRef();

  useEffect(() => {
    if (getNumberOfPages()) {
      const createGlide = new Glide(glide.current, mergedOptions());
      setGlideObj(createGlide);
      createGlide.on('run', () => {
        go(createGlide.index);
        setCurrentPage(createGlide.index);
      });
      createGlide.mount();
    }
  }, []);

  const mergedOptions = () => {
    return {
      ...defaultOptions,
      ...sliderOptions,
    };
  }

  const getNumberOfPages = () => {
    return children
      ? children.length
      : 1;
  }

  const go = (direct) => {
    if (!glideObj) return;
    switch (direct) {
      case "prev":
        glideObj.go("<");
        break;
      case "next":
        glideObj.go(">");
        break;
      default:
        glideObj.go(`=${direct}`);
        break;
    }
  }

  return (
    <div className={classnames('sf-hero', classname)} style={style}>
      <div ref={glide} className="glide">
        <div className="glide__track" data-glide-el="track">
          <ul className="glide__slides sf-hero__slides">
            {children}
          </ul>
        </div>
      </div>
      {getNumberOfPages() > 1 && <div className="sf-hero__controls">
        <div onClick={() => go('prev')}>
          <SfArrow
            classname="sf-arrow--transparent"
            aria-label="previous"
          />
        </div>
        <div onClick={() => go('next')}>
          <SfArrow
            classname="sf-arrow--right sf-arrow--transparent"
            aria-label="next"
          />
        </div>
      </div>}
      {getNumberOfPages() > 1 && <div className="sf-hero__bullets">
        <SfBullets
          total={getNumberOfPages()}
          current={currentPage}
          onclick={(idx) => go(idx)}
        />
      </div>}
    </div>
  );
};

SfHero.propTypes = {
  sliderOptions: PropTypes.object
};

SfHero.defaultProps = {
  /**
   * Slider options like glide.js (https://glidejs.com/docs/)
   */
  sliderOptions: {
    type: Object,
    default: () => ({})
  }
};

