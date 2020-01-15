import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, optionsKnob as options } from '@storybook/addon-knobs';
import classnames from 'classnames';
import { SfBannerGrid } from '../../organisms';
import { SfBanner } from '../../molecules';

storiesOf('Organisms|BannerGrid', module)
  .addDecorator(withKnobs)
  .add('Primary', () => (
    <div style={{ maxWidth: 1240, margin: 'auto' }}>
      <SfBannerGrid
        classname={classnames(
          options(
            'CSS Modifiers',
            {
              'sf-banner-grid--modifier': 'sf-banner-grid--modifier',
            },
            '',
            { display: 'multi-select' },
            'CSS Modifiers',
          ),
        )}
        bannerA={
          <a href="#">
            <SfBanner
              subtitle="Dresses"
              title="COCKTAIL PARTY"
              description="Find stunning women's cocktail dresses and party dresses. Stand out in lace and metallic cocktail dresses from all your favorite brands."
              buttonText="SHOP NOW"
              image="assets/storybook/homepage/bannerF.jpg"
              classname="sf-banner--slim"
            />
          </a>
        }
        bannerB={
          <a href="#">
            <SfBanner
              subtitle="Dresses"
              title="LINEN DRESSES"
              description="Find stunning women's cocktail dresses and party dresses. Stand out in lace and metallic cocktail dresses from all your favorite brands."
              buttonText="SHOP NOW"
              image="assets/storybook/homepage/bannerE.jpg"
              classname="sf-banner--slim"
              style={{ paddingRight: '20%' }}
            />
          </a>
        }
        bannerC={
          <a href="#">
            <SfBanner
              subtitle="T-Shirts"
              title="THE OFFICE LIFE"
              image="assets/storybook/homepage/bannerC.jpg"
              classname="sf-banner--slim"
            />
          </a>
        }
        bannerD={
          <a href="#">
            <SfBanner
              subtitle="Summer shoes"
              title="ECO SANDALS"
              image="assets/storybook/homepage/bannerG.jpg"
              classname="sf-banner--slim"
            />
          </a>
        }
      />
    </div>
  ))
  .add('Grid 2', () => (
    <div style={{ maxWidth: 1240, margin: 'auto' }}>
      <SfBannerGrid
        classname={classnames(
          options(
            'CSS Modifiers',
            {
              'sf-banner-grid--modifier': 'sf-banner-grid--modifier',
            },
            '',
            { display: 'multi-select' },
            'CSS Modifiers',
          ),
        )}
        bannerGrid={2}
        bannerA={
          <a href="#">
            <SfBanner
              subtitle="Dresses"
              title="COCKTAIL PARTY"
              description="Find stunning women's cocktail dresses and party dresses. Stand out in lace and metallic cocktail dresses from all your favorite brands."
              buttonText="SHOP NOW"
              image="assets/storybook/homepage/bannerF.jpg"
              classname="sf-banner--slim"
            />
          </a>
        }
        bannerB={
          <a href="#">
            <SfBanner
              subtitle="Dresses"
              title="LINEN DRESSES"
              description="Find stunning women's cocktail dresses and party dresses. Stand out in lace and metallic cocktail dresses from all your favorite brands."
              buttonText="SHOP NOW"
              image="assets/storybook/homepage/bannerE.jpg"
              classname="sf-banner--slim"
              style={{ paddingRight: '20%' }}
            />
          </a>
        }
        bannerC={
          <a href="#">
            <SfBanner
              subtitle="T-Shirts"
              title="THE OFFICE LIFE"
              image="assets/storybook/homepage/bannerC.jpg"
              classname="sf-banner--slim"
            />
          </a>
        }
        bannerD={
          <a href="#">
            <SfBanner
              subtitle="Summer shoes"
              title="ECO SANDALS"
              image="assets/storybook/homepage/bannerG.jpg"
              classname="sf-banner--slim"
            />
          </a>
        }
      />
    </div>
  ));
