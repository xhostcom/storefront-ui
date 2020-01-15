import React, { useState, useRef } from 'react';
import { SfIcon, SfImage, SfCircleIcon, SfPrice, SfRating } from '../../atoms';
import { CSSTransition } from 'react-transition-group';
import PropTypes from 'prop-types';
import '../../utilities/transitions/transitions.scss';
import '@storefront-ui/shared/styles/components/SfProductCard.scss';

export const SfProductCard = ({
  wishlistIcon,
  link,
  linkTag,
  image,
  title,
  scoreRating,
  reviewsCount,
  isOnWishlist,
  isOnWishlistIcon,
  regularPrice,
  specialPrice,
  maxRating,
  isAddedToCart,
  addToCartDisabled,
  addToCart,
  wishListClick,
  showAddToCartButton,
}) => {
  const [isAddingToCart, setIsAddingToCart] = useState(false);

  const ref = useRef(null);

  const currentWishlistIcon = () => {
    return isOnWishlist ? isOnWishlistIcon : wishlistIcon;
  };

  const showAddedToCartBadge = () => {
    return !isAddingToCart && isAddedToCart;
  };

  const ariaLabel = () => {
    return isOnWishlist ? 'Remove from wishlist' : 'Add to wishlist';
  };

  const wishlistIconClasses = () => {
    const defaultClass = 'sf-product-card__wishlist-icon';

    return `${defaultClass} ${isOnWishlist ? 'sf-product-card--on-wishlist' : ''}`;
  };

  // const linkComponentTag = () => {
  //   if (linkTag) {
  //     return linkTag;
  //   }
  //   if (link) {
  //     return typeof link === 'object' || this.$router ? 'router-link' : 'a';
  //   }
  //   return 'div';
  // };

  const toggleIsOnWishlist = () => {
    wishListClick(!isOnWishlist);
  };

  const onAddToCart = (event) => {
    event.preventDefault();
    setIsAddingToCart(true);
    setTimeout(() => {
      setIsAddingToCart(false);
    }, 1000);
    addToCart();
  };

  return (
    <div className="sf-product-card">
      {!!wishlistIcon && (
        <button ariaLabel={ariaLabel()} onClick={toggleIsOnWishlist} className={wishlistIconClasses()}>
          {/* <slot name="wishlist-icon" v-bind="{ currentWishlistIcon }"> */}
          <SfIcon icon={currentWishlistIcon()} color="black" size="22px" data-test="sf-wishlist-icon" />
          {/* </slot> */}
        </button>
      )}
      <div className="sf-product-card__link">
        <div className="sf-product-card__image-wrapper" ref={ref}>
          {/* <slot name="image"> */}
          {Array.isArray(image) ? (
            <div className="sf-product-card__pictures">
              {image.slice(0, 2).map((el, idx) => (
                <div className="sf-product-card__picture" key={idx}>
                  <div className="sf-product-card__image">
                    <SfImage src={el} alt={title} />
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="sf-product-card__image">
              <SfImage src={image} alt={title} />
            </div>
          )}
          {/* </slot> */}

          {showAddToCartButton && (
            // <slot name="add-to-cart" v-bind="{ isAddedToCart, showAddedToCartBadge, isAddingToCart }">
            <SfCircleIcon
              classname="sf-product-card__add-button"
              onClick={onAddToCart}
              ariaLabel="add-to-cart"
              role="button"
              hasBadge={showAddedToCartBadge()}
              disabled={addToCartDisabled}
            >
              <div className="sf-product-card__add-button--icons">
                <CSSTransition in={!isAddingToCart} classNames={'fade'} timeout={300} unmountOnExit>
                  {/* <slot name="add-to-cart-icon"> */}
                  <SfIcon key="add_to_cart" icon="add_to_cart" size="20px" color="white" />
                  {/* </slot> */}
                </CSSTransition>
                <CSSTransition in={isAddingToCart} classNames={'fade'} timeout={300} unmountOnExit>
                  {/* <slot name="adding-to-cart-icon"> */}
                  <SfIcon key="added_to_cart" icon="added_to_cart" size="20px" color="white" />
                  {/* </slot> */}
                </CSSTransition>
              </div>
            </SfCircleIcon>
            // </slot>
          )}
        </div>

        <slot name="title" v-bind="{ title }">
          <h3 className="sf-product-card__title">{title}</h3>
        </slot>
      </div>
      {!!regularPrice && <SfPrice classname="sf-product-card__price" regular={regularPrice} special={specialPrice} />}
      {/* <slot name="reviews" v-bind="{ maxRating, scoreRating }"> */}
      {typeof scoreRating === 'number' && (
        <div className="sf-product-card__reviews">
          <SfRating classname="sf-product-card__rating" max={maxRating} score={scoreRating} />
          {reviewsCount && (
            <a classname="sf-product-card__reviews-count" href="#" click="$emit('click:reviews')">
              {reviewsCount}
            </a>
          )}
        </div>
      )}
      {/* </slot> */}
    </div>
  );
};

SfProductCard.propTypes = {
  image: PropTypes.oneOfType([PropTypes.string, PropTypes.object, PropTypes.Array]),
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  link: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  linkTag: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  scoreRating: PropTypes.oneOfType([PropTypes.bool, PropTypes.number]),
  reviewsCount: PropTypes.oneOfType([PropTypes.bool, PropTypes.number]),
  maxRating: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  regularPrice: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  specialPrice: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  wishlistIcon: PropTypes.oneOfType([PropTypes.string, PropTypes.bool, PropTypes.array]),
  isOnWishlistIcon: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
  isOnWishlist: PropTypes.bool,
  showAddToCartButton: PropTypes.bool,
  isAddedToCart: PropTypes.bool,
  addToCartDisabled: PropTypes.bool,
};

SfProductCard.defaultProps = {
  /**
   * Product image
   * It should be an url of the product
   */
  image: '',
  /**
   * Product title
   */
  title: '',
  /**
   * Link to product page
   */
  link: null,
  /**
   * Link element tag
   * By default it'll be 'router-link' if Vue Router
   * is available on instance, or 'a' otherwise.
   */
  linkTag: null,
  /**
   * Product rating
   */
  scoreRating: false,
  /**
   * Product reviews count
   */
  reviewsCount: false,
  /**
   * Maximum product rating
   */
  maxRating: {
    type: [Number, String],
    default: 5,
  },
  /**
   * Product regular price
   */
  regularPrice: null,
  /**
   * Product special price
   */
  specialPrice: null,
  /**
   * Wish list icon
   * This is the default icon for product not yet added to wish list.
   * It can be a icon name from our icons list, or array or string as SVG path(s).
   */
  wishlistIcon: 'heart',
  /**
   * Wish list icon for product which has been added to wish list
   * This is the icon for product added to wish list. Default visible on mobile. Visible only on hover on desktop.
   * It can be a icon name from our icons list, or array or string as SVG path(s).
   */
  isOnWishlistIcon: 'heart_fill',
  /**
   * Status of whether product is on wish list or not
   */
  isOnWishlist: false,
  /**
   * Status of showing add to cart button
   */
  showAddToCartButton: false,
  /**
   * isAddedToCart status of whether button is showed, product is added or not
   */
  isAddedToCart: false,
  /**
   * addToCartDisabled status of whether button is disabled when out of stock
   */
  addToCartDisabled: false,
  addToCart: () => {},
  wishListClick: () => {},
};
