import React, { useState, useEffect, useRef } from "react";
import lozad from 'lozad';
import '@storefront-ui/shared/styles/components/SfImage.scss'

export const SfImage = (props) => {
  const ref = useRef(null)
  const [loaded, setLoaded] = useState(false)
  const [overlay, setOverlay] = useState(false)
  useEffect(() => {
    if (props.lazy !== false && ref) {
      const observer = lozad(ref.current, {
        loaded: () => {
          setLoaded(true)
        }
      });
      observer.observe();
    } else {
      setLoaded(true)
    }
  }, [props.src])

  const hoverHandler = (state) => {
    setOverlay(state)
  } 
  
  return (
    <div
      className="sf-image"
      onMouseOver={() => hoverHandler(true)}
      onMouseLeave={() => hoverHandler(false)}
    >
      {/* <transition :name="transition"> */}
      {overlay && loaded && props.children &&
        <div className="sf-image__overlay">
          {props.children}
        </div>
      }
      {/* </transition> */}

      {props.lazy
        ?
        <>
          {typeof props.src === 'string' &&
            <img
              ref={ref}
              alt={props.alt}
              data-src={props.src}
              className="sf-image__img"
            />
          }

          {props.src && props.src.normal &&
            <>
            {props.src.small &&
              <picture
                ref={ref}
                className="sf-image__img"
                data-iesrc={props.src.normal.url}
                data-alt={props.src.normal.alt}
              >
                <source
                  srcSet={props.src.small.url}
                  media={`(max-width: ${props.pictureBreakpoint - 0.02}px)`}
                />
                <source
                  srcSet={props.src.normal.url}
                  media={`(min-width: ${props.pictureBreakpoint}px)`}
                />
                
              </picture>
            }
            {!props.src &&
              <img
                ref={ref}
                alt={props.src.normal.alt}
                data-src={props.src.normal.url}
                className="sf-image__img"
              />
            }
            </>
          }

          {!props.src && <img src={props.placeholder} alt="No image" className="sf-image__img" />}
        </>
      :
        <>
          {typeof props.src === 'string' &&
            <img
              alt={props.alt}
              src={props.src}
              className="sf-image__img"
            />
          }
          {props.src && props.src.normal &&
            <picture className="sf-image__img">
              {props.src.small &&
                <source
                  srcSet={props.src.small.url}
                  media={`(max-width: ${props.pictureBreakpoint - 0.02}px)`}
                />
              }
              <source
                srcSet={props.src.normal.url}
                media={`(min-width: ${props.pictureBreakpoint}px)`}
              />
              <img
                src={props.src.normal.url}
                alt={props.src.normal.alt}
                className="sf-image__img"
              />
            </picture>
          }
          {!props.src &&
            <img src={props.placeholder} alt="No image" className="sf-image__img" />
          }
        </>
      }
    </div>
  );
};

SfImage.defaultProps = {
  src: () => {},
  alt: "",
  transition: "fade",
  lazy: true,
  placeholder: "/assets/placeholder.png",
  pictureBreakpoint: 576
}
