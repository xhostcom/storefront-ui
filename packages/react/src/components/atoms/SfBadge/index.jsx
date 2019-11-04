import React from "react";
import '@storefront-ui/shared/styles/components/SfBadge.scss'

export const SfBadge= ({ classname, children }) => {
  return (
    <div className={classname}>
      {children}
    </div>
  );
};
