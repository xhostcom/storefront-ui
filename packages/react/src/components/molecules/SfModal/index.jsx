import React from 'react';
import { SfOverlay, SfIcon } from '../../atoms';
import { CSSTransition } from 'react-transition-group';
import PropTypes from 'prop-types';
import '../../utilities/transitions/transitions.scss';
import '@storefront-ui/shared/styles/components/SfModal.scss';

export const SfModal = ({
  cross,
  visible,
  overlay,
  persistent,
  transitionOverlay,
  transitionModal,
  children,
  onClose,
}) => {
  const checkPersistence = () => {
    if (persistent === false) {
      onClose();
    }
  };

  return (
    <section className="sf-modal">
      {overlay && (
        <SfOverlay visible={visible} transition={transitionOverlay} onClick={() => checkPersistence()}></SfOverlay>
      )}
      <CSSTransition in={visible} classNames={transitionModal} timeout={300} unmountOnExit>
        <div className="sf-modal__container">
          {cross && (
            <button className="sf-modal__close" onClick={onClose}>
              <SfIcon icon="cross" size="15px" color="gray-secondary" />
            </button>
          )}
          <div className="sf-modal__content">{children}</div>
        </div>
      </CSSTransition>
    </section>
  );
};

SfModal.propTypes = {
  visible: PropTypes.bool,
  cross: PropTypes.bool,
  overlay: PropTypes.bool,
  persistent: PropTypes.bool,
  transitionOverlay: PropTypes.oneOf(['fade', 'slide', 'collapse', 'fade-slide', 'fade-collapse']),
  transitionModal: PropTypes.oneOf(['fade', 'slide', 'collapse', 'fade-slide', 'fade-collapse']),
};

SfModal.defaultProps = {
  /**
   * Cross closing modal button
   */
  cross: true,
  /**
   * Visibility of the modal
   */
  visible: () => false,
  /**
   * Whether to show the overlay
   */
  overlay: true,
  /**
   * If true clicking outside will not dismiss the modal
   */
  persistent: false,
  /**
   * overlay transition effect
   */
  transitionOverlay: 'fade',
  /**
   * overlay transition effect
   */
  transitionModal: 'fade',
};
