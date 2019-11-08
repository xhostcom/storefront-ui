import React, { useState } from "react";
import { storiesOf } from "@storybook/react";
import { withKnobs, text, optionsKnob as options, select } from "@storybook/addon-knobs";
import classnames from "classnames";
import { SfSearchBar } from "./";

const SearchBarWrapper = (props) => {
  const [value, setValue] = useState(undefined)

  return <SfSearchBar
  classname={props.classname}
    value={value}
    placeholder={props.placeholder}
    icon={props.icon}
    clearIcon={props.clearIcon}
    onInputChange={(ev) => setValue(ev.target.value)}
  />
}


storiesOf("Molecules|SearchBar", module)
  .addDecorator(withKnobs)
  .add(
    "Primary",
      () => <SearchBarWrapper
      placeholder={text("placeholder (prop)", "Search for...")}
      icon={select("icon (prop)", [true, false])}
      // clearIcon={text("clearIcon (prop)", "assets/storybook/plus.svg")}
    />
  )
  .add(
    "CSS Modifiers",
      () => <SearchBarWrapper classname={classnames(
        options(
          "CSS modifier",
          {
            "sf-search-bar--secondary": "sf-search-bar--secondary",
              "sf-search-bar--position-right": "sf-search-bar--position-right",
              "sf-search-bar--position-right-mobile":
              "sf-search-bar--position-right-mobile",
              "sf-search-bar--position-right-desktop":
              "sf-search-bar--position-right-desktop"
          },
          "",
          { display: "multi-select" }
        )
      )}
    />
  )
