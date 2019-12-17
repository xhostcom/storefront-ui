import React, { useState, useEffect } from 'react';
import { SfHeading } from '../../atoms';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import '@storefront-ui/shared/styles/components/SfSection.scss';

export const SfSection = ({ classname, children, levelHeading, titleHeading, subtitleHeading }) => {
  const [hasUnderlinedModifier, setHasUnderlinedModifier] = useState(false);

  useEffect(() => {
    setHasUnderlinedModifier(classname.includes('sf-section--no-underline'));
  }, [classname]);

  return (
    <section className={classnames('sf-section', classname)}>
      <SfHeading
        level={levelHeading}
        title={titleHeading}
        subtitle={subtitleHeading}
        classname={classnames({ ['sf-heading--no-underline']: hasUnderlinedModifier })}
      />
      <div className="sf-section__content">{children}</div>
    </section>
  );
};

SfSection.propTypes = {
  titleHeading: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  subtitleHeading: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  levelHeading: PropTypes.number,
};

SfSection.defaultProps = {
  /**
   * Heading title
   */
  titleHeading: '',
  /**
   * Heading subtitle
   */
  subtitleHeading: '',
  /**
   * Heading tag level
   */
  levelHeading: 2,
};
