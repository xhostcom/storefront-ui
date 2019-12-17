import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import '@storefront-ui/shared/styles/components/SfHeading.scss';

export const SfHeading = ({ classname, level, subtitle, title }) => {
  const CustomTag = `h${level}`;
  return (
    <header className={classnames(classname, 'sf-heading')}>
      {title && <CustomTag className="sf-heading__title">{title}</CustomTag>}
      {subtitle && <div className="sf-heading__subtitle">{subtitle}</div>}
    </header>
  );
};

SfHeading.propTypes = {
  level: PropTypes.number,
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  subtitle: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
};

SfHeading.defaultProps = {
  /**
   * Heading level
   */
  level: 2,
  /**
   * Heading title
   */
  title: '',
  /**
   * Heading subtitle
   */
  subtitle: '',
};
