import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import '@storefront-ui/shared/styles/components/SfArrow.scss';

export const SfArrow = ({ classname, onclick, children }) => {
  return (
    <div className={classnames(classname, 'sf-arrow')}>
      <button onClick={onclick} className="sf-arrow__button">
        {!children && (
          <svg className="sf-arrow__icon" viewBox="0 0 24 12" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M24 7L2 7L2 5L24 5L24 7Z" />
            <path d="M6.61667 1.20934e-07L8 1.25423L2.76478 6L8 10.7458L6.61667 12L-5.24538e-07 5.99998L6.61667 1.20934e-07Z" />
          </svg>
        )}
        {children}
      </button>
    </div>
  );
};

SfArrow.propTypes = {
  classname: PropTypes.string,
  onclick: PropTypes.func,
};
