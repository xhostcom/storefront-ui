import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text, optionsKnob as options, boolean, number } from '@storybook/addon-knobs';
import { SfSelect } from './';

const SelectWrapper = (props) => {
  const [selected, setSelected] = useState(undefined);

  return (
    <div>
      <p>
        <b>Selected: {selected && selected.value}</b>
      </p>
      <SfSelect
        classname={props.classname}
        selected={selected}
        size={props.size}
        required={props.required}
        label={props.label}
        options={props.options}
        valid={props.valid}
        onSelect={(val) => setSelected(val)}
      />
    </div>
  );
};

storiesOf('Molecules|Select', module)
  .addDecorator(withKnobs)
  .add('Primary', () => (
    <div style={{ width: 300 }}>
      <SelectWrapper
        classname={options(
          'CSS Modifiers',
          {
            'sf-select--bordered': 'sf-select--bordered',
            'sf-select--underlined': 'sf-select--underlined',
          },
          'sf-select--underlined',
          { display: 'multi-select' },
        )}
        // size={number("size (prop)", 5)}
        required={boolean('required (prop)', true)}
        valid={boolean('valid (prop)', true)}
        label={text('label (prop)', 'Color')}
        errorMessage={text('errorMessage (prop)', 'This field is not correct.')}
        options={[
          { value: 'amaranth', color: '#E52B50', label: 'Amaranth' },
          { value: 'amber', color: '#FFBF00', label: 'Amber' },
          { value: 'arctic-lime', color: '#D0FF14', label: 'Arctic lime' },
          { value: 'bluetiful', color: '#3C69E7', label: 'Bluetiful' },
          {
            value: 'brilliant-rose',
            color: '#FF55A3',
            label: 'Brilliant rose',
          },
          { value: 'buff', color: '#F0DC82', label: 'Buff' },
        ]}
      />
    </div>
  ));
