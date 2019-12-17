import React from 'react';
import '@storefront-ui/shared/styles/components/SfBreadcrumbs.scss';

export const SfBreadcrumbs = ({ breadcrumbs, linkStyle, currentStyle }) => {
  const last = () => {
    return breadcrumbs.length - 1;
  };

  return (
    <nav className="sf-breadcrumbs" aria-label="breadcrumb">
      <ol className="sf-breadcrumbs__list">
        {breadcrumbs.map((breadcrumb, i) => (
          <li className="sf-breadcrumbs__item" key={i} aria-current={last() === i && 'page'}>
            {last() !== i && (
              <a className="sf-breadcrumbs__link" href={breadcrumb.route.link} style={linkStyle}>
                {breadcrumb.text}
              </a>
            )}
            {last() === i && (
              <span className="sf-breadcrumbs__current" style={currentStyle}>
                {breadcrumb.text}
              </span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
};

SfBreadcrumbs.defaultProps = {
  breadcrumb: [],
};
