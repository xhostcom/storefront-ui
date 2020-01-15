import React from 'react';
import classnames from 'classnames';
import '@storefront-ui/shared/styles/components/SfBottomNavigation.scss';

export const SfBottomNavigation = ({ children, classname }) => {
  return <div className={classnames('sf-bottom-navigation', classname)}>{children}</div>;
};
