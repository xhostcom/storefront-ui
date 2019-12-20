import React from 'react';
import PropTypes from 'prop-types';
import '@storefront-ui/shared/styles/components/SfTopBar.scss';

export const SfTopBar = ({ leftContent, children, rightContent }) => {
  return (
    <div className="sf-topbar">
      <div className="sf-topbar__left">{leftContent && leftContent}</div>
      <div className="sf-topbar__center">{children && children}</div>
      <div className="sf-topbar__right">{rightContent && rightContent}</div>
    </div>
  );
};

SfTopBar.propTypes = {
  leftContent: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  rightContent: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
};

SfTopBar.defaultProps = {
  leftContent: '',
  children: '',
  rightContent: '',
};
