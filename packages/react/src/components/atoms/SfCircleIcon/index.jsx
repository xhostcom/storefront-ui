import React from 'react';
import { SfIcon, SfButton } from '../';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import '@storefront-ui/shared/styles/components/SfCircleIcon.scss';

export const SfCircleIcon = ({ classname, icon, size, color, children, ariaLabel, onclick }) => {
  return (
    <SfButton classname={classnames(classname, 'sf-circle-icon')} ariaLabel={ariaLabel} onclick={onclick}>
      {!children && <SfIcon classname="sf-circle-icon__icon" icon={icon} size={size} color={color} />}
      {children && children}
    </SfButton>
  );
};

SfCircleIcon.propTypes = {
  icon: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
  color: PropTypes.string,
  size: PropTypes.string,
  ariaLabel: PropTypes.string,
};

SfCircleIcon.defaultProps = {
  icon: '',
  color: 'white',
  size: '',
  /**
   * Sets aria-label for button icon
   */
  ariaLabel: null,
};
