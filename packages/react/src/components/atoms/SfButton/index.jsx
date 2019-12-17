import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import '@storefront-ui/shared/styles/components/SfButton.scss';

export const SfButton = ({ classname, children, onclick, ariaLabel, ...restProps }) => {
  return (
    <button className={classnames(classname, 'sf-button')} onClick={onclick} aria-label={ariaLabel} {...restProps}>
      {children}
    </button>
  );
};

SfButton.propTypes = {
  classname: PropTypes.string,
  onclick: PropTypes.func,
  ariaLabel: PropTypes.string,
};
