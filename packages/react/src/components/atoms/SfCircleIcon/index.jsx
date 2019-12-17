import React from 'react';
import { SfIcon, SfButton } from '../';
import classnames from 'classnames';
import '@storefront-ui/shared/styles/components/SfCircleIcon.scss';

export const SfCircleIcon = ({ classname, icon, sizeIcon, colorIcon, children }) => {
  return (
    <SfButton classname={classnames(classname, 'sf-circle-icon')}>
      {!children && <SfIcon classname="sf-circle-icon__icon" icon={icon} size={sizeIcon} color={colorIcon} />}
      {children && children}
    </SfButton>
  );
};

SfCircleIcon.defaultProps = {
  icon: 'home',
  colorIcon: 'white',
  sizeIcon: '100%',
};
