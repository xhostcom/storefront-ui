import React, { useState } from 'react';
import PropTypes from 'prop-types';
import '@storefront-ui/shared/styles/components/SfTabs.scss';

export const SfTabs = ({ children, openTab }) => {
  const [open, setOpen] = useState(openTab);
  const setOpenTab = (val) => {
    setOpen(val + 1);
  };

  return (
    <div className="sf-tabs">
      {children.map((el, idx) =>
        React.cloneElement(el, {
          isActive: open === idx + 1,
          children: el.props.children,
          key: idx,
          uid: idx,
          setActive: setOpenTab,
        }),
      )}
    </div>
  );
};

SfTabs.propTypes = {
  openTab: PropTypes.number,
};

SfTabs.defaultProps = {
  openTab: 1,
};
