import React from 'react';
import classnames from 'classnames';
import { SfInput } from '../../atoms';
import PropTypes from 'prop-types';
import '@storefront-ui/shared/styles/components/SfQuantitySelector.scss';

export const SfQuantitySelector = ({
  classname,
  qty,
  ariaLabel,
  disabled,
  onchange
}) => {
  return (
    <SfInput
      type="number"
      value={qty}
      aria-label={ariaLabel}
      disabled={disabled}
      classname={classnames(classname, 'sf-quantity-selector')}
      onchange={onchange}
    />
  )
};

SfQuantitySelector.propTypes = {
  ariaLabel: PropTypes.string,
  qty: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  disabled: PropTypes.Boolean
};

SfQuantitySelector.defaultProps = {
  /** Quantity */
  qty: 1,
  /**
   * Form input label
   */
  ariaLabel: "quantity",
  disabled: false
};
