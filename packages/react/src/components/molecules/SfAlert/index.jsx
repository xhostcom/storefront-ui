import React from 'react';
import classnames from 'classnames';
import { SfIcon } from '../../atoms';
import '@storefront-ui/shared/styles/components/SfAlert.scss';

export const SfAlert = ({ classname, message, icon, type }) => {
  const getIcon = () => {
    switch (type) {
      case 'success':
        return 'added_to_cart';
      case 'danger':
        return 'info_shield';
      default:
        return 'info_circle';
    }
  };

  return (
    <div className={classnames(classname, 'sf-alert', `sf-alert--${type}`)}>
      {!icon && <SfIcon icon={getIcon()} size="24px" color="white" classname="sf-alert__icon" />}
      {icon && icon}
      <span className="sf-alert__message">{message}</span>
    </div>
  );
};

SfAlert.defaultProps = {
  message: '',
  type: 'secondary',
};
