import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, optionsKnob as options, text } from '@storybook/addon-knobs';
import classnames from 'classnames';
import { SfHero, SfHeroItem } from '../../organisms';

storiesOf('Organisms|Hero', module)
  .addDecorator(withKnobs)
  .add('Primary', () => (
    <SfHero
      classname={classnames(
        options(
          'CSS modifier',
          {
            "sf-hero-item--position-bg-top-right":
              "sf-hero-item--position-bg-top-right",
            "sf-hero-item--position-bg-bottom-right":
              "sf-hero-item--position-bg-bottom-right",
            "sf-hero-item--position-bg-bottom-left":
              "sf-hero-item--position-bg-bottom-left",
            "sf-hero-item--align-right": "sf-hero-item--align-right"
          },
          'sf-bottom-navigation__item--active',
          { display: 'multi-select' },
        ),
      )}
      style={{maxWidth: 1240, margin: 'auto'}}
    >
        <SfHeroItem
          title={text(
              "title",
              "Colorful summer dresses are already in store",
              "Props"
            )
          }
          subtitle={text("subtitle", "Summer Collection 2019", "Props")}
          buttonText={text("buttonText", "Lear more", "Props")}
          image={text("image", "/assets/storybook/SfHero/hero.png", "Props")}
          background={text("background", "#ECEFF1", "Props")}
        />
        <SfHeroItem
          title="Colorful summer dresses are already in store"
          subtitle="Summer Collection 2019"
          buttonText="Learn more"
          image="/assets/storybook/SfHero/hero.png"
          background="#FCE4EC"
        />
    </SfHero>
  ));
