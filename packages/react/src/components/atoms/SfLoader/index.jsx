import React from 'react';
import { CSSTransition } from 'react-transition-group';
import '../../utilities/transitions/transitions.scss';
import '@storefront-ui/shared/styles/components/SfLoader.scss';

export const SfLoader = (props) => {
  return (
    <div className="sf-loader">
      {!props.loading && props.children}
      <CSSTransition in={props.loading} classNames="fade" timeout={300} unmountOnExit>
        <div className="sf-loader__overlay">
          {props.loader && props.loader}
          {!props.loader && (
            <svg
              width="38"
              height="38"
              viewBox="0 0 38 38"
              xmlns="http://www.w3.org/2000/svg"
              className="sf-loader__spinner"
            >
              <g fill="none" fillRule="evenodd">
                <g transform="translate(1 1)" strokeWidth="2">
                  <circle strokeOpacity=".5" cx="18" cy="18" r="18" />
                  <path d="M36 18c0-9.94-8.06-18-18-18">
                    <animateTransform
                      attributeName="transform"
                      type="rotate"
                      from="0 18 18"
                      to="360 18 18"
                      dur="1s"
                      repeatCount="indefinite"
                    />
                  </path>
                </g>
              </g>
            </svg>
          )}
        </div>
      </CSSTransition>
    </div>
  );
};
