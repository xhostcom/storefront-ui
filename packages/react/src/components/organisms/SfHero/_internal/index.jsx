import React from 'react';
import { SfButton } from '../../../atoms';
import PropTypes from 'prop-types';
import '@storefront-ui/shared/styles/components/SfHero.scss';

export const SfHeroItem = ({ 
  buttonText,
  title,
  subtitle,
  image,
  background
 }) => {
  return (
    <li
      className="glide__slide sf-hero-item"
      style={{
        backgroundImage: `url('${image}')`,
        backgroundColor: background
      }}
    >
      <div className="sf-hero-item__container">
        {/* <!--@slot hero item subtitle. Slot content will replace default <h2> tag--> */}
        <slot name="subtitle" v-bind="{ subtitle }">
          <div v-if="subtitle" className="sf-hero-item__subtitle">{ subtitle }</div>
        </slot>
        {/* <!--@slot hero item title. Slot content will replace default <h1> tag--> */}
        <slot name="title" v-bind="{ title }">
          <h1 v-if="title" className="sf-hero-item__title">{ title }</h1>
        </slot>
        {/* <!--@slot Call to action section. Slot content will replace default SfButton component--> */}
        <slot name="call-to-action" v-bind="{ buttonText }">
          {buttonText && <div className="sf-hero-item__button">
            <SfButton>
              { buttonText }
            </SfButton>
          </div>}
        </slot>
      </div>
    </li>
  );
};

SfHeroItem.propTypes = {
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  subtitle: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  buttonTerxt: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  background: PropTypes.string,
  image: PropTypes.string
};

SfHeroItem.defaultProps = {
  /** Hero item title */
  title: "",
  /** Hero item subtitle (at the top) */
  subtitle:  "",
  /** text that will be displayed inside the button. You can replace the button  with "call-to-action" slot */
  buttonText:  "",
  /** Background color */
  background: "",
  /** Background image path */
  image: ""
}
