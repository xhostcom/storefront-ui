import React, { useState, useEffect } from 'react';
import classnames from 'classnames';
import { SfSelectOption } from './_internal/index';
import { CSSTransition } from 'react-transition-group';
import { SfProductOption } from '../SfProductOption';
import '../../utilities/transitions/transitions.scss';
import '@storefront-ui/shared/styles/components/SfSelect.scss';

export const SfSelect = ({ classname, label, options, selected, errorMessage, size, valid, required, onSelect }) => {
  const [open, setOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState(selected);

  useEffect(() => {
    if (onSelect) onSelect(selectedValue);
  }, [selectedValue]);

  const onKeyPressed = (ev) => {
    if (ev.key === 'ArrowUp' || ev.keyCode === 38) {
      if (!selectedValue) {
        setSelectedValue(options[0]);
      } else {
        setSelectedValue(
          options.findIndex((el) => el.value === selectedValue.value) === 0
            ? options[0]
            : options[options.findIndex((el) => el.value === selectedValue.value) - 1],
        );
      }
    } else if (ev.key === 'ArrowDown' || ev.keyCode === 40) {
      if (!selectedValue) {
        setSelectedValue(options[0]);
      } else {
        setSelectedValue(
          options.findIndex((el) => el.value === selectedValue.value) === options.length - 1
            ? options[options.length - 1]
            : options[options.findIndex((el) => el.value === selectedValue.value) + 1],
        );
      }
    } else if (ev.key === 'Enter') {
      setOpen((state) => !state);
      if (onSelect) onSelect(selectedValue);
    }
  };

  return (
    <div
      onBlur={() => setOpen(false)}
      onKeyDown={onKeyPressed}
      aria-expanded={open ? 'true' : 'false'}
      // :aria-owns="'lbox_'+_uid"
      aria-autocomplete="none"
      role="combobox"
      tabIndex="0"
      className={classnames({
        [classname]: true,
        'sf-select': true,
        'sf-select--is-active': open,
        'sf-select--is-selected': selectedValue.value,
        'sf-select--is-required': required,
      })}
    >
      <div style={{ position: 'relative' }}>
        <div className="sf-select__selected sf-select-option" onClick={() => setOpen((state) => !state)}>
          {selectedValue && (
            <SfProductOption
              value={selectedValue.value || selectedValue}
              label={selectedValue.label || selectedValue}
              color={selectedValue.color || ''}
            />
          )}
        </div>
        {label && (
          <div className="sf-select__label" onClick={() => setOpen((state) => !state)}>
            {label}
          </div>
        )}
        <CSSTransition in={open} classNames="sf-select" timeout={300} unmountOnExit>
          <div className="sf-select__dropdown">
            <ul className="sf-select__options">
              {options &&
                options.map((el, idx) => (
                  <SfSelectOption
                    key={idx}
                    value={el.value}
                    selected={selectedValue.value || selectedValue}
                    onClick={() => {
                      setSelectedValue(el);
                      setOpen(false);
                    }}
                  >
                    <SfProductOption value={el.value || el} color={el.color} label={el.label || el} />
                  </SfSelectOption>
                ))}
            </ul>
          </div>
        </CSSTransition>
      </div>
      {valid !== undefined && (
        <div className="sf-select__error-message">
          <CSSTransition in={!valid} classNames="fade" timeout={300} unmountOnExit>
            <span>{errorMessage}</span>
          </CSSTransition>
        </div>
      )}
    </div>
  );
};

SfSelect.defaultProps = {
  /**
   * Select field label
   */
  label: '',
  /**
   * Selected item value
   */
  selected: '',
  /**
   * Dropdown list size
   */
  size: 5,
  /**
   * Required attribute
   */
  required: false,
  /**
   * Validate value of form input
   */
  valid: undefined,
  /**
   * Error message value of form select. It will be appeared if `valid` is `true`.
   */
  errorMessage: 'This field is not correct.',
};
