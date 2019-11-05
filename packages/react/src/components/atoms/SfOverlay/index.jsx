import React from "react";
import '@storefront-ui/shared/styles/components/SfOverlay.scss'

export const SfOverlay = ({ transition, visible }) => {
  return (
    <>
      {visible && <div
        className="sf-overlay"
      />}
    </>
  )
  // return (
  //   <transition name={transition}>
  //     {visible && <div
  //       classNAme="sf-overlay"
  //     />}
  //   </transition>
  // )
}
