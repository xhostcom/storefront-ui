import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, optionsKnob as options, text } from '@storybook/addon-knobs';
import { SfBadge } from './';
import classnames from 'classnames';

storiesOf('Atoms|Badge', module)
  .addDecorator(withKnobs)
  .add('Primary', () => (
    <SfBadge
      classname={classnames(
        options(
          'CSS modifier',
          {
            'sf-badge--full-width': 'sf-badge--full-width',
            'color-primary': 'color-primary',
            'color-secondary': 'color-secondary',
            'color-warning': 'color-warning',
            'color-danger': 'color-danger',
            'color-info': 'color-info',
            'color-success': 'color-success',
          },
          '',
          { display: 'multi-select' },
        ),
      )}
    >
      {text('Inner text', 'Limited')}
    </SfBadge>
  ));
