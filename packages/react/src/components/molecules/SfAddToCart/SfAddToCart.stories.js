import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, number, boolean } from '@storybook/addon-knobs';
import { SfAddToCart } from './';

const AddToCartWrapper = (props) => {
  const [value, setValue] = useState(undefined);

  return (
    <SfAddToCart
      stock={props.stock}
      qty={value}
      canAddToCart={props.canAddToCart}
      onAddToCart={(val) => console.log(val)}
    />
  );
};

storiesOf('Molecules|AddToCart', module)
  .addDecorator(withKnobs)
  .add('Primary', () => (
    <AddToCartWrapper stock={number('stock (prop)', 3)} canAddToCart={boolean('canAddToCart (prop)', true)} />
  ));
