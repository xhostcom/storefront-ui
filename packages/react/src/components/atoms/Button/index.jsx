import * as React from "react";
import "../../../../../shared/styles/components/SfButton.scss";
export const Button = ({ children, on }) => {
  return (
    <button className="sf-button" onClick={on}>
      {children}
    </button>
  );
};
