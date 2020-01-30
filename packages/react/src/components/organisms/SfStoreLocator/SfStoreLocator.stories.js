import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, number, select, object } from '@storybook/addon-knobs';
import { SfStoreLocator } from './';

const stores = [
  {
    name: 'Store 1',
    address: 'Budapest, Deák Ferenc u. 19, 1052',
    phone: '(70) 881 9463',
    email: 'some@email.com',
    picture: 'https://picsum.photos/200/300',
    latlng: [47.4968864, 19.0531093],
  },
  {
    name: 'Store 2',
    address: 'G354+5R Budapest',
    phone: '(1) 311 9666',
    email: 'some@email.com',
    picture: 'https://picsum.photos/200/300',
    latlng: [47.5079722, 19.0570521],
  },
];

storiesOf('Organisms|StoreLocator', module)
  .addDecorator(withKnobs)
  .add('Primary', () => (
    <SfStoreLocator
      zoom={number(
        'zoom',
        6,
        {
          range: true,
          min: 1,
          max: 16,
          step: 1,
        },
        'Props',
      )}
      maxZoom={number(
        'maxZoom',
        16,
        {
          range: true,
          min: 1,
          max: 16,
          step: 1,
        },
        'Props',
      )}
      flyToStoreZoom={number(
        'flyToStoreZoom',
        15,
        {
          range: true,
          min: 1,
          max: 16,
          step: 1,
        },
        'Props',
      )}
      tileServerUrl={select(
        'tileServerUrl',
        {
          Default:
            'https://server.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Light_Gray_Base/MapServer/tile/{z}/{y}/{x}',
          OpenStreetMaps: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
          Wikimedia: 'https://maps.wikimedia.org/osm-intl/{z}/{x}/{y}{r}.png',
        },
        'https://server.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Light_Gray_Base/MapServer/tile/{z}/{y}/{x}',
        'Props',
      )}
      center={object('center', [47.5104387, 19.0444433], 'Props')}
      stores={object('stores', stores, 'Props')}
      markerIconSize={object('markerIconSize', [21, 28], 'Props')}
      markerIconAnchor={object('markerIconAnchor', [10.5, 0], 'Props')}
      mapOptions={object('mapOptions', {}, 'Props')}
      tileLayerOptions={object('tileLayerOptions', {}, 'Props')}
      markerOptions={object('markerOptions', {}, 'Props')}
      stores={stores}
    />
  ))
  .add('Custom Icon', () => (
    <SfStoreLocator
      zoom={number(
        'zoom',
        6,
        {
          range: true,
          min: 1,
          max: 16,
          step: 1,
        },
        'Props',
      )}
      maxZoom={number(
        'maxZoom',
        16,
        {
          range: true,
          min: 1,
          max: 16,
          step: 1,
        },
        'Props',
      )}
      flyToStoreZoom={number(
        'flyToStoreZoom',
        15,
        {
          range: true,
          min: 1,
          max: 16,
          step: 1,
        },
        'Props',
      )}
      tileServerUrl={select(
        'tileServerUrl',
        {
          Default:
            'https://server.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Light_Gray_Base/MapServer/tile/{z}/{y}/{x}',
          OpenStreetMaps: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
          Wikimedia: 'https://maps.wikimedia.org/osm-intl/{z}/{x}/{y}{r}.png',
        },
        'https://server.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Light_Gray_Base/MapServer/tile/{z}/{y}/{x}',
        'Props',
      )}
      center={object('center', [47.5104387, 19.0444433], 'Props')}
      stores={object('stores', stores, 'Props')}
      markerIconSize={object('markerIconSize', [21, 28], 'Props')}
      markerIconAnchor={object('markerIconAnchor', [10.5, 0], 'Props')}
      mapOptions={object('mapOptions', {}, 'Props')}
      tileLayerOptions={object('tileLayerOptions', {}, 'Props')}
      markerOptions={object('markerOptions', {}, 'Props')}
      stores={stores}
      markerIcon={<div style={{ fontSize: '30px' }}>🏬</div>}
    />
  ));
