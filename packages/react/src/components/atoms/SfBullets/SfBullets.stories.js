import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, number } from '@storybook/addon-knobs';
import { SfBullets } from './';

storiesOf('Atoms|Bullets', module)
  .addDecorator(withKnobs)
  .add('Primary', () => (
    <SfBullets
      total={number('total (props)', 3)}
      current={number('current (props)', 1)}
      onclick={(val) => console.log(val)}
    />
  ))
  .add('Active', () => (
    <SfBullets
      total={number('total (props)', 3)}
      current={number('current (props)', 1)}
      active={<li style={{ width: 10, height: 10, backgroundColor: '#9EE2B0', margin: 5 }} />}
    />
  ))
  .add('Inactive', () => (
    <SfBullets
      total={number('total (props)', 3)}
      current={number('current (props)', 1)}
      inactive={
        <li
          style={{
            width: 10,
            height: 10,
            backgroundColor: '#CCC',
            transform: 'rotate(45deg)',
            cursor: 'pointer',
            margin: 5,
          }}
        />
      }
      onclick={(val) => console.log(val)}
    />
  ));
