import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import { SfTopBar } from './';

storiesOf('Organisms|TopBar', module)
  .addDecorator(withKnobs)
  .add('Primary', () => (
    <SfTopBar>
      <span>
        Download our application. <a style={{ textDecoration: 'underline' }}>Find out more.</a>
      </span>
    </SfTopBar>
  ))
  .add('Left', () => <SfTopBar leftContent="left content" />)
  .add('Right', () => <SfTopBar rightContent="right content" />);
