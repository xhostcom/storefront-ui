import React from 'react';
import PropTypes from 'prop-types';
import '@storefront-ui/shared/styles/components/SfRating.scss';

export const SfRating = ({ max, score, positiveIcon, negativeIcon }) => {
  const finalScore = () => {
    if (!score) {
      return 0;
    } else if (score < 0) {
      return 0;
    } else if (score > max && max > 0) {
      return max;
    } else if (max <= 0) {
      return 0;
    } else {
      return score;
    }
  };
  const finalMax = () => {
    return !max || max <= 0 ? 1 : max;
  };

  return (
    <div className="sf-rating">
      {!positiveIcon &&
        finalScore() &&
        finalMax() &&
        Array.from(Array(finalScore()).keys()).map((el) => (
          <svg key={el} width="14" height="14" viewBox="0 0 11 10" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M5.5 0L6.73483 3.80041H10.7308L7.49799 6.14919L8.73282 9.94959L5.5 7.60081L2.26718 9.94959L3.50201 6.14919L0.269189 3.80041H4.26517L5.5 0Z"
              className="sf-rating__icon-positive"
            />
          </svg>
        ))}
      {positiveIcon &&
        finalScore() &&
        finalMax() &&
        Array.from(Array(finalScore()).keys()).map((el) => <React.Fragment key={el}>{positiveIcon}</React.Fragment>)}
      {!negativeIcon &&
        finalScore() &&
        finalMax() &&
        Array.from(Array(finalMax() - finalScore()).keys()).map((el) => (
          <svg key={el} width="14" height="14" viewBox="0 0 11 10" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M5.5 0L6.73483 3.80041H10.7308L7.49799 6.14919L8.73282 9.94959L5.5 7.60081L2.26718 9.94959L3.50201 6.14919L0.269189 3.80041H4.26517L5.5 0Z"
              className="sf-rating__icon-negative"
            />
          </svg>
        ))}
      {negativeIcon &&
        finalScore() &&
        finalMax() &&
        Array.from(Array(finalMax() - finalScore()).keys()).map((el) => (
          <React.Fragment key={el}>{negativeIcon}</React.Fragment>
        ))}
    </div>
  );
};

SfRating.propTypes = {
  max: PropTypes.number,
  score: PropTypes.number,
};

SfRating.defaultProps = {
  /**
   * Maximum score
   */
  max: 5,
  /**
   * Score (obviously must be less than maximum)
   */
  score: 1,
};
