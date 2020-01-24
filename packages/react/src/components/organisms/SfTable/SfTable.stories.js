import React from 'react';
import classnames from 'classnames';
import { storiesOf } from '@storybook/react';
import { withKnobs, optionsKnob as options } from '@storybook/addon-knobs';
import { SfTable } from './';
import { SfTableData, SfTableHeader, SfTableHeading, SfTableRow } from './_internal';

const headers = ['Quantity', 'Payment date', 'Payment method', 'Amount', 'Status'];

const content = [
  ['#35767', '4th Nov', 'Paypal', '12.00$'],
  ['#35767', '4th Nov', 'Visa', '15.00$'],
  ['#35767', '4th Nov', 'Paypal', '12.00$'],
];

storiesOf('Organisms|Table', module)
  .addDecorator(withKnobs)
  .add('Primary', () => (
    <div style={{ padding: '1rem' }}>
      <SfTable
        columns={5}
        classname={classnames(
          options(
            'CSS Modifiers',
            {
              'sf-table--bordered': 'sf-table--bordered',
            },
            '',
            { display: 'multi-select' },
            'CSS Modifiers',
          ),
        )}
      >
        <SfTableHeading>
          {headers.map((el, idx) => (
            <SfTableHeader key={idx}>{el}</SfTableHeader>
          ))}
        </SfTableHeading>
        {content.map((el, idx) => (
          <SfTableRow key={idx}>
            {el.map((item, idx) => (
              <SfTableData key={idx}>{item}</SfTableData>
            ))}
            <SfTableData classname="text-success">Finalised</SfTableData>
          </SfTableRow>
        ))}
      </SfTable>
    </div>
  ));
