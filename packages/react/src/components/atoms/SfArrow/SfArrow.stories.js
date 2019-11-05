import React from "react";

import { storiesOf } from "@storybook/react";
// import { action } from "@storybook/addon-actions";
import { withKnobs, optionsKnob as options } from "@storybook/addon-knobs";
import { SfArrow } from "./";
import classnames from 'classnames';
import { SfIcon } from '../';

storiesOf("Atoms|Arrow", module)

  .addDecorator(withKnobs)
  .add(
    "Primary",
    () => <SfArrow classname={classnames(
      options(
        "CSS modifier",
        {
          "sf-arrow--right": "sf-arrow--right",
          "sf-arrow--long": "sf-arrow--long",
          "sf-arrow--transparent": "sf-arrow--transparent",
          "sf-arrow--rounded": "sf-arrow--rounded",
          "sf-arrow--no-shadow": "sf-arrow--no-shadow"
        },
        "",
        { display: "multi-select" }
      )
    )} />
  )
  .add("Icon",
    () => <SfArrow classname={classnames(
      options(
        "CSS modifier",
        {
          "sf-arrow--right": "sf-arrow--right",
          "sf-arrow--long": "sf-arrow--long",
          "sf-arrow--transparent": "sf-arrow--transparent",
          "sf-arrow--rounded": "sf-arrow--rounded",
          "sf-arrow--no-shadow": "sf-arrow--no-shadow"
        },
        "",
        { display: "multi-select" }
      )
    )}>
      <SfIcon icon="chevron_left" size="12px" viewBox="0 0 14 14"/>
    </SfArrow>
  );
