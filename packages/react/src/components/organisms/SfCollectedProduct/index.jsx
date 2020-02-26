import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import { SfCircleIcon, SfImage, SfPrice, SfQuantitySelector } from '../../atoms';
import '@storefront-ui/shared/styles/components/SfCollectedProduct.scss';

export const SfCollectedProduct = ({
  classname,
  image,
  title,
  qty,
  imageWidth,
  imageHeight,
  regularPrice,
  specialPrice,
  onInputChange,
  onRemove,
  configuration,
  actions
}) => {
  return (
    <div className={classnames('sf-collected-product', classname)}>
      <SfCircleIcon
        icon="cross"
        classname="sf-collected-product__remove"
        onclick={onRemove}
      />
      <div className="sf-collected-product__aside">
        <SfImage
          src={image.desktop.url}
          alt={title}
          width={imageWidth}
          height={imageHeight}
          classname="sf-collected-product__image"
        />
        <SfQuantitySelector
          qty={qty}
          classname="sf-collected-product__quantity-selector"
          onchange={onInputChange}
        />
      </div>
      <div className="sf-collected-product__main">
        <div className="sf-collected-product__title">{ title }</div>
        {!!regularPrice && <SfPrice
          regular={regularPrice}
          special={specialPrice}
        />}
        <div className="sf-collected-product__details">
          {!!configuration && configuration}
          {!!actions && actions}
        </div>
      </div>
    </div>
  );
};

SfCollectedProduct.propTypes = {
  image: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  imageHeight: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  imageWidth: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  title: PropTypes.string,
  regularPrice: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  specialPrice: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  qty: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  configuration: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  actions: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
};

SfCollectedProduct.defaultProps = {
  /**
     * Product image
     * It should be an url of the product
     */
    image: "",
    /**
     * Product image width, without unit
     */
    imageWidth: 140,
    /**
     * Product image height, without unit
     */
    imageHeight: 200,
    /**
     * Product title
     */
    title: "",
    /**
     * Product regular price
     */
    regularPrice: null,
    /**
     * Product special price
     */
    specialPrice: null,
    /**
     * Selected quantity
     */
    qty: 1
};
