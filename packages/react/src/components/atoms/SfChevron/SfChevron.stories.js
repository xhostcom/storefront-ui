import React from "react";
import { storiesOf } from "@storybook/react";
import { withKnobs, optionsKnob as options } from "@storybook/addon-knobs";
import { SfChevron } from "./";
import { SfIcon } from "../";
import classnames from 'classnames';

storiesOf("Atoms|Chevron", module)

  .addDecorator(withKnobs)
  .add(
    "Primary",
    () => <SfChevron classname={classnames(
      options(
        "CSS modifier",
        {
          "sf-chevron--top": "sf-chevron--top"
        },
        "",
        { display: "multi-select" }
      )
    )}/>
  )
  .add(
    "Icon",
    () => <SfChevron classname={"sf-chevron"}>
      <SfIcon icon="chevron_down" size="xs"/>
    </SfChevron>
  );
