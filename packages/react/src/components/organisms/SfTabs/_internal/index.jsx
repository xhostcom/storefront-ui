import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import '@storefront-ui/shared/styles/components/SfTabs.scss';

export const SfTab = ({ children, title, isActive, key, setActive, uid }) => {
  const tabClick = () => {
    const desktopMin = 1024;
    if (typeof window === 'undefined' || typeof document === 'undefined') return;
    const width = Math.max(document.documentElement.clientWidth, window.innerWidth);
    if (isActive && width > desktopMin) return;
    setActive(uid);
  };

  return (
    <React.Fragment key={key}>
      <div className={classnames({ 'sf-tabs__title': true, 'sf-tabs__title--active': isActive })} onClick={tabClick}>
        {title}
      </div>
      <div className="sf-tabs__content">{children}</div>
    </React.Fragment>
  );
};

SfTab.propTypes = {
  uid: PropTypes.number,
  isActive: PropTypes.bool,
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
};

SfTab.defaultProps = {
  uid: 1,
  isActive: false,
  title: '',
};
