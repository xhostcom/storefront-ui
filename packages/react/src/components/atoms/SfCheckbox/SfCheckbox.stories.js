import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, boolean, text } from '@storybook/addon-knobs';
import { SfCheckbox } from './';

const CheckboxWrapper = (props) => {
  const [selected, setSelected] = useState(false);

  return (
    <SfCheckbox
      selected={selected}
      name={props.name}
      required={props.required}
      disabled={props.disabled}
      label={props.label}
      value={props.value}
      customIconChecked={props.customIconChecked}
      customIconUnchecked={props.customIconUnchecked}
      labelChecked={props.labelChecked}
      labelUnchecked={props.labelUnchecked}
      onchange={(val) => setSelected(val)}
    />
  );
};

const MultipleCheckboxWrapper = (props) => {
  const [selected, setSelected] = useState([]);
  return (
    <>
      <div style={{ marginBottom: 10 }}>selected: {selected.join(', ')}</div>
      <SfCheckbox selected={selected} name="woman" value="woman" label="Woman" onchange={(val) => setSelected(val)} />
      <SfCheckbox selected={selected} name="man" value="man" label="Man" onchange={(val) => setSelected(val)} />
      <SfCheckbox selected={selected} name="child" value="child" label="Child" onchange={(val) => setSelected(val)} />
    </>
  );
};

storiesOf('Atoms|Checkbox', module)
  .addDecorator(withKnobs)
  .add('Primary', () => (
    <CheckboxWrapper
      name={text('name (prop)', 'shipping')}
      value={text('value (prop)', 'shipping-address')}
      label={text('label (prop)', 'Copy address data from shipping')}
      required={boolean('required (prop)', false)}
      disabled={boolean('disabled (prop)', false)}
    />
  ))
  .add('Checkmark', () => (
    <CheckboxWrapper
      name={text('name (prop)', 'shipping')}
      value={text('value (prop)', 'shipping-address')}
      label={text('label (prop)', 'Copy address data from shipping')}
      required={boolean('required (prop)', false)}
      disabled={boolean('disabled (prop)', false)}
      customIconChecked={<span>👍🏻</span>}
      customIconUnchecked={<span>👎🏻</span>}
    />
  ))
  .add('Label', () => (
    <CheckboxWrapper
      name={text('name (prop)', 'shipping')}
      value={text('value (prop)', 'shipping-address')}
      label={text('label (prop)', 'Copy address data from shipping')}
      required={boolean('required (prop)', false)}
      disabled={boolean('disabled (prop)', false)}
      labelChecked={<span>🎉 I'm checked</span>}
      labelUnchecked={<span>👈 Please check me</span>}
    />
  ))
  .add('Multiple', () => <MultipleCheckboxWrapper />);

// .add("Multiple checkboxes", () => ({
//   components: { SfCheckbox },
//   data() {
//     return {
//       checked: []
//     };
//   },
//   template: `<div>
//       <SfCheckbox
//         v-model="checked"
//         name="woman"
//         value="woman"
//         label="Woman"
//       />
//       <SfCheckbox
//         v-model="checked"
//         name="man"
//         value="man"
//         label="Man"
//       />
//       <SfCheckbox
//         v-model="checked"
//         name="children"
//         value="children"
//         label="Children"
//       />
//     </div>`
// }))
