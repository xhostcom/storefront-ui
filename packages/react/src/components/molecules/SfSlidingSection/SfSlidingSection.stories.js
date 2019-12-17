import React from "react";
import { storiesOf } from "@storybook/react";
import { withKnobs } from "@storybook/addon-knobs";
import { SfSlidingSection } from "./";

const StoriesPlaceholderStatic = <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', height: '34.6875rem', backgroundColor: '#f2f2f2'}}>[#static content]</div>
const StoriesPlaceholderSliding = <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', height: '18.75rem', backgroundColor: '#f2f2f2'}}>[#static content]</div>

storiesOf("Molecules|SlidingSection", module)
  .addDecorator(withKnobs)
  .add(
    "Primary",
      () =>
        <div style={{maxWidth: '64rem', margin: 'auto'}}>
          <SfSlidingSection
            slidingContent={StoriesPlaceholderSliding}
            staticContent={StoriesPlaceholderStatic}
          />
        </div>
  )