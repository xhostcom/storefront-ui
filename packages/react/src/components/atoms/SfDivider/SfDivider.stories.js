import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import { SfDivider } from './';

storiesOf('Atoms|Divider', module)
  .addDecorator(withKnobs)
  .add('Primary', () => <SfDivider />);
