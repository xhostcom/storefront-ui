import React, { useState } from "react";
import { storiesOf } from "@storybook/react";
import { withKnobs, boolean, array, number } from "@storybook/addon-knobs";
import { SfSteps } from "./";

const steps = [
  "One",
  "Two",
  "Three",
  "Four"
]

const StepsWrapper = (props) => {
  const [selected, setSelected] = useState(0)

  return <SfSteps
      steps={props.steps}
      canGoBack={props.canGoBack}
      onStepChange={(val) => setSelected(val)}
      active={props.active}
    >
      step {steps[selected]}
    </SfSteps>
}


storiesOf("Molecules|Steps", module)
  .addDecorator(withKnobs)
  .add(
    "Primary",
      () => <StepsWrapper
      steps={array("steps", steps)}
      canGoBack={boolean("canGoBack", true)}
    />
  )
