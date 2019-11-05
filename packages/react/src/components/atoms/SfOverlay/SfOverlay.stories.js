import React from "react";
import { storiesOf } from "@storybook/react";
import { withKnobs, boolean, text } from "@storybook/addon-knobs";
import { SfOverlay } from "./";

storiesOf("Atoms|Overlay", module)

  .addDecorator(withKnobs)
  .add(
    "Primary",
    () => <SfOverlay
      transition={text("transition (prop)", "fade")}
      visible={boolean("visible (prop)", true)}
    />
  );

