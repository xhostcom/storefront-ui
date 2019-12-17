import React, { useState, useRef, useEffect } from 'react';
import { SfImage } from '../../atoms';
import classnames from 'classnames';
import Glide from '@glidejs/glide';
import '@storefront-ui/shared/styles/components/SfGallery.scss';

export const SfGallery = ({ current, images, sliderOptions }) => {
  const [activeIndex, setActiveIndex] = useState(current - 1);
  const [glideObj, setGlideObj] = useState();
  const glide = useRef();

  useEffect(() => {
    const createGlide = new Glide(glide.current, sliderOptions);
    setGlideObj(createGlide);
    createGlide.on('run', () => {
      go(createGlide.index);
    });
    createGlide.mount();
  }, []);

  const mapPictures = () => {
    // map images to handle picture tags with SfImage
    return images.map(({ normal, big }) => {
      return {
        small: normal,
        normal: big,
      };
    });
  };

  const go = (index) => {
    setActiveIndex(index);
    if (glideObj) {
      glideObj.go('=' + index);
    }
  };

  return (
    <div className="sf-gallery">
      <div className="sf-gallery__thumbs">
        {images.map((el, idx) => (
          <div
            key={`img-${idx}`}
            className={classnames({
              'sf-gallery__item': true,
              'sf-gallery__item--selected': idx === activeIndex,
            })}
            onClick={() => go(idx)}
          >
            <img className="sf-gallery__thumb" src={el.small.url} alt={el.small.alt} />
          </div>
        ))}
      </div>
      <div className="sf-gallery__stage">
        <div className="glide" ref={glide}>
          <div className="glide__track" data-glide-el="track">
            <ul className="glide__slides">
              {mapPictures().map((el, idx) => (
                <li className="glide__slide" key={`slide-${idx}`}>
                  <SfImage className="sf-gallery__big-image" src={el} />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

SfGallery.defaultProps = {
  images: () => [],
  /**
   * Initial image number (starting from 1)
   */
  current: 1,
  /**
   * Glide slider options (https://glidejs.com/docs/options/)
   */
  sliderOptions: {
    type: 'slider',
    autoplay: false,
    rewind: false,
    gap: 0,
  },
};
