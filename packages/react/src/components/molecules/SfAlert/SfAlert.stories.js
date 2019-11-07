import React from "react";
import { storiesOf } from "@storybook/react";
import { withKnobs, select, text } from "@storybook/addon-knobs";
import { SfAlert } from "./";


storiesOf("Molecules|Alert", module)
  .addDecorator(withKnobs)
  .add(
    "Primary",
    () => <SfAlert
      message={text("message (prop)", "Low in stock")}
      type={select(
        "type (prop)",
        ["secondary", "info", "success", "warning", "danger"],
        "secondary"
      )}
    />
  )
  .add(
    "Icon",
    () => <SfAlert
      message="Message props"
      icon={<img src="assets/storybook/doge.svg" style={{height: 25, marginRight: 10}}/>}
    />
  )
  .add(
    "Message",
    () => <SfAlert
      message={<span className="sf-alert__message">Custom message <b>with custom HTML</b></span>}
    />
  )
