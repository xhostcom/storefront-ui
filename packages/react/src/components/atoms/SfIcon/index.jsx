import React, { useRef, useEffect } from 'react';
import { icons } from '@storefront-ui/shared/icons/icons';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import '@storefront-ui/shared/styles/components/SfIcon.scss';

export const SfIcon = (props) => {
  const ref = useRef(null);
  useEffect(() => {
    updateProps();
  }, [props.color, props.size, props.icon, props.viewBox]);

  const HEX_REGEX = /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/;
  const RGB_REGEX = /rgb\((\d{1,3}), (\d{1,3}), (\d{1,3})\)/;
  const SF_SIZES = ['xxs', 'xs', 'sm', 'md', 'lg', 'xl', 'xxl', 'xl3', 'xl4'];
  const SF_ICONS = Object.keys(icons);

  const updateProps = () => {
    if (isDecimalOrHexColor() && ref) {
      ref.current.style.setProperty('--icon-color', props.color);
    }

    if (!isSFSizes() && ref) {
      ref.current.style.setProperty('--icon-size', props.size);
    }
  };

  const isDecimalOrHexColor = () => {
    const color = props.color.trim();
    return RGB_REGEX.test(color) || HEX_REGEX.test(color);
  };
  const isSFSizes = () => {
    const size = props.size.trim();
    return SF_SIZES.includes(size);
  };
  const iconColor = () => {
    return !isDecimalOrHexColor() ? `sf-icon--color-${props.color.trim()}` : props.color;
  };
  const iconSize = () => {
    return isSFSizes() ? `sf-icon--size-${props.size.trim()}` : '';
  };
  const isSFIcons = () => {
    return SF_ICONS.includes(props.icon.trim());
  };
  const iconViewBox = () => {
    return isSFIcons() ? icons[props.icon].viewBox || props.viewBox : props.viewBox;
  };
  const iconPaths = () => {
    if (isSFIcons()) {
      return icons[props.icon].paths;
    } else {
      return Array.isArray(props.icon) ? props.icon : [props.icon];
    }
  };

  return (
    <div
      className={classnames(props.classname, 'sf-icon', iconColor(), iconSize())}
      ref={ref}
      style={props.style}
      onClick={props.onclick}
    >
      {!props.children && (
        <svg className="sf-icon-path" viewBox={iconViewBox()} preserveAspectRatio="none">
          {iconPaths().map((path, idx) => (
            <path key={idx} d={path} style={{ height: '100%' }} />
          ))}
        </svg>
      )}
      {props.children}
    </div>
  );
};

SfIcon.propTypes = {
  icon: PropTypes.oneOfType([PropTypes.array, PropTypes.string]),
  color: PropTypes.string,
  size: PropTypes.string,
  viewBox: PropTypes.string,
};

SfIcon.defaultProps = {
  /**
   * Icon SVG path(s)
   * It can be single SVG path (string) or array of SVG paths or icon name
   * from our icons list (such as 'added_to_cart`)
   */
  icon: '',
  /**
   * Custom color of the icon
   * It can be according to our standard colors, or `#fff` or `rgb(255,255,255)` or nothing.
   * Standard colors: `primary`, `secondary`, `white`, `black`, `accent`, `green-primary`, `green-secondary`, `gray-primary`, `gray-secondary`, `light-primary`, `light-secondary`, `pink-primary`, `pink-secondary`, `yellow-primary`, `yellow-secondary`, `blue-primary`, `blue-secondary`.
   */
  color: '',
  /**
   * Custom size of the icon
   * It can be our standard sizes, or `12px` or `1.2rem` or nothing.
   * Standard sizes: `xxs`, `xs`, `sm`, `md`, `lg`, `xl`, `xxl`, `xl3`, `xl4`.
   */
  size: '',
  /**
   * Custom viewBox size of the icon
   * It should be according to the standard `"min-x min-y width height"`.
   * By default it will be `0 0 24 24`. If you use our icons, you don't need to pass this prop at all.
   * Recommedations: try to get your SVG designed with our default viewBox value and reduce the number of props passed to the component.
   */
  viewBox: '0 0 24 24',
};
