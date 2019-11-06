import React, {useState, useEffect} from "react";
import { storiesOf } from "@storybook/react";
import { withKnobs } from "@storybook/addon-knobs";
import { SfLoader } from './';
import { SfImage } from '../';

const Loader = (props) => {
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    window.setTimeout(() => {
      setLoading(false)
    }, 3000)
  }, [])

  return <SfLoader loading={loading} {...props}>{props.children}</SfLoader>
}

storiesOf("Atoms|Loader", module)
  .addDecorator(withKnobs)
  .add(
    "Primary",
    () => <div style={{width: 236, height: 366, border: "1px solid #F2F2F2"}}>
      <Loader>
        <SfImage src="/assets/storybook/product-216x326.jpg" />
      </Loader>
    </div>
  )
  .add(
    "Loader",
    () => <div style={{width: 236, height: 366, border: "1px solid #F2F2F2"}}>
      <Loader loader={<span>loading...</span>}>
        <SfImage src="/assets/storybook/product-216x326.jpg" />
      </Loader>
    </div>
  )
