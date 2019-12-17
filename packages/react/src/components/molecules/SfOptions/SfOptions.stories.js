import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text } from '@storybook/addon-knobs';
import { SfOptions } from './';

storiesOf('Molecules|Options', module)
  .addDecorator(withKnobs)
  .add('Primary', () => (
    <SfOptions
      selected="XL"
      onSelect={(val) => console.log('selected', val)}
      label={text('Label', 'Size')}
      options={[
        {
          text: 'XS',
          value: 'XS',
        },
        {
          text: 'S',
          value: 'S',
        },
        {
          text: 'M',
          value: 'M',
        },
        {
          text: 'L',
          value: 'L',
        },
        {
          text: 'XL',
          value: 'XL',
        },
      ]}
    />
  ))
  .add('Color', () => (
    <SfOptions
      selected="Orange"
      onSelect={(val) => console.log('selected', val)}
      label={text('Label', 'Color')}
      type="color"
      options={[
        {
          color: 'Orange',
          value: 'Orange',
        },
        {
          color: 'Pink',
          value: 'Pink',
        },
        {
          color: 'Yellow',
          value: 'Yellow',
        },
        {
          color: 'Blue',
          value: 'Blue',
        },
        {
          color: 'Green',
          value: 'Green',
        },
      ]}
    />
  ))
  .add('Image', () => (
    <SfOptions
      selected="heart"
      onSelect={(val) => console.log('selected', val)}
      label={text('Label', 'Image')}
      type="image"
      options={[
        {
          image: '/assets/logo.svg',
          value: 'logo',
        },
        {
          image: '/assets/heart.svg',
          value: 'heart',
        },
        {
          image: '/assets/home.svg',
          value: 'home',
        },
        {
          image: '/assets/profile.svg',
          value: 'profile',
        },
      ]}
    />
  ));
