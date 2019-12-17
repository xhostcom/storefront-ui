import React from 'react';
import { SfIcon } from '../../atoms';
import PropTypes from 'prop-types';
import '@storefront-ui/shared/styles/components/SfMenuItem.scss';

export const SfMenuItem = ({ label, count, icon }) => {
  return (
    <div className="sf-menu-item">
      {label && <span className="sf-menu-item__label">{label}</span>}
      {count && <span className="sf-menu-item__count">{count}</span>}
      {icon && <SfIcon icon={icon} className="sf-menu-item__mobile-nav-icon" size="14px" />}
    </div>
  );
};

SfMenuItem.propTypes = {
  label: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  count: PropTypes.string,
  icon: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
};

SfMenuItem.defaultProps = {
  label: '',
  count: '',
  icon: '',
};
