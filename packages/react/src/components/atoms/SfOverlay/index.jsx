import React from 'react';
import { CSSTransition } from 'react-transition-group';
import '../../utilities/transitions/transitions.scss';
import '@storefront-ui/shared/styles/components/SfOverlay.scss';

export const SfOverlay = ({ transition, visible, onClick }) => {
  return (
    <CSSTransition in={visible} classNames={transition} timeout={300} unmountOnExit>
      <div className="sf-overlay" onClick={onClick} />
    </CSSTransition>
  );
};
