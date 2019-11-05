import React from "react";
import { storiesOf } from "@storybook/react";
import { withKnobs, optionsKnob as options, text } from "@storybook/addon-knobs";
import { SfPrice } from "./";
import { SfBadge } from "../";
import classnames from 'classnames';

storiesOf("Atoms|Price", module)

  .addDecorator(withKnobs)
  .add(
    "Primary",
    () => <SfPrice classname={classnames(
      options(
        "CSS modifier",
        {
          "sf-price--big": "sf-price--big"
        },
        "",
        { display: "multi-select" }
      )
    )}
    regular={text("regular (prop)", "$200.00")}
    special={text("special (prop)", "$100.00")}
    />
  )
  .add(
    "Special",
    () => <SfPrice classname={classnames(
      options(
        "CSS modifier",
        {
          "sf-price--big": "sf-price--big"
        },
        "",
        { display: "multi-select" }
      )
    )}
    regular={text("regular (prop)", "$200.00")}
    special={<SfBadge classname="color-warning">{text("special (prop)", "$100.00")}</SfBadge>}
    />
  )
  .add(
    "Old",
    () => <SfPrice classname={classnames(
      options(
        "CSS modifier",
        {
          "sf-price--big": "sf-price--big"
        },
        "",
        { display: "multi-select" }
      )
    )}
    regular={<SfBadge classname="color-secondary">{text("regular (prop)", "$200.00")}</SfBadge>}
    special={text("special (prop)", "$100.00")}
    />
  )
  .add(
    "Regular",
    () => <SfPrice classname={classnames(
      options(
        "CSS modifier",
        {
          "sf-price--big": "sf-price--big"
        },
        "",
        { display: "multi-select" }
      )
    )}
    regular={<SfBadge>{text("regular (prop)", "$200.00")}</SfBadge>}
    special={text("special (prop)", "")}
    />
  )
