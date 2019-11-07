import React, { useState } from "react";
import { storiesOf } from "@storybook/react";
import { withKnobs, boolean, text } from "@storybook/addon-knobs";
import { SfInput } from "./";
import { SfIcon } from "../";

const InputWrapper = (props) => {
  const [value, setValue] = useState(undefined)

  return <SfInput
    value={value}
    label={props.label}
    name={props.name}
    errorMessage={props.errorMessage}
    valid={props.valid}
    required={props.required}
    disabled={props.disabled}
    on={(ev) => setValue(ev.target.value)}
  />
}

storiesOf("Atoms|Input", module)

  .addDecorator(withKnobs)
  .add(
    "Primary",
    () => <InputWrapper
      label={text("label (prop)", "First name")}
      name={text("name (prop)", "first-name")}
      errorMessage={text("errorMessage (prop)", "Field is required.")}
      valid={boolean("valid (prop)", true)}
      required={boolean("required (prop)", true)}
      disabled={boolean("disabled (prop)", false)}
    />
  )
  .add(
    "Label",
    () => <InputWrapper
      label={<><SfIcon icon="heart_fill" size="10px" style={{marginRight: 4, display: "inline-block"}}/>{text("label (prop)", "First name")}</>}
      name={text("name (prop)", "first-name")}
      errorMessage={text("errorMessage (prop)", "Field is required.")}
      valid={boolean("valid (prop)", true)}
      required={boolean("required (prop)", true)}
      disabled={boolean("disabled (prop)", false)}
    />
  )
  .add(
    "Error Message",
    () => <InputWrapper
      label={text("label (prop)", "First name")}
      name={text("name (prop)", "first-name")}
      errorMessage={<><SfIcon icon="info_shield" size="10px" color="#E22326" style={{marginRight: 4, display: "inline-block"}}/>{text("errorMessage (prop)", "Field is required.")}</>}
      valid={boolean("valid (prop)", true)}
      required={boolean("required (prop)", true)}
      disabled={boolean("disabled (prop)", false)}
    />
  )
