import React from "react";
import classnames from "classnames";
import '@storefront-ui/shared/styles/components/SfPrice.scss'

export const SfPrice = ({ classname, special, regular }) => {
  return (
    <div className={classnames(classname, "sf-price")}>
      {special && <span className="sf-price__special">{ special }</span>}
      {special && <span className="sf-price__old">{ regular }</span>}
      {!special && <span className="sf-price__regular">{ regular }</span>}
    </div>
  )
}

SfPrice.defaultProps = {
  regular: null,
  special: null
}
