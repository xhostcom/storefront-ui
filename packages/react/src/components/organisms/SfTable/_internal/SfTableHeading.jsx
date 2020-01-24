import React from 'react';
import classnames from 'classnames';
import '@storefront-ui/shared/styles/components/SfTable.scss';

export const SfTableHeading = ({ children, classname }) => {
  return (
    <tbody>
      <tr className={classnames('sf-table__heading', classname)}>{children}</tr>
    </tbody>
  );
};
