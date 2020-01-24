import React from 'react';
import classnames from 'classnames';
import '@storefront-ui/shared/styles/components/SfTable.scss';

export const SfTableData = ({ children, classname }) => {
  return <td className={classnames('sf-table__data', classname)}>{children}</td>;
};
