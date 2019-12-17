import React from 'react';
import classnames from 'classnames';
import { CSSTransition } from 'react-transition-group';
import '../../utilities/transitions/transitions.scss';
import '@storefront-ui/shared/styles/components/SfInput.scss';

export const SfInput = ({
  classname,
  valid,
  label,
  errorMessage,
  name,
  id,
  required,
  disabled,
  value,
  on,
  ...restProps
}) => {
  return (
    <div
      className={classnames(
        'sf-input',
        classname,
        classnames({
          'sf-input--has-text': !!value,
          'sf-input--invalid': valid === false,
        }),
      )}
    >
      <div style={{ position: 'relative' }}>
        <input
          v-bind="$attrs"
          v-on="listeners"
          value={value}
          required={required}
          disabled={disabled}
          name={name}
          id={id}
          onChange={on}
          {...restProps}
        />
        <span className="sf-input__bar"></span>
        {label && (
          <label className="sf-input__label" htmlFor={name}>
            {label}
          </label>
        )}
      </div>
      {valid !== undefined && (
        <div className="sf-input__error-message">
          <CSSTransition in={!valid} classNames="fade" timeout={300} unmountOnExit>
            <span>{errorMessage}</span>
          </CSSTransition>
        </div>
      )}
    </div>
  );
};

SfInput.defaultProps = {
  label: null,
  errorMessage: null,
  name: null,
  id: null,
  required: false,
  disabled: false,
  valid: undefined,
};
