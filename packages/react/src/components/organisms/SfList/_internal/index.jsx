import React from 'react';
import '@storefront-ui/shared/styles/components/SfList.scss';

export const SfListItem = ({ children }) => {
  return <li className="sf-list__item">{children}</li>;
};
