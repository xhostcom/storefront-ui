import React, { useState, useEffect } from 'react';
import classnames from 'classnames';
import { SfRating } from '../../atoms';
import '@storefront-ui/shared/styles/components/SfReview.scss';

export const SfReview = ({ author, date, message, charLimit, readMoreText, hideFullText, maxRating, rating }) => {
  const [open, setOpen] = useState(false);

  const finalMessage = () => {
    return message.length > charLimit && !open ? message.slice(0, charLimit) + '...' : message;
  };

  const showButton = () => {
    return message.length > charLimit;
  };

  const toggleMessage = () => {
    setOpen((state) => !state);
  };

  const buttonText = () => {
    let text = readMoreText;

    if (open) {
      text = hideFullText;
    }
    return text;
  };

  return (
    <section className="sf-review">
      {author && <div className="sf-review__author">{author}</div>}
      <div className="sf-review__info">
        {rating > 0 && (
          <div className={classnames({ 'sf-review__rating': rating > 0 && maxRating > 0 })}>
            <SfRating max={maxRating} score={rating} />
          </div>
        )}
        <div
          className={classnames({
            'sf-review__date': true,
            'sf-review__display-inline-block sf-review__margin-left': rating > 0 && maxRating > 0,
          })}
        >
          {date}
        </div>
      </div>
      {message && (
        <div>
          <span className="sf-review__message">{finalMessage()} &nbsp;</span>
          {showButton() && (
            <button onClick={toggleMessage} className="sf-review__message_read_more">
              {buttonText()}
            </button>
          )}
        </div>
      )}
    </section>
  );
};

SfReview.defaultProps = {
  /**
   * Author of the review
   */
  author: '',
  /**
   * Date of the review
   */
  date: '',
  /**
   * Message from the reviewer
   */
  message: '',
  /**
   * Rating from the reviewer
   */
  rating: false,
  /**
   * Max rating for the review
   */
  maxRating: 5,
  /**
   * Char limit for the review
   */
  charLimit: 250,
  /**
   * Read more text for the review
   */
  readMoreText: 'Read more',
  /**
   * Hide full text message for the review
   */
  hideFullText: 'Read less',
};
