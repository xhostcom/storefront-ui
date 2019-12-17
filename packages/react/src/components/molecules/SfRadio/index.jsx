import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import '@storefront-ui/shared/styles/components/SfRadio.scss';

export const SfRadio = ({
  label,
  description,
  classname,
  name,
  value,
  required,
  disabled,
  selected,
  onClick,
  ...restProps
}) => {
  const isChecked = () => {
    return value === selected;
  };

  return (
    <div
      className={classnames({
        'sf-radio': true,
        'is-active': isChecked(),
        'is-disabled': disabled,
        [classname]: true,
      })}
    >
      <input
        type="radio"
        id={value}
        name={name}
        value={value}
        checked={isChecked()}
        onChange={() => onClick(value)}
        disabled={disabled}
        required={required}
        className="sf-radio__input"
        {...restProps}
      />
      <label className="sf-radio__container" onClick={() => onClick(value)}>
        <div
          className={classnames({
            'is-active': isChecked(),
            'sf-radio__checkmark': true,
          })}
        />
        <div className="sf-radio__content">
          {label && <div className="sf-radio__label">{label}</div>}
          {description && <p className="sf-radio__description">{description}</p>}
        </div>
      </label>
    </div>
  );
};

SfRadio.propTypes = {
  name: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  label: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  description: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  value: PropTypes.string,
  selected: PropTypes.string,
  disabled: PropTypes.bool,
  required: PropTypes.bool,
};

SfRadio.defaultProps = {
  name: '',
  value: '',
  label: '',
  description: '',
  required: false,
  disabled: false,
  selected: '',
};
