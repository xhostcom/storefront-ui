import React, { useEffect, useRef } from 'react';
import classnames from 'classnames';
import { SfOverlay, SfCircleIcon, SfHeading } from '../../atoms';
import { CSSTransition } from 'react-transition-group';
import PropTypes from 'prop-types';
import '../../utilities/transitions/transitions.scss';
import '@storefront-ui/shared/styles/components/SfSidebar.scss';

export const SfSidebar = ({
  classname,
  headingTitle,
  headingSubtitle,
  headingLevel,
  button,
  visible,
  overlay,
  onclose,
}) => {
  const ref = useRef(null);

  useEffect(() => {
    document.addEventListener('keydown', keydownHandler);
    return () => {
      document.removeEventListener('keydown', keydownHandler);
    };
  }, []);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    if (visible) {
      document.body.classList.add('sf-sidebar--has-scroll-lock');
    } else {
      document.body.classList.remove('sf-sidebar--has-scroll-lock');
    }
  }, [visible]);

  const visibleOverlay = () => {
    return visible && overlay;
  };
  const keydownHandler = (e) => {
    if (e.key === 'Escape' || e.key === 'Esc' || e.keyCode === 27) {
      onclose();
    }
  };
  const position = () => {
    return ref && ref.current && ref.current.classList.contains('sf-sidebar--right') ? 'right' : 'left';
  };

  return (
    <div ref={ref} className={classnames('sf-sidebar', classname)}>
      <SfOverlay visible={visibleOverlay()} onclick={onclose} />
      <CSSTransition in={visible} classNames={`slide-${position()}`} timeout={300} unmountOnExit>
        <aside className="sf-sidebar__aside">
          <div className="sf-sidebar__content">
            <slot name="title">
              <SfHeading
                title={headingTitle}
                subtitle={headingSubtitle}
                level={headingLevel}
                className="sf-heading--left sf-heading--no-underline sf-sidebar__title"
              />
            </slot>
            <slot />
          </div>
          <slot name="circle-icon">
            {button && <SfCircleIcon size="14px" icon="cross" classname="sf-sidebar__circle-icon" onclick={onclose} />}
          </slot>
        </aside>
      </CSSTransition>
    </div>
  );
};

SfSidebar.propTypes = {
  headingTitle: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  headingSubtitle: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  headingLevel: PropTypes.number,
  button: PropTypes.bool,
  visible: PropTypes.bool,
  overlay: PropTypes.bool,
};

SfSidebar.defaultProps = {
  headingTitle: 'title',
  headingSubtitle: '',
  headingLevel: 1,
  button: true,
  visible: false,
  overlay: true,
};
