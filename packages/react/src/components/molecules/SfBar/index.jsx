import React from 'react';
import { SfIcon } from '../../atoms';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import '@storefront-ui/shared/styles/components/SfBar.scss';

export const SfBar = ({ title, back, close, onclose, onback, closeIcon, backIcon }) => {
  return (
    <div className="sf-bar">
      <div className={classnames({ 'sf-bar__icon': backIcon ? false : true })} onClick={onback}>
        {back && !backIcon && <SfIcon icon="chevron_left" size="14px" role="button" aria-label="back" />}
        {back && backIcon && backIcon}
      </div>
      {title && <div className="sf-bar__title">{title}</div>}
      <div className={classnames({ 'sf-bar__icon': closeIcon ? false : true })} onClick={onclose}>
        {close && !closeIcon && <SfIcon icon="cross" size="14px" role="button" aria-label="close" />}
        {close && closeIcon && closeIcon}
      </div>
    </div>
  );
};

SfBar.propTypes = {
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  closeIcon: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  backIcon: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  back: PropTypes.bool,
  close: PropTypes.bool,
  onclose: PropTypes.func,
  onback: PropTypes.func,
};

SfBar.defaultProps = {
  title: '',
  back: false,
  close: false,
};
