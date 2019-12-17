import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text, select } from '@storybook/addon-knobs';
import { SfMenuItem } from './';
import { icons } from '@storefront-ui/shared/icons/icons';

const iconsNames = ['', ...Object.keys(icons)];

storiesOf('Molecules|MenuItem', module)
  .addDecorator(withKnobs)
  .add('Primary', () => (
    <div style={{ width: 300 }}>
      <SfMenuItem
        label={text('label (prop)', 'Red')}
        count={text('count (prop)', '30')}
        icon={select('icon (prop)', iconsNames, '')}
      />
    </div>
  ));
