import React from 'react';
import classnames from 'classnames';
import '@storefront-ui/shared/styles/components/SfTable.scss';

export const SfTableRow = ({ children, classname }) => {
  return (
    <tbody>
      <tr className={classnames('sf-table__row', classname)}>{children}</tr>
    </tbody>
  );
};
