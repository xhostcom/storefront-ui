import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import '@storefront-ui/shared/styles/components/SfBannerGrid.scss';

export const SfBannerGrid = ({ classname, bannerGrid, bannerA, bannerB, bannerC, bannerD }) => {
  return (
    <div className={classnames('sf-banner-sf-banner-grid', classname)}>
      {bannerGrid === 1 && (
        <div className="sf-banner-grid__row">
          <div className="sf-banner-grid__col">{bannerA}</div>
          <div className="sf-banner-grid__col sf-banner-grid__col--medium">{bannerB}</div>
          <div className="sf-banner-grid__col">
            <div className="sf-banner-grid__row">
              <div className="sf-banner-grid__col">{bannerC}</div>
            </div>
            <div className="sf-banner-grid__row">
              <div className="sf-banner-grid__col">{bannerD}</div>
            </div>
          </div>
        </div>
      )}
      {bannerGrid === 2 && (
        <div className="sf-banner-grid__row">
          <div className="sf-banner-grid__col sf-banner-grid__col--small">{bannerA}</div>
          <div className="sf-banner-grid__col">
            <div className="sf-banner-grid__row">
              <div className="sf-banner-grid__col">{bannerB}</div>
              <div className="sf-banner-grid__col">{bannerC}</div>
            </div>
            <div className="sf-banner-grid__row">
              <div className="sf-banner-grid__col">{bannerD}</div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

SfBannerGrid.propTypes = {
  bannerGrid: PropTypes.number,
  bannerA: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  bannerB: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  bannerC: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  bannerD: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
};

SfBannerGrid.defaultProps = {
  bannerGrid: 1,
};
