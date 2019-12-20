import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import '@storefront-ui/shared/styles/components/SfAccordion.scss';

export const SfAccordion = ({ children, firstOpen, multiple, transition, showChevron }) => {
  return (
    <div className={classnames({ 'sf-accordion': true, 'sf-accordion--has-chevron': showChevron })}>
      {children.map((el, idx) =>
        React.cloneElement(el, { multiple, transition, showChevron, open: firstOpen && idx === 0 }),
      )}
    </div>
  );
};

SfAccordion.propTypes = {
  firstOpen: PropTypes.bool,
  multiple: PropTypes.bool,
  transition: PropTypes.oneOf(['fade', 'slide', 'collapse', 'fade-slide', 'fade-collapse']),
  showChevron: PropTypes.bool,
};

SfAccordion.defaultProps = {
  firstOpen: false,
  /**
   * Allows to open multiple accordion items if set to "true"
   */
  multiple: false,
  /**
   * Overlay transition effect
   */
  transition: 'fade',
  showChevron: true,
};
