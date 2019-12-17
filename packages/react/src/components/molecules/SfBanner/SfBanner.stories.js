import React from 'react';
import { storiesOf } from '@storybook/react';
import classnames from 'classnames';
import { withKnobs, optionsKnob as options, text } from '@storybook/addon-knobs';
import { SfBanner } from './';

storiesOf('Molecules|Banner', module)
  .addDecorator(withKnobs)
  .add('Primary', () => (
    <SfBanner
      classname={classnames(
        options(
          'CSS modifier',
          {
            'sf-banner--left': 'sf-banner--left',
            'sf-banner--top': 'sf-banner--top',
            'sf-banner--bottom': 'sf-banner--bottom',
            'sf-banner--center': 'sf-banner--center',
            'sf-banner--secondary': 'sf-banner--secondary',
            'sf-banner--container-medium': 'sf-banner--container-medium',
            'sf-banner--container-full': 'sf-banner--container-full',
          },
          '',
          { display: 'multi-select' },
        ),
      )}
      title={text('title (prop)', 'Eco Sandals')}
      subtitle={text('subtitle (prop)', 'Summer shoes')}
      description={text(
        'description (prop)',
        'The collection features formal and casual comfort shoes with a Danish design focus. Made from premium leathers and comfort.',
      )}
      buttonText={text('buttonText (prop)', 'Shop Now')}
      background={text('background (prop)', '#e1e3e2')}
      image={text('image (prop)', 'assets/storybook/Banner1.jpg')}
    />
  ))
  .add('Title', () => (
    <SfBanner
      description="Description property filled with some random text just to show how long it can be. Then some additional text because why not."
      subtitle="Subtitle prop"
      buttonText="Button Text"
      background="#e1e3e2"
      image="assets/storybook/Banner1.jpg"
      title={<h1>{'Title prop'}</h1>}
    />
  ))
  .add('Subtitle', () => (
    <SfBanner
      description="Description property filled with some random text just to show how long it can be. Then some additional text because why not."
      subtitle={<b>Subtitle prop</b>}
      buttonText="Button Text"
      background="#e1e3e2"
      image="assets/storybook/Banner1.jpg"
      title="Title prop"
    />
  ))
  .add('Description', () => (
    <SfBanner
      description="Description property filled with some random text just to show how long it can be. Then some additional text because why not."
      subtitle="Subtitle prop"
      buttonText="Button Text"
      background="#e1e3e2"
      image="assets/storybook/Banner1.jpg"
      title="Title prop"
    />
  ))
  .add('Custom Button', () => (
    <SfBanner
      description={
        <b>
          Description property filled with some random text just to show how long it can be. Then some additional text
          because why not.
        </b>
      }
      subtitle="Subtitle prop"
      buttonText="Button Text"
      background="#e1e3e2"
      image="assets/storybook/Banner1.jpg"
      title="Title prop"
      customButton={<button>Custom CTA</button>}
    />
  ));
