import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text, object, boolean, number } from '@storybook/addon-knobs';
import { SfImage } from './';

storiesOf('Atoms|Image', module)
  .addDecorator(withKnobs)
  .add('Primary', () => (
    <SfImage
      src={object('src (prop)', {
        small: {
          url: '/assets/storybook/product-109x164.jpg',
          alt: 'Vila stripe maxi shirt dress',
        },
        normal: {
          url: '/assets/storybook/product-216x326.jpg',
          alt: 'Vila stripe maxi shirt dress',
        },
      })}
      alt={text('alt (prop)', 'Vila stripe maxi shirt dress')}
      placeholder={text('placeholder (prop)', '/assets/placeholder.png')}
      transition={text('transition (prop)', 'fade')}
      lazy={boolean('lazy (prop)', true)}
      pictureBreakpoint={number('pictureBreakpoint (prop)', 576)}
    />
  ))
  .add('Overlay', () => (
    <SfImage
      src={object('src (prop)', {
        small: {
          url: '/assets/storybook/product-109x164.jpg',
          alt: 'Vila stripe maxi shirt dress',
        },
        normal: {
          url: '/assets/storybook/product-216x326.jpg',
          alt: 'Vila stripe maxi shirt dress',
        },
      })}
      alt={text('alt (prop)', 'Vila stripe maxi shirt dress')}
      placeholder={text('placeholder (prop)', '/assets/placeholder.png')}
      transition={text('transition (prop)', 'fade')}
      lazy={boolean('lazy (prop)', true)}
      pictureBreakpoint={number('pictureBreakpoint (prop)', 576)}
    >
      <span>angelina_trn</span>
    </SfImage>
  ));
