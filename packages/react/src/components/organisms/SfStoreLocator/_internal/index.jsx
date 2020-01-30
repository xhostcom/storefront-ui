import React from 'react';
import { SfDivider, SfIcon, SfImage } from '../../../atoms';
import PropTypes from 'prop-types';
import '@storefront-ui/shared/styles/components/SfStoreLocator.scss';

export const SfStore = ({
  latlng,
  name,
  picture,
  address,
  phone,
  email,
  centerOn,
  // registerStore,
  // removeStore,
  userPosition,
}) => {
  const distance = () => {
    if (userPosition) {
      const dictLatLng = {
        lat: latlng[0],
        lng: latlng[1],
      };
      return getGeoDistance(userPosition, dictLatLng);
    }
    return null;
  };
  return (
    <div className="sf-store">
      <SfDivider classname="sf-store__first-divider" />
      <div className="sf-store__item">
        <div className="sf-store__item-media" onClick={() => centerOn(latlng)}>
          <SfImage src={picture} alt={`${name} picture`} tabIndex={'0'} />
        </div>
        <div className="sf-store__item-info">
          <div className="sf-store__item-info-heading">
            <div className="sf-store__item-info-heading-name" tabIndex={'0'}>
              {name}
            </div>
            {distance() && (
              <div className="sf-store__item-info-heading-distance" tabIndex={'0'}>
                <span>{distance()}km</span> away from you
              </div>
            )}
          </div>
          {address && (
            <div className="sf-store__item-info-address" tabIndex={'0'}>
              {address}
            </div>
          )}
          {phone && (
            <div className="sf-store__item-info-phone">
              <SfIcon icon="phone" size="13px" color="green-primary" />
              <span tabIndex={'0'}>{phone}</span>
            </div>
          )}
          {email && (
            <div className="sf-store__item-info-email">
              <SfIcon icon="mail" size="13px" color="green-primary" />
              <span tabIndex={'0'}>{email}</span>
            </div>
          )}
          <SfDivider className="sf-store__mobile-divider" />
        </div>
      </div>
      <SfDivider className="sf-store__desktop-divider" />
    </div>
  );
};

SfStore.propTypes = {
  latlng: PropTypes.array,
  name: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  picture: PropTypes.string,
  address: PropTypes.string,
  phone: PropTypes.string,
  email: PropTypes.string,
};

SfStore.defaultProps = {
  /**
   * Name of the store
   */
  latlng: [],
  /**
   * Name of the store
   */
  name: '',
  /**
   * Url of the picture of the store
   */
  picture: null,
  /**
   * Address of the store
   */
  address: '',
  /**
   * Phone number of the store
   */
  phone: null,
  /**
   * Email of the store
   */
  email: null,
};
