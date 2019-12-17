import React from 'react';
import { SfIcon, SfButton } from '../';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import '@storefront-ui/shared/styles/components/SfCircleIcon.scss';

export const SfCircleIcon = ({ classname, icon, sizeIcon, colorIcon, children, ariaLabel }) => {
  return (
    <SfButton classname={classnames(classname, 'sf-circle-icon')} ariaLabel={ariaLabel}>
      {!children && <SfIcon classname="sf-circle-icon__icon" icon={icon} size={sizeIcon} color={colorIcon} />}
      {children && children}
    </SfButton>
  );
};

SfCircleIcon.propTypes = {
  icon: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
  colorIcon: PropTypes.string,
  sizeIcon: PropTypes.string,
  ariaLabel: PropTypes.string,
};

SfCircleIcon.defaultProps = {
  icon: 'home',
  colorIcon: 'white',
  sizeIcon: '100%',
  /**
   * Sets aria-label for button icon
   */
  ariaLabel: null,
};
