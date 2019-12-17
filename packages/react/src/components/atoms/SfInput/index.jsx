import React from 'react';
import classnames from 'classnames';
import { CSSTransition } from 'react-transition-group';
import PropTypes from 'prop-types';
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
  onchange,
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
          value={value}
          required={required}
          disabled={disabled}
          name={name}
          id={id}
          onChange={onchange}
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

SfInput.propTypes = {
  classname: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  label: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  name: PropTypes.string,
  valid: PropTypes.bool,
  errorMessage: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  required: PropTypes.bool,
  disabled: PropTypes.bool,
  onchange: PropTypes.func,
};

SfInput.defaultProps = {
  /**
   * Current input value
   */
  value: '',
  /**
   * Form input label
   */
  label: null,
  /**
   * Error message value of form input. It will be appeared if `valid` is `true`.
   */
  errorMessage: null,
  /**
   * Form input name
   */
  name: null,
  /**
   * Form input id
   */
  id: null,
  /**
   * Native input required attribute
   */
  required: false,
  /**
   * Native input disabled attribute
   */
  disabled: false,
  /**
   * Validate value of form input
   */
  valid: undefined,
};
