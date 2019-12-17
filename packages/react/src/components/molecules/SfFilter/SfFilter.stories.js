import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text, select, boolean } from '@storybook/addon-knobs';
import { SfFilter } from './';

storiesOf('Molecules|Filter', module)
  .addDecorator(withKnobs)
  .add('Primary', () => (
    <div style={{ width: 300 }}>
      <SfFilter
        label={text('label (prop)', 'Red')}
        count={text('count (prop)', '30')}
        color={select('color (prop)', ['red', null], 'red')}
        selected={boolean('selected (prop)', true)}
      />
    </div>
  ));
