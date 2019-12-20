import React from 'react';
import PropTypes from 'prop-types';
import '@storefront-ui/shared/styles/components/SfList.scss';

export const SfListItem = ({ children }) => {
  return <li className="sf-list__item">{children}</li>;
};

SfListItem.propTypes = {
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
};

SfListItem.defaultProps = {
  children: '',
};
