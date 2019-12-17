import React from "react";
import { storiesOf } from "@storybook/react";
import { withKnobs } from "@storybook/addon-knobs";
import { SfSticky } from "./";

const StoriesPlaceholder =
  <div style={{display: 'flex', flex: 1, alignItems: 'center', justifyContent: 'center', height: '18.75rem', backgroundColor: '#f2f2f2'}}>
    [#default content]
  </div>

storiesOf("Molecules|Sticky", module)
  .addDecorator(withKnobs)
  .add(
    "Primary",
      () =>
      <div style={{display: 'flex'}}>
        <div style={{flex: 1, marginRight: '1.25rem'}}>
          <div style={{height: '25rem', border: '1px solid #f2f2f2'}} />
          <div style={{height: '25rem', marginTop: '1.25rem', border: '1px solid #f2f2f2'}} />
        </div>
        <div style={{flex: 1}}>
          <SfSticky>
            {StoriesPlaceholder}
          </SfSticky>
        </div>
      </div>
  )
