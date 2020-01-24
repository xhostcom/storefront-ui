import React from 'react';
import classnames from 'classnames';
import '@storefront-ui/shared/styles/components/SfTable.scss';

export const SfTableHeader = ({ children, classname }) => {
  return <th className={classnames('sf-table__header', classname)}>{children}</th>;
};
