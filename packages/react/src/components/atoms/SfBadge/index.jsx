import React from "react";
import classnames from "classnames";
import '@storefront-ui/shared/styles/components/SfBadge.scss';

export const SfBadge= ({ classname, children }) => {
  return (
    <div className={classnames(classname, "sf-badge")}>
      {children}
    </div>
  );
};
