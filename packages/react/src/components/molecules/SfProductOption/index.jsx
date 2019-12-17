import React from 'react';
import PropTypes from 'prop-types';
import '@storefront-ui/shared/styles/components/SfProductOption.scss';

export const SfProductOption = ({ label, color }) => {
  return (
    <div className="sf-product-option">
      {color && <div className="sf-product-option__color" style={{ background: color }} />}
      {label && <div className="sf-product-option__label">{label}</div>}
    </div>
  );
};

SfProductOption.propTypes = {
  color: PropTypes.string,
  label: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
};

SfProductOption.defaultProps = {
  color: '',
  label: '',
};
