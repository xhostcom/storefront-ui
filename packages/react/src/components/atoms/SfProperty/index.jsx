import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import '@storefront-ui/shared/styles/components/SfProperty.scss';

export const SfProperty = ({ classname, name, value }) => {
  return (
    <div className={classnames('sf-property', classname)}>
      {name && typeof name === 'string' && <span className="sf-property__name">{name}:</span>}
      {name && typeof name !== 'string' && <>{name}</>}
      {value && typeof value === 'string' && <span className="sf-property__value">{value}</span>}
      {value && typeof value !== 'string' && <>{value}</>}
    </div>
  );
};

SfProperty.propTypes = {
  name: PropTypes.string,
  valye: PropTypes.string,
};

SfProperty.defaultProps = {
  name: '',
  value: '',
};
