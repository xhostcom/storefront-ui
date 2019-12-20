import React from 'react';
import PropTypes from 'prop-types';
import '@storefront-ui/shared/styles/components/SfList.scss';

export const SfList = ({ children }) => {
  return <ul className="sf-list">{children}</ul>;
};
