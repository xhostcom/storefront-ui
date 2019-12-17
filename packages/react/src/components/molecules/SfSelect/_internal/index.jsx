import React from 'react';
import classnames from 'classnames';
import '@storefront-ui/shared/styles/components/SfSelect.scss';

export const SfSelectOption = ({ classname, children, selected, value, ...restProps }) => {
  return (
    <li
      className={classnames({
        'sf-select-option': true,
        'sf-select-option--active': selected === value,
      })}
      aria-selected={selected === value ? 'true' : 'false'}
      {...restProps}
    >
      {children}
    </li>
  );
};

SfSelectOption.defaultProps = {
  value: '',
};
