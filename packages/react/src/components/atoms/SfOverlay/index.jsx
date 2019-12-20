import React from 'react';
import { CSSTransition } from 'react-transition-group';
import PropTypes from 'prop-types';
import '../../utilities/transitions/transitions.scss';
import '@storefront-ui/shared/styles/components/SfOverlay.scss';

export const SfOverlay = ({ transition, visible, onclick }) => {
  return (
    <CSSTransition in={visible} classNames={transition} timeout={300} unmountOnExit>
      <div className="sf-overlay" onClick={onclick} />
    </CSSTransition>
  );
};

SfOverlay.propTypes = {
  visible: PropTypes.bool,
  transition: PropTypes.oneOf(['fade', 'slide', 'collapse', 'fade-slide', 'fade-collapse']),
};

SfOverlay.defaultProps = {
  /**
   * Transition effect to apply when overlay visibility is changed
   */
  transition: 'fade',
  /**
   * Visibility state
   */
  visible: false,
};
