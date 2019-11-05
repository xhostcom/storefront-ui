import React from "react";

import { storiesOf } from "@storybook/react";
// import { action } from "@storybook/addon-actions";
import { withKnobs, optionsKnob as options, text } from "@storybook/addon-knobs";
import { SfButton } from "./";
import classnames from 'classnames';

storiesOf("Atoms|Button", module)

  .addDecorator(withKnobs)
  .add(
    "Primary",
    () => <SfButton classname={classnames(
      options(
        "CSS modifier",
        {
          "sf-button--outline": "sf-button--outline",
          "sf-button--full-width": "sf-button--full-width",
          "color-primary": "color-primary",
          "color-secondary": "color-secondary",
          "color-warning": "color-warning",
          "color-danger": "color-danger",
          "color-info": "color-info",
          "color-success": "color-success"
        },
        "",
        { display: "multi-select" }
      )
    )}>{text("Inner text", "Shop now")}</SfButton>
  );

