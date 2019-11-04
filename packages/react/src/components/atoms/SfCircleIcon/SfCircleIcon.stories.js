import React from "react";
import { storiesOf } from "@storybook/react";
import { withKnobs, optionsKnob as options, select } from "@storybook/addon-knobs";
import { SfCircleIcon } from "./";
import classnames from 'classnames';
import { icons } from "@storefront-ui/shared/icons/icons";

const iconsNames = Object.keys(icons);

storiesOf("Atoms|CircleIcon", module)

  .addDecorator(withKnobs)
  .add(
    "Primary",
    () => <SfCircleIcon classname={classnames(
      "sf-button",
      "sf-circle-icon",
      options(
        "CSS modifier",
        {
          "sf-circle-icon--small": "sf-circle-icon--small",
          "sf-circle-icon--big": "sf-circle-icon--big",
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
    )}
    icon={select("icon (prop)", iconsNames, "home")}
    />
  )
  .add(
    "Children",
    () => <SfCircleIcon classname={classnames(
      "sf-button",
      "sf-circle-icon",
      options(
        "CSS modifier",
        {
          "sf-circle-icon--small": "sf-circle-icon--small",
          "sf-circle-icon--big": "sf-circle-icon--big",
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
    )}
    ><span style={{fontSize:" 1.5rem"}}>1</span></SfCircleIcon>
  );
