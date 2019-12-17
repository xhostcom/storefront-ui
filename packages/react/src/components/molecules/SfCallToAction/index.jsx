import React from 'react';
import classnames from 'classnames';
import { SfButton } from '../../atoms';
import PropTypes from 'prop-types';
import '@storefront-ui/shared/styles/components/SfCallToAction.scss';

export const SfCallToAction = ({ classname, title, description, background, buttonText, image, on, customButton }) => {
  return (
    <section
      className={classnames('sf-call-to-action', classname)}
      style={{ backgroundImage: `url('${image}')`, backgroundColor: `'${background}'` }}
    >
      <div className="sf-call-to-action__text-container">
        {title && <h2 className="sf-call-to-action__title">{title}</h2>}
        {description && <p className="sf-call-to-action__description">{description}</p>}
      </div>
      {!customButton && (
        <SfButton classname="sf-call-to-action__button" on={on}>
          {buttonText}
        </SfButton>
      )}
      {customButton && customButton}
    </section>
  );
};

SfCallToAction.propTypes = {
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  description: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  image: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  buttonText: PropTypes.string,
  background: PropTypes.string,
};

SfCallToAction.defaultProps = {
  title: '',
  description: '',
  buttonText: '',
  background: '',
  image: '',
};
