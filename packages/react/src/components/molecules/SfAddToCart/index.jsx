import React, { useState } from 'react';
import { SfInput, SfButton } from '../../atoms';
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
      <SfButton on={addToCartHandler} classname="sf-add-to-cart__button" disabled={!canAddToCart}>
        Add to cart
      </SfButton>
      <SfInput
        value={value}
        on={inputHandler}
        classname="sf-add-to-cart__select-quantity"
        type="number"
        min="1"
        max={stock}
      />
    </div>
  );
};

SfAddToCart.defaultProps = {
  canAddToCart: false,
  stock: 1,
  qty: '1',
};
