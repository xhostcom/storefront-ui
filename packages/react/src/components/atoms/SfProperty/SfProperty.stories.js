import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, optionsKnob as options, text } from '@storybook/addon-knobs';
import { SfProperty } from './';
import { SfBadge } from '../';
import classnames from 'classnames';

storiesOf('Atoms|Property', module)
  .addDecorator(withKnobs)
  .add('Primary', () => (
    <SfProperty
      classname={classnames(
        options(
          'CSS modifier',
          {
            'sf-property--full-width': 'sf-property--full-width',
          },
          '',
          { display: 'multi-select' },
        ),
      )}
      name={text('score (prop)', 'Material')}
      value={text('max (prop)', 'Cotton')}
    />
  ))
  .add('Name', () => (
    <SfProperty
      classname={classnames(
        options(
          'CSS modifier',
          {
            'sf-property--full-width': 'sf-property--full-width',
          },
          '',
          { display: 'multi-select' },
        ),
      )}
      name={
        <>
          {text('score (prop)', 'Material')}:<br />
        </>
      }
      value={text('max (prop)', 'Cotton')}
    />
  ))
  .add('Value', () => (
    <SfProperty
      classname={classnames(
        options(
          'CSS modifier',
          {
            'sf-property--full-width': 'sf-property--full-width',
          },
          '',
          { display: 'multi-select' },
        ),
      )}
      name={text('score (prop)', 'Material')}
      value={<SfBadge>{text('max (prop)', 'Cotton')}</SfBadge>}
    />
  ));
