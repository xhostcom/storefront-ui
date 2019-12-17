import React from 'react';
import classnames from 'classnames';
import { SfButton } from '../../atoms';
import '@storefront-ui/shared/styles/components/SfBanner.scss';

export const SfBanner = ({
  classname,
  title,
  subtitle,
  description,
  background,
  buttonText,
  image,
  on,
  customButton,
}) => {
  return (
    <section
      className={classnames('sf-banner', classname)}
      style={{ backgroundImage: `url('${image}')`, backgroundColor: `'${background}'` }}
    >
      <div className="sf-banner__container">
        {subtitle && <h2 className="sf-banner__subtitle">{subtitle}</h2>}
        {title && <h1 className="sf-banner__title">{title}</h1>}
        {description && <p className="sf-banner__description">{description}</p>}
        {!customButton && (
          <SfButton classname="sf-banner__call-to-action color-secondary" on={on}>
            {buttonText}
          </SfButton>
        )}
        {customButton && customButton}
      </div>
    </section>
  );
};

SfBanner.defaultProps = {
  /**
   * Banner title
   */
  title: '',
  /**
   * Banner subtitle (at the top)
   */
  subtitle: '',
  description: '',
  /** text that will be displayed inside the button. You can replace the button  with "call-to-action" slot */
  buttonText: '',
  /** Background color in HEX (eg #FFFFFF) */
  background: '',
  /** Background image. Influenced by $banner-background-size, $banner-background-position CSS props. */
  image: '',
};
