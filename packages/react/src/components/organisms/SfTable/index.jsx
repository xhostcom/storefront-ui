import React, { useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import '@storefront-ui/shared/styles/components/SfTable.scss';

export const SfTable = ({ children, columns }) => {
  const ref = useRef();
  useEffect(() => {
    if (ref && ref.current) {
      ref.current.style.setProperty('--mobile-column', Math.ceil(columns / 2));
    }
  }, []);

  return (
    <table className="sf-table" ref={ref}>
      {children}
    </table>
  );
};

SfTable.propTypes = {
  columns: PropTypes.number,
};

SfTable.defaultProps = {
  columns: 2,
};
