import React from 'react';
import '@storefront-ui/shared/styles/components/SfProductOption.scss';

export const SfProductOption = ({ label, color }) => {
  return (
    <div className="sf-product-option">
      {color && <div className="sf-product-option__color" style={{ background: color }} />}
      {label && <div className="sf-product-option__label">{label}</div>}
    </div>
  );
};

SfProductOption.defaultProps = {
  color: '',
  label: '',
};
