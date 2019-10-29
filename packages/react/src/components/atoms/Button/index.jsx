import * as React from "react";
import '@storefront-ui/shared/styles/components/SfButton.scss'

export const Button = ({ classname, children, on }) => {
  return (
    <button className={classname} onClick={on}>
      {children}
    </button>
  );
};
