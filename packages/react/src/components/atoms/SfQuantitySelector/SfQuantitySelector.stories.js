import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text } from '@storybook/addon-knobs';
import { SfQuantitySelector } from './';

const QuantityWrapper = (props) => {
  const [value, setValue] = useState(1);

  return (
    <SfQuantitySelector
      qty={value}
      ariaLabel={props.ariaLabel}
      disabled={props.disabled}
      onchange={(ev) => setValue(ev.target.value)}
    />
  );
};

storiesOf('Atoms|QuantitySelector', module)
  .addDecorator(withKnobs)
  .add('Primary', () => <QuantityWrapper
    ariaLabel={text("ariaLabel", "Quantity", "Props")}
  />
);
