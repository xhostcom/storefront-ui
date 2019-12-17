import React from 'react';
import PropTypes from 'prop-types';
import '@storefront-ui/shared/styles/components/SfBullets.scss';

export const SfBullets = ({ current, total, onclick, active, inactive }) => {
  const inactiveRight = () => {
    return total - 1 - current;
  };
  const inactiveLeft = () => {
    return total - inactiveRight() - 1;
  };

  return (
    <ol className="sf-bullets">
      {!inactive &&
        inactiveLeft() > 0 &&
        Array.from(Array(inactiveLeft()).keys()).map((el) => (
          <li key={el} className="sf-bullet" onClick={() => onclick(el)}></li>
        ))}
      {inactive &&
        inactiveLeft() > 0 &&
        Array.from(Array(inactiveLeft()).keys()).map((el) => (
          <span key={el} onClick={() => onclick(el)}>
            {inactive}
          </span>
        ))}
      {!active && <li className="sf-bullet sf-bullet--active"></li>}
      {active && active}
      {!inactive &&
        inactiveRight() > 0 &&
        Array.from(Array(inactiveRight()).keys()).map((el) => (
          <li key={el} className="sf-bullet" onClick={() => onclick(inactiveLeft() + 1 + el)}></li>
        ))}
      {inactive &&
        inactiveRight() > 0 &&
        Array.from(Array(inactiveRight()).keys()).map((el) => (
          <span key={el} onClick={() => onclick(inactiveLeft() + 1 + el)}>
            {inactive}
          </span>
        ))}
    </ol>
  );
};

SfBullets.propTypes = {
  current: PropTypes.number,
  // total: PropTypes.number,
  onclick: PropTypes.func,
};

SfBullets.defaultProps = {
  /**
   * Index of the currently active bullet (0-indexed)
   */
  current: 1,
  /**
   * Number of bullets in total (active + inactive)
   */
  total: null,
  onclick: () => {},
};
