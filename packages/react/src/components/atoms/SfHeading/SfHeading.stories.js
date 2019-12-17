import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, optionsKnob as options, text, number } from '@storybook/addon-knobs';
import { SfHeading } from './';
import { SfIcon } from '../';
import classnames from 'classnames';

storiesOf('Atoms|Heading', module)
  .addDecorator(withKnobs)
  .add('Primary', () => (
    <SfHeading
      classname={classnames(
        options(
          'CSS modifier',
          {
            'sf-heading--no-underline': 'sf-heading--no-underline',
            'sf-heading--left': 'sf-heading--left',
            'sf-heading--right': 'sf-heading--right',
          },
          '',
          { display: 'multi-select' },
        ),
      )}
      level={number('(prop) level', 2, { min: 1, max: 6 })}
      title={text('(prop) title', 'Show how YOU wear it')}
      subtitle={text('(prop) subtitle', '#YOURLOOK')}
    />
  ))
  .add('Title', () => (
    <SfHeading
      classname={classnames(
        options(
          'CSS modifier',
          {
            'sf-heading--no-underline': 'sf-heading--no-underline',
            'sf-heading--left': 'sf-heading--left',
            'sf-heading--right': 'sf-heading--right',
          },
          '',
          { display: 'multi-select' },
        ),
      )}
      level={number('(prop) level', 2, { min: 1, max: 6 })}
      title={
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <SfIcon icon="heart" size="xxs" style={{ marginRight: '1rem' }} />
          {text('(prop) title', 'Show how YOU wear it')}
        </div>
      }
      subtitle={text('(prop) subtitle', '#YOURLOOK')}
    />
  ))
  .add('SubTitle', () => (
    <SfHeading
      classname={classnames(
        options(
          'CSS modifier',
          {
            'sf-heading--no-underline': 'sf-heading--no-underline',
            'sf-heading--left': 'sf-heading--left',
            'sf-heading--right': 'sf-heading--right',
          },
          '',
          { display: 'multi-select' },
        ),
      )}
      level={number('(prop) level', 2, { min: 1, max: 6 })}
      title={text('(prop) title', 'Show how YOU wear it')}
      subtitle={
        <div style={{ display: 'flex', alignItems: 'center' }}>
          {text('(prop) subtitle', '#YOURLOOK')}
          <SfIcon icon="notify" size="xxs" style={{ marginRight: '1rem' }} />
        </div>
      }
    />
  ));
