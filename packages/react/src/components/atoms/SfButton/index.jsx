import React from "react";
import classnames from "classnames";
import '@storefront-ui/shared/styles/components/SfButton.scss'

export const SfButton = ({ classname, children, on, ...restProps }) => {
  return (
    <button className={classnames(classname, "sf-button")} onClick={on} {...restProps}>
      {children}
    </button>
  );
};
