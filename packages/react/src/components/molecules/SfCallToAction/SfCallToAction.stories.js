import React from 'react';
import { storiesOf } from '@storybook/react';
import classnames from 'classnames';
import { withKnobs, optionsKnob as options, text } from '@storybook/addon-knobs';
import { SfCallToAction } from './';

storiesOf('Molecules|CallToAction', module)
  .addDecorator(withKnobs)
  .add('Primary', () => (
    <div style={{ maxWidth: 1240 }}>
      <SfCallToAction
        classname={classnames(
          options(
            'CSS modifier',
            {
              'sf-call-to-action--secondary': 'sf-call-to-action--secondary',
              'sf-call-to-action--light': 'sf-call-to-action--light',
            },
            '',
            { display: 'multi-select' },
          ),
        )}
        title={text('title (prop)', 'Subscribe to Newsletters')}
        description={text(
          'description (prop)',
          'Be aware of upcoming sales and events. Receive gifts and special offers!',
        )}
        buttonText={text('buttonText (prop)', 'Subscribe')}
        image={text('image (prop)', 'assets/storybook/homepage/newsletter.jpg')}
      />
    </div>
  ))
  .add('Title', () => (
    <SfCallToAction
      description="Description prop lorem ipsum dolor sit amet"
      buttonText="check out"
      title={<h1>{'Lorem ipsum'}</h1>}
    />
  ))
  .add('Description', () => (
    <SfCallToAction
      description={<p> Description prop lorem ipsum dolor sit amet</p>}
      buttonText="check out"
      title="Title prop"
    />
  ))
  .add('Custom Button', () => (
    <SfCallToAction
      description="Description prop lorem ipsum dolor sit amet"
      title="Title prop"
      customButton={<button>Custom CTA</button>}
    />
  ));
