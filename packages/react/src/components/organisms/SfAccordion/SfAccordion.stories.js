import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, boolean, select } from '@storybook/addon-knobs';
import { SfAccordion } from './';
import { SfAccordionItem } from './_internal';
import { SfMenuItem } from '../../molecules';
import { SfList } from '../../organisms';
import { SfListItem } from '../SfList/_internal';

const accordions = [
  {
    header: 'About Us',
    items: [
      { label: 'About us (Magento CMS)', count: '280' },
      { label: 'Store locator', count: '34' },
    ],
  },
  {
    header: 'Departaments',
    items: [
      { label: 'Women fashion', count: '2' },
      { label: 'Men fashion', count: '56' },
      { label: 'Kidswear', count: '16' },
      { label: 'Home', count: '166' },
      { label: 'Dogswear', count: '24' },
    ],
  },
  {
    header: 'Help',
    items: [
      { label: 'Customer service', count: '54' },
      { label: 'Size guide', count: '4' },
      { label: 'Contact us', count: '76' },
    ],
  },
];

const transition = ['fade', 'slide', 'collapse', 'fade-slide', 'fade-collapse'];

storiesOf('Organisms|Accordition', module)
  .addDecorator(withKnobs)
  .add('Primary', () => (
    <div style={{ width: 300, padding: '1rem' }}>
      <SfAccordion
        multiple={boolean('multiple', true)}
        firstOpen={boolean('firstOpen', true)}
        showChevron={boolean('showChevron', true)}
        transition={select('transition', transition, 'fade')}
      >
        {accordions.map((el, idx) => (
          <SfAccordionItem header={el.header} key={idx}>
            <SfList>
              {el.items.map((item, id) => (
                <SfListItem key={id}>
                  <SfMenuItem label={item.label} count={item.count} />
                </SfListItem>
              ))}
            </SfList>
          </SfAccordionItem>
        ))}
      </SfAccordion>
    </div>
  ));
