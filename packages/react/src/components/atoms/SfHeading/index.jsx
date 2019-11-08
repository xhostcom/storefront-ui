import React from "react";
import classnames from "classnames";
import '@storefront-ui/shared/styles/components/SfHeading.scss'

export const SfHeading = ({ classname, level, subtitle, title }) => {
  const CustomTag = `h${level}`
  return (
    <header className={classnames(classname, "sf-heading")}>
      {title && <CustomTag className="sf-heading__title">
        { title }
      </CustomTag>}
      {subtitle && <div className="sf-heading__subtitle">
        { subtitle }
      </div>}
  </header>
  )
}

SfHeading.defaultProps = {
  level: 2,
  title: "",
  subtitle: ""
}
