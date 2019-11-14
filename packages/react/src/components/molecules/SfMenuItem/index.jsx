import React from "react";
import { SfIcon } from "../../atoms";
import classnames from "classnames";
import '@storefront-ui/shared/styles/components/SfMenuItem.scss';

export const SfMenuItem = ({ label, count, icon }) => {
  return (
    <div className="sf-menu-item">
    {label && <span className="sf-menu-item__label">{label}</span>}
    {count && <span className="sf-menu-item__count">{count}</span>}
    {icon && <SfIcon
      icon={icon}
      className="sf-menu-item__mobile-nav-icon"
      size="14px"/>}
  </div>
  );
};

SfMenuItem.defaultProps = {
  label: "",
  count: "",
  icon: ""
}
