import React, { useState } from 'react';
import { SfInput, SfButton } from '../../atoms';
import PropTypes from 'prop-types';
import '@storefront-ui/shared/styles/components/SfAddToCart.scss';

export const SfAddToCart = ({ qty, stock, canAddToCart, onAddToCart }) => {
  const [value, setValue] = useState(qty);

  const inputHandler = (ev) => {
    setValue(ev.target.value);
  };

  const addToCartHandler = () => {
    if (onAddToCart) {
      onAddToCart(value);
    }
  };

  return (
    <div className="sf-add-to-cart" data-test="sf-add-to-card">
      <SfButton onclick={addToCartHandler} classname="sf-add-to-cart__button" disabled={!canAddToCart}>
        Add to cart
      </SfButton>
      <SfInput
        value={value}
        onchange={inputHandler}
        classname="sf-add-to-cart__select-quantity"
        type="number"
        min="1"
        max={stock}
      />
    </div>
  );
};

SfAddToCart.propTypes = {
  canAddToCart: PropTypes.bool,
  stock: PropTypes.number,
  qty: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
};

SfAddToCart.defaultProps = {
  /**
   * Boolean to indicate whether product
   * can be added to cart
   */
  canAddToCart: false,
  /**
   * Stock quantity of product
   */
  stock: 1,
  /**
   * Selected quantity
   */
  qty: '1',
};
