import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, optionsKnob as options, text, boolean, select, number } from '@storybook/addon-knobs';
import classnames from 'classnames';
import { SfProductCard } from '../../organisms';

// const pictures = [
//   {
//     normal: {
//       url:
//         'https://ecom-ptqgjveg.nyc3.digitaloceanspaces.com/imgs/400px/@1550858949523-frontal-macbook-pro-apple-13-intel-core-i5-128gb-mpxq2bz-a.jpg',
//       alt: 'Macbook PRO Apple',
//     },
//     small: {
//       url:
//         'https://ecom-ptqgjveg.nyc3.digitaloceanspaces.com/imgs/100px/@1550858949523-frontal-macbook-pro-apple-13-intel-core-i5-128gb-mpxq2bz-a.jpg',
//       alt: 'Macbook PRO Apple',
//     },
//   },
//   {
//     normal: {
//       url:
//         'https://ecom-ptqgjveg.nyc3.digitaloceanspaces.com/imgs/400px/@1550858951531-teclado-macbook-pro-apple-13-intel-core-i5-128gb-mpxq2bz-a.jpg',
//       alt: 'Macbook PRO Apple (keyboard)',
//     },
//     small: {
//       url:
//         'https://ecom-ptqgjveg.nyc3.digitaloceanspaces.com/imgs/100px/@1550858951531-teclado-macbook-pro-apple-13-intel-core-i5-128gb-mpxq2bz-a.jpg',
//       alt: 'Macbook PRO Apple (keyboard)',
//     },
//   },
// ];

storiesOf('Organisms|ProductCard', module)
  .addDecorator(withKnobs)
  .add('Primary', () => (
    <SfProductCard
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
      image={text('image', 'assets/storybook/product_thumb.jpg', 'Props')}
      title={text('title', 'Product name', 'Props')}
      link={text('link', '', 'Props')}
      linkTag={text('linkTag', '', 'Props')}
      regularPrice={text('regularPrice', '$10,99', 'Props')}
      specialPrice={text('specialPrice', '$5,99', 'Props')}
      maxRating={number('maxRating', 5, {}, 'Props')}
      scoreRating={number('scoreRating', 4, {}, 'Props')}
      wishlistIcon={select('wishlistIcon', [false, 'heart'], 'heart', 'Props')}
      showAddToCartButton={select('showAddToCartButton', [false, true], true, 'Props')}
      isAddedToCart={select('isAddedToCart', [false, true], false, 'Props')}
      addToCartDisabled={select('addToCartDisabled', [false, true], false, 'Props')}
      isOnWishlist={boolean('isOnWishlist', false, 'Props')}
      isOnWishlistIcon={text('isOnWishlistIcon', 'heart_fill', 'Props')}
    />
  ));
