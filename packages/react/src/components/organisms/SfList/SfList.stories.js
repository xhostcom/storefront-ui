import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import { SfList } from './';
import { SfListItem } from './_internal';
import { SfMenuItem } from '../../molecules';

storiesOf('Organisms|List', module)
  .addDecorator(withKnobs)
  .add('Primary', () => (
    <SfList>
      <SfListItem>Menu Item 1</SfListItem>
      <SfListItem>Menu Item 3</SfListItem>
    </SfList>
  ))
  .add('SfMenuItem', () => (
    <div style={{ width: 300 }}>
      <SfList>
        <SfListItem>
          <SfMenuItem label="Lorem ipsum" count="30" />
        </SfListItem>
        <SfListItem>
          <SfMenuItem label="Dolor sit amet" count="30" />
        </SfListItem>
      </SfList>
    </div>
  ));
