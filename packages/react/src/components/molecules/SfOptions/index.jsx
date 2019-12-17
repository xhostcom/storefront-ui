import React, { useState } from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import '../../utilities/transitions/transitions.scss';
import '@storefront-ui/shared/styles/components/SfOptions.scss';

export const SfOptions = ({ label, value, type, options, selected, onSelect }) => {
  const [active, setActive] = useState(selected);

  const isTypeColor = () => {
    return type === 'color';
  };
  const isTypeImage = () => {
    return type === 'image';
  };
  const isTypeText = () => {
    return type === 'text' && !isTypeColor() && !isTypeImage();
  };
  const setActiveValue = (val) => {
    setActive(val);
    onSelect(val);
  };
  const isOptionSelected = (val) => {
    return active === val;
  };

  return (
    <div className="sf-options">
      {label && <label className="sf-options__label">{label}</label>}
      <div className="sf-options__wrapper">
        {options.map((option, idx) => (
          <div key={idx} className="sf-options__option-container" onClick={() => setActiveValue(option.value)}>
            {isTypeText() && (
              <div
                className={classnames({
                  'sf-options__option-text': true,
                  'sf-options__option-text--selected': isOptionSelected(option.value),
                })}
              >
                {option.text}
              </div>
            )}
            {isTypeColor() && (
              <div className="sf-options__option-color-wrapper">
                <div
                  className={classnames({
                    'sf-options__option-color': true,
                    'sf-options__option-color--selected': isOptionSelected(option.value),
                  })}
                  style={{ backgroundColor: option.color }}
                />
                <div className="sf-options__option-color-check" />
              </div>
            )}
            {isTypeImage() && (
              <div className="sf-options__option-image-wrapper">
                <div
                  className={classnames({
                    'sf-options__option': true,
                    'sf-options__option-image': true,
                    'sf-options__option-image--selected': isOptionSelected(option.value),
                  })}
                  style={{ backgroundImage: `url(${option.image})` }}
                />
                <div className="sf-options__option-image-check" />
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

SfOptions.propTypes = {
  options: PropTypes.array,
  type: PropTypes.oneOf(['text', 'color', 'image']),
  label: PropTypes.string,
  value: PropTypes.string,
};

SfOptions.defaultProps = {
  options: [],
  type: 'text',
  label: null,
  value: null,
};
