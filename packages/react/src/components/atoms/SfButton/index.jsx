import React from "react";
import '@storefront-ui/shared/styles/components/SfButton.scss'

export const SfButton = ({ classname, children, on }) => {
  return (
    <button className={classname} onClick={on}>
      {children}
    </button>
  );
};
