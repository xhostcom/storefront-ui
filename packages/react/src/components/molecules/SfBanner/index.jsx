import React from 'react';
import classnames from 'classnames';
import { SfButton } from '../../atoms';
import PropTypes from 'prop-types';
import '@storefront-ui/shared/styles/components/SfBanner.scss';

export const SfBanner = ({
  classname,
  title,
  subtitle,
  description,
  background,
  buttonText,
  image,
  onclick,
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
          <SfButton classname="sf-banner__call-to-action color-secondary" onclick={onclick}>
            {buttonText}
          </SfButton>
        )}
        {customButton && customButton}
      </div>
    </section>
  );
};

SfBanner.propTypes = {
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  subtitle: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  description: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  buttonText: PropTypes.string,
  background: PropTypes.string,
  image: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
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
