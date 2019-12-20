import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, boolean, select } from '@storybook/addon-knobs';
import { SfOverlay } from './';

const transition = ['fade', 'slide', 'collapse', 'fade-slide', 'fade-collapse'];

storiesOf('Atoms|Overlay', module)
  .addDecorator(withKnobs)
  .add('Primary', () => (
    <SfOverlay transition={select('transition (prop)', transition, 'fade')} visible={boolean('visible (prop)', true)} />
  ));
