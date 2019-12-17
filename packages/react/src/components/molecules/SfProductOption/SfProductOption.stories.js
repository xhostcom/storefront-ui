import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text, select } from '@storybook/addon-knobs';
import { SfProductOption } from './';

storiesOf('Molecules|ProductOption', module)
  .addDecorator(withKnobs)
  .add('Primary', () => (
    <div style={{ width: 300 }}>
      <SfProductOption label={text('label', 'Red')} color={select('color', ['red', null], 'red')} />
    </div>
  ));
