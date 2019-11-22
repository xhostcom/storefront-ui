import React, { useState } from "react";
import { storiesOf } from "@storybook/react";
import { withKnobs, select, text } from "@storybook/addon-knobs";
import { SfNotification } from "./";
// import { SfButton } from "../../atoms";

const NotificationWrapper = (props) => {
  const [open, setOpen] = useState(true)

  return <>
    {/* <SfButton on={() => setOpen(true)}>Show notification</SfButton> */}
    <SfNotification
      visible={open}
      title={props.title}
      message={props.message}
      type={props.type}
      action={props.action}
      onClose={() => setOpen(false)}
      onAction={() => console.log('action')}
    />
  </>
}

storiesOf("Molecules|Notification", module)
  .addDecorator(withKnobs)
  .add(
    "Primary",
      () => <NotificationWrapper
      title={text("title (prop)", "Added to Cart")}
      message={text(
        "message (prop)",
        "This is informative message for the user."
      )}
      action={text("action (prop)", "View cart")}
      type={select(
        "type (prop)",
        ["secondary", "info", "success", "warning", "danger"],
        "secondary"
      )}
      visible={true}
    />
  )
