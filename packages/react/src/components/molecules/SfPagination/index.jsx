import React from "react";
import { SfIcon } from "../../atoms";
import classnames from "classnames";
import '@storefront-ui/shared/styles/components/SfPagination.scss';

export const SfPagination = ({
  current,
  total,
  visible,
  onClick,
  iconPrev,
  iconNext,
}) => {

  let showFirst = false
  let showLast = false

  const listOfPageNumbers = () => {
    return Array.from(Array(total), (_, i) => i + 1);
  }

  const limitedPageNumbers = () => {
    return setLimitedPageNumber();
  }

  const setLimitedPageNumber = () => {
    if (total <= visible) {
      showFirst = false
      showLast = false

      return listOfPageNumbers();
    }

    if (current < visible - Math.floor(visible / 2) + 1) {
      showFirst = false
      showLast = true

      return listOfPageNumbers().slice(0, visible);
    }

    if ( total - current < visible - Math.floor(visible / 2) + 1 ) {
      showFirst = true
      showLast = false

      return listOfPageNumbers().slice(total - visible);
    }
    showFirst = true
    showLast = true

    return listOfPageNumbers().slice(
      current - Math.ceil(visible / 2),
      current + Math.floor(visible / 2)
    );
  }

  const go = (direct) => {
    switch (direct) {
      case "prev":
        onClick(current < 2 ? 1 : current - 1);
        break;
      case "next":
        onClick(current > total - 1 ? total : current + 1)
        break;
      default:
        if (current !== direct) onClick(direct);
    }
  }

  const isDisabled = (direct) => {
    switch (direct) {
      case "prev":
        return current < 2;
      case "next":
        return current > total - 1;
      default:
        return true;
    }
  }

  return (
    <nav className="sf-pagination">
      <ul className="sf-pagination__list">
        <li className="sf-pagination__item">
          <button
            onClick={() => go('prev')}
            aria-label="Go to previous page"
            className="sf-pagination__button sf-pagination__button--prev"
            disabled={isDisabled('prev')}
          >
            {!iconPrev && <SfIcon icon="chevron_left" size="14px"/>}
            {iconPrev && iconPrev}
          </button>
        </li>
        {showFirst && <><li className="sf-pagination__item">
          <button onClick={() => go(1)} className="sf-pagination__button">1</button>
        </li>
        <li className="sf-pagination__item">
          ...
        </li></>}
        {limitedPageNumbers().map(number => (<li
          key={number}
          className="sf-pagination__item"
        >
          <button
            onClick={() => go(number)}
            className={classnames({
              'sf-pagination__button': true,
              'sf-pagination__button--current': (current === number)
            })}
          >{number}</button>
        </li>))}
        {showLast && <><li className="sf-pagination__item">
          ...
        </li>
        <li className="sf-pagination__item">
          <button onClick={() => go(total)} className="sf-pagination__button">
            {total}
          </button>
        </li></>}
        <li className="sf-pagination__item">
          <button
            onClick={() => go('next')}
            aria-label="Go to next page"
            className="sf-pagination__button sf-pagination__button--next"
            disabled={isDisabled('next')}
          >
            {!iconNext && <SfIcon icon="chevron_right" size="14px" />}
            {iconNext && iconNext}
          </button>
        </li>
      </ul>
    </nav>
  );
};

SfPagination.defaultProps = {
  /**
   * Current page number
   */
  current: 1,
  /**
   * Total number of pages
   */
  total: 5,
  /**
   * Maximum visible pagination items
   */
  visible: 5
}
