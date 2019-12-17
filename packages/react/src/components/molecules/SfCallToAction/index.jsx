import React from 'react';
import classnames from 'classnames';
import { SfButton } from '../../atoms';
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

SfCallToAction.defaultProps = {
  title: '',
  description: '',
  buttonText: '',
  background: '',
  image: '',
};
