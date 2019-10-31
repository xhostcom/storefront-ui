import React, { useRef, useEffect } from "react";
import '@storefront-ui/shared/styles/components/SfIcon.scss';
import { icons } from "@storefront-ui/shared/icons/icons";
import classnames from 'classnames';

export const SfIcon = (props) => {
console.log(props)
  const ref = useRef(null)
  useEffect(() => {
    updateProps()
  }, [props.color, props.size, props.icon, props.viewBox])

  const HEX_REGEX = /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/;
  const RGB_REGEX = /rgb\((\d{1,3}), (\d{1,3}), (\d{1,3})\)/;
  const SF_SIZES = ["xxs", "xs", "sm", "md", "lg", "xl", "xxl", "xl3", "xl4"];
  const SF_ICONS = Object.keys(icons);

  const updateProps = () => {
    if (isDecimalOrHexColor() && ref) {
      ref.current.style.setProperty("--icon-color", props.color);
    }

    if (!isSFSizes() && ref) {
      ref.current.style.setProperty("--icon-size", props.size);
    }
  }

  const isDecimalOrHexColor = () => {
    const color = props.color.trim();
    return RGB_REGEX.test(color) || HEX_REGEX.test(color);
  }
  const isSFSizes = () => {
    const size = props.size.trim();
    return SF_SIZES.includes(size);
  }
  const iconColor = () => {
    return !isDecimalOrHexColor()
      ? `sf-icon--color-${props.color.trim()}`
      : props.color;
  }
  const iconSize = () => {
    return isSFSizes() ? `sf-icon--size-${props.size.trim()}` : "";
  }
  const isSFIcons = () => {
    return SF_ICONS.includes(props.icon.trim());
  }
  const iconViewBox = () => {
    return isSFIcons()
      ? icons[props.icon].viewBox || props.viewBox
      : props.viewBox;
  }
  const iconPaths = () => {
    if (isSFIcons()) {
      return icons[props.icon].paths;
    } else {
      return Array.isArray(props.icon) ? props.icon : [props.icon];
    }
  }

  return (
    <div className={classnames('sf-icon', iconColor(), iconSize())} ref={ref}>
      {!props.children && <svg className="sf-icon-path" viewBox={iconViewBox()} preserveAspectRatio="none">
          <path d={iconPaths()} style={{height: '100%'}}/>
      </svg>}
      {props.children}
    </div>
  )
}

SfIcon.defaultProps = {
  icon: "home",
  color: "primary",
  size: "xxs",
  viewBox: "0 0 24 24"
}
