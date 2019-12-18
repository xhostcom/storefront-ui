import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text, boolean } from '@storybook/addon-knobs';
import { SfBar } from './';

storiesOf('Molecules|Bar', module)
  .addDecorator(withKnobs)
  .add('Primary', () => (
    <SfBar
      title={text('title', 'Dresses', 'Props')}
      back={boolean('back', true, 'Props')}
      close={boolean('close', true, 'Props')}
    />
  ))
  .add('Back', () => (
    <SfBar
      title={text('title', 'Dresses', 'Props')}
      back={boolean('back', true, 'Props')}
      close={boolean('close', true, 'Props')}
      backIcon={'BACK'}
    />
  ))
  .add('Title', () => (
    <SfBar back={boolean('back', true, 'Props')} close={boolean('close', true, 'Props')} title={'CUSTOM TITLE'} />
  ))
  .add('Close', () => (
    <SfBar
      title={text('title', 'Dresses', 'Props')}
      back={boolean('back', true, 'Props')}
      close={boolean('close', true, 'Props')}
      closeIcon={'CLOSE'}
    />
  ));
