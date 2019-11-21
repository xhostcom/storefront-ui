import React, { useState } from "react";
import { storiesOf } from "@storybook/react";
import { withKnobs, boolean } from "@storybook/addon-knobs";
import { SfModal } from "./";
import { SfButton } from "../../atoms";

const ModalWrapper = (props) => {
  const [open, setOpen] = useState(false)

  return <>
    <SfButton on={() => setOpen(true)}>Open modal</SfButton>
    <SfModal
      visible={open}
      cross={props.cross}
      overlay={props.overlay}
      persistent={props.persistent}
      children={props.children}
      onClose={() => setOpen(false)}
    />
  </>
}

storiesOf("Molecules|Modal", module)
  .addDecorator(withKnobs)
  .add(
    "Primary",
      () => <ModalWrapper
      cross={boolean("cross (prop)", true)}
      overlay={boolean("overlay (prop)", true)}
      persistent={boolean("persistent (prop)", false)}
    >Hello World!</ModalWrapper>
  )
