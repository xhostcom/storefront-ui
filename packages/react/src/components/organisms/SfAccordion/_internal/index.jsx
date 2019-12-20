import React, { useState } from 'react';
import classnames from 'classnames';
import { SfChevron } from '../../../atoms';
import { CSSTransition } from 'react-transition-group';
import PropTypes from 'prop-types';
import '../../../utilities/transitions/transitions.scss';
import '@storefront-ui/shared/styles/components/SfAccordion.scss';

export const SfAccordionItem = ({ children, showChevron, header, transition, open }) => {
  const [isOpen, setIsOpen] = useState(open || false);

  const accordionClick = () => {
    setIsOpen((state) => !state);
  };

  return (
    <div className="sf-accordion-item">
      <div
        onClick={accordionClick}
        className={classnames({ 'sf-accordion-item__header--open': isOpen, 'sf-accordion-item__header': true })}
      >
        {header}
        {showChevron && (
          <div className="sf-accordion-item__chevron">
            <SfChevron classname={classnames({ 'sf-chevron--top': isOpen })} />
          </div>
        )}
      </div>
      <CSSTransition in={isOpen} classNames={transition} timeout={300} unmountOnExit>
        <div className="sf-accordion-item__content">{children}</div>
      </CSSTransition>
    </div>
  );
};

SfAccordionItem.propTypes = {
  firstOpen: PropTypes.bool,
  multiple: PropTypes.bool,
  transition: PropTypes.oneOf(['fade', 'slide', 'collapse', 'fade-slide', 'fade-collapse']),
  showChevron: PropTypes.bool,
};

SfAccordionItem.defaultProps = {
  firstOpen: false,
  multiple: false,
  transition: 'fade',
  showChevron: true,
};
