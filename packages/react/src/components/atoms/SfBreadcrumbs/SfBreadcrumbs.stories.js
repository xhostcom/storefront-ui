import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, object } from '@storybook/addon-knobs';
import { SfBreadcrumbs } from './';

storiesOf('Atoms|Breadcrumbs', module)
  .addDecorator(withKnobs)
  .add('Primary', () => (
    <SfBreadcrumbs
      breadcrumbs={object('breadcrumbs (prop)', [
        { text: 'Home', route: { link: '#' } },
        { text: 'Category', route: { link: '#' } },
        { text: 'Pants', route: { link: '#' } },
      ])}
    />
  ))
  .add('Link', () => (
    <SfBreadcrumbs
      breadcrumbs={object('breadcrumbs (prop)', [
        { text: 'Home', route: { link: '#' } },
        { text: 'Category', route: { link: '#' } },
        { text: 'Pants', route: { link: '#' } },
      ])}
      linkStyle={{ textTransform: 'lowercase' }}
    />
  ))
  .add('Current', () => (
    <SfBreadcrumbs
      breadcrumbs={object('breadcrumbs (prop)', [
        { text: 'Home', route: { link: '#' } },
        { text: 'Category', route: { link: '#' } },
        { text: 'Pants', route: { link: '#' } },
      ])}
      currentStyle={{ textTransform: 'uppercase' }}
    />
  ));
