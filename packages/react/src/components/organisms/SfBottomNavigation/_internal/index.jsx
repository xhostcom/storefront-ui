import React from 'react';
import classnames from 'classnames';
import '@storefront-ui/shared/styles/components/SfBottomNavigation.scss';

export const SfBottomNavigationItem = ({ children, classname }) => {
  return <div className={classnames('sf-bottom-navigation__item', classname)}>{children}</div>;
};
