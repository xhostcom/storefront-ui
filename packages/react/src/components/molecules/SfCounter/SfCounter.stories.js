import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text, number, optionsKnob as options, boolean } from '@storybook/addon-knobs';
import classnames from 'classnames';
import { SfCounter } from './';

storiesOf('Molecules|Counter', module)
  .addDecorator(withKnobs)
  .add('Primary', () => (
    <SfCounter
      classname={classnames(
        options(
          'CSS modifier',
          {
            'sf-counter--large': 'sf-counter--large',
          },
          'sf-section--no-underline',
          { display: 'multi-select' },
        ),
      )}
      value={number('value (prop)', 1)}
      autoFill={boolean('autoFill (prop)')}
      min={number('min (prop)')}
      max={number('max (prop)')}
      step={number('step (prop)', 1)}
      precision={number('precision (prop)', 0)}
      delimiter={text('delimiter (prop)', '.')}
      thousands={text('delimiter (prop)', ',')}
      name={text('name (prop)')}
      type={text('type (prop)', 'text')}
      placeholder={text('placeholder (prop)')}
      disabled={boolean('disabled (prop)')}
      required={boolean('required (prop)')}
    />
  ))
  .add('Up', () => <SfCounter iconUp={<>+</>} />)
  .add('Down', () => <SfCounter iconDown={<>-</>} />);
