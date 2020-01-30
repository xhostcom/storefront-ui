import React, { useState, useRef } from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import { SfIcon } from '../../atoms';
import { SfStore } from './_internal';
import { Map, Marker, TileLayer } from 'react-leaflet';
import Control from 'react-leaflet-control';
import L from 'leaflet';
import PropTypes from 'prop-types';
import 'leaflet/dist/leaflet.css';
import '@storefront-ui/shared/styles/components/SfStoreLocator.scss';

export const SfStoreLocator = ({
  stores,
  tileServerAttribution,
  tileServerUrl,
  mapOptions,
  center,
  zoom,
  maxZoom,
  flyToStoreZoom,
  markerOptions,
  tileLayerOptions,
  markerIcon,
  // markerIconAnchor,
  // markerIconSize,
}) => {
  // const [stateStores, setStateStores] = useState(stores || []);
  const [userPosition, setUserPosition] = useState(null);
  const [mapReady, setMapReady] = useState(false);

  const map = useRef(null);

  const computedMapOptions = () => {
    return { zoomControl: false, ...mapOptions };
  };

  // const latLngEquality = (a, b) => {
  //   return a.latlng[0] === b.latlng[0] && a.latlng[1] === b.latlng[1];
  // };

  // const registerStore = (store) => {
  //   if (!stores.some((s) => this.latLngEquality(store, s))) {
  //     setStores((val) => [...val, store]);
  //   }
  // };

  // const removeStore = (store) => {
  //   setStores((val) => val.filter((s) => !latLngEquality(s, store)));
  // };

  const onMapReady = (mapObject) => {
    /**
     * Map ready and displayed event
     * @event 'map:ready'
     * @type {object}
     */
    setMapReady(true);
    // this.$emit("map:ready", mapObject);
    locateUser();
  };

  const locateUser = () => {
    if (map && map.current) {
      map.current.leafletElement.locate({ timeout: 20000 });
    }
  };

  const locationFound = (location) => {
    setUserPosition({ ...location.latlng });
    /**
     * Update center with user position event,
     *
     * @event 'update:center'
     * @type {object}
     */
    updateCenter({ ...location.latlng });
  };

  const locationError = (error) => {
    /**
     * Location error event.
     *
     * @event 'location:errors'
     * @type {object}
     */
    //this.$emit("location:error", error);
  };

  const updateCenter = (latlng) => {
    // this.$emit("update:center", { ...latlng });
  };

  const centerOn = (latlng) => {
    if (map && map.current) {
      map.current.leafletElement.flyTo(latlng, flyToStoreZoom);
    }
  };

  const getGeoDistance = (start, end) => {
    const deg2rad = (deg) => deg * (Math.PI / 180);
    const R = 6371;
    const dLat = deg2rad(end.lat - start.lat);
    const dLng = deg2rad(end.lng - start.lng);
    const a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(deg2rad(start.lat)) * Math.cos(deg2rad(end.lat)) * Math.sin(dLng / 2) * Math.sin(dLng / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    let distance = R * c * 1000;
    distance = distance / 1000;
    return Math.round(distance * 100) / 100;
  };

  return (
    <div className="sf-store-locator">
      <div className="sf-store-locator__title" tabIndex={'0'}>
        Found stores: <span>{stores.length}</span>
      </div>
      <div className="sf-store-locator__wrapper">
        <div className="sf-store-locator__list">
          {stores.map((el, idx) => (
            <SfStore
              key={idx}
              name={el.name}
              address={el.address}
              latlng={el.latlng}
              phone={el.phone}
              email={el.email}
              picture={el.picture}
              centerOn={centerOn}
              // registerStore={registerStore}
              // removeStore={removeStore}
              userPosition={userPosition}
              calculateDistance={getGeoDistance}
            />
          ))}
        </div>
        <div className="sf-store-locator__map-wrapper">
          <Map
            center={center}
            zoom={zoom}
            maxZoom={maxZoom}
            ref={map}
            className="sf-store-locator__map-wrapper-map"
            mapOptions={computedMapOptions()}
            style={{ width: '100%', height: '100%' }}
            mapReady={onMapReady}
            locationFound={locationFound}
            locationError={locationError}
          >
            <TileLayer url={tileServerUrl} attribution={tileServerAttribution} tileLayerOptions={tileLayerOptions} />
            <Control position="topleft">
              <a
                title="center on user position"
                role="button"
                aria-label="center on user position"
                href="#"
                onClick={(e) => {
                  e.preventDefault(), locateUser();
                }}
              >
                <SfIcon icon="home" />
              </a>
            </Control>
            {stores.map((el, idx) => (
              <Marker
                position={el.latlng}
                key={idx}
                markerOptions={markerOptions}
                style={{ background: 'none', border: 'none' }}
                icon={L.divIcon({
                  html: renderToStaticMarkup(
                    markerIcon ? (
                      markerIcon
                    ) : (
                      <SfIcon ariaLabel={`${el.name} located at ${el.address}`} icon="marker" />
                    ),
                  ),
                })}
              />
            ))}
          </Map>
        </div>
      </div>
    </div>
  );
};

SfStoreLocator.propTypes = {
  tileServerUrl: PropTypes.string,
  tileServerAttribution: PropTypes.string,
  center: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
  zoom: PropTypes.number,
  maxZoom: PropTypes.number,
  markerIconSize: PropTypes.array,
  markerIconAnchor: PropTypes.array,
  mapOptions: PropTypes.object,
  tileLayerOptions: PropTypes.object,
  markerOptions: PropTypes.object,
  flyToStoreZoom: PropTypes.number,
};

SfStoreLocator.defaultProps = {
  /**
   * Url of selected tileserver
   */
  tileServerUrl:
    'https://server.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Light_Gray_Base/MapServer/tile/{z}/{y}/{x}',
  /**
   * Attribution line of selected tileserver
   */
  tileServerAttribution: 'Tiles &copy; Esri &mdash; Esri, DeLorme, NAVTEQ',
  /**
   * Initial center of the map, overriden when the user position is captured, supports sync modifier
   */
  center: [0, 0],
  /**
   * Initial zoom of the map
   */
  zoom: 6,
  /**
   * Max zoom allowed, consider tileserver limitation when setting this
   */
  maxZoom: 16,
  /**
   * Size of the icon [width, height]
   */
  markerIconSize: [21, 28],
  /**
   *  Position of the anchor in the icon [x, y]
   */
  markerIconAnchor: [10.5, 0],
  /**
   * Options to pass to leaflet map
   */
  mapOptions: {},
  /**
   * Options to pass to leaflet tile-layer
   */
  tileLayerOptions: {},
  /**
   * Options to pass to leaflet marker
   */
  markerOptions: {},
  /**
   * Zoom to be set when centering map on clicked store
   */
  flyToStoreZoom: 15,
};
