import React from 'react';
import classnames from 'classnames';
import '@storefront-ui/shared/styles/components/SfChevron.scss';

export const SfChevron = ({ children, classname }) => {
  return (
    <div className={classnames(classname, 'sf-chevron')}>
      {children && children}
      {!children && (
        <>
          <span className="sf-chevron__left-bar"></span>
          <span className="sf-chevron__right-bar"></span>
        </>
      )}
    </div>
  );
};
