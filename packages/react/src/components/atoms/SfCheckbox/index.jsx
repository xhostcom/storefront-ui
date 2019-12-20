import React from 'react';
import { SfIcon } from '../../atoms';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import '@storefront-ui/shared/styles/components/SfCheckbox.scss';

export const SfCheckbox = ({
  disabled,
  name,
  value,
  label,
  selected,
  onchange,
  customIconChecked,
  customIconUnchecked,
  labelChecked,
  labelUnchecked,
}) => {
  const isChecked = () => {
    if (typeof selected === 'boolean') {
      return selected;
    } else {
      return selected.includes(value);
    }
  };

  const inputHandler = (e) => {
    if (typeof selected === 'boolean') {
      onchange(!selected);
    } else {
      let sel = selected.length > 0 ? [...selected] : [];
      if (sel.includes(value)) {
        sel = sel.filter((val) => val !== value);
      } else {
        sel.push(value);
      }
      onchange(sel);
    }
  };

  return (
    <div
      className={classnames({
        'sf-checkbox': true,
        'is-active': isChecked(),
        'is-disabled': disabled,
      })}
    >
      <input
        type="checkbox"
        id={name}
        name={name}
        value={value}
        checked={isChecked()}
        disabled={disabled}
        readOnly={true}
        className="sf-checkbox__input"
      />
      <label htmlFor={name} className="sf-checkbox__container" onClick={inputHandler}>
        {!customIconChecked && !customIconUnchecked && (
          <div className={classnames({ 'sf-checkbox__checkmark': true, 'is-active': isChecked() })}>
            {isChecked() && <SfIcon icon="check" size="11px" color="white" />}
          </div>
        )}
        {customIconChecked && customIconUnchecked && isChecked() && customIconChecked}
        {customIconUnchecked && customIconChecked && !isChecked() && customIconUnchecked}
        <div className="sf-checkbox__label">
          {!labelChecked && !labelUnchecked && label}
          {labelChecked && labelUnchecked && isChecked() && labelChecked}
          {labelChecked && labelUnchecked && !isChecked() && labelUnchecked}
        </div>
      </label>
    </div>
  );
};

SfCheckbox.propTypes = {
  name: PropTypes.string,
  value: PropTypes.string,
  label: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  required: PropTypes.bool,
  disabled: PropTypes.bool,
  selected: PropTypes.oneOfType([PropTypes.bool, PropTypes.array]),
  onchange: PropTypes.func,
  customIconChecked: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  customIconUnchecked: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  labelChecked: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  labelUnchecked: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
};

SfCheckbox.defaultProps = {
  name: '',
  value: '',
  label: '',
  required: false,
  disabled: false,
  selected: [],
};
