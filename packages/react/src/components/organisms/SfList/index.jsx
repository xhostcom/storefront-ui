import React from 'react';
import '@storefront-ui/shared/styles/components/SfList.scss';

export const SfList = ({ children }) => {
  return <ul className="sf-list">{children}</ul>;
};
