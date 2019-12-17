import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, optionsKnob as options } from '@storybook/addon-knobs';
import { SfRadio } from './';

const RadioWrapper = (props) => {
  const radios = [
    {
      name: 'shipping',
      value: 'store',
      label: 'Pickup in the store',
      description:
        'Novelty! From now on you have the option of picking up an order in the selected InPack parceler. Just remember that in the case of orders paid on delivery, only the card payment will be accepted.',
    },
    {
      name: 'shipping',
      value: 'home',
      label: 'Delivery to home',
      description:
        'Novelty! From now on you have the option of picking up an order in the selected InPack parceler. Just remember that in the case of orders paid on delivery, only the card payment will be accepted.',
    },
    {
      name: 'shipping',
      value: 'coffee',
      label: '48 hours coffee',
      description:
        'Novelty! From now on you have the option of picking up an order in the selected InPack parceler. Just remember that in the case of orders paid on delivery, only the card payment will be accepted.',
    },
    {
      name: 'shipping',
      value: 'inpost',
      label: 'Paczkomaty Inpost',
      description:
        'Novelty! From now on you have the option of picking up an order in the selected InPack parceler. Just remember that in the case of orders paid on delivery, only the card payment will be accepted.',
    },
  ];
  const [selected, setSelected] = useState('inpost');

  return (
    <>
      {radios.map((el) => (
        <SfRadio
          key={el.value}
          classname={props.classname}
          label={el.label}
          name={el.name}
          value={el.value}
          description={el.description}
          selected={selected}
          onClick={(el) => setSelected(el)}
        />
      ))}
    </>
  );
};

storiesOf('Molecules|Radio', module)
  .addDecorator(withKnobs)
  .add('Primary', () => (
    <RadioWrapper
      classname={options(
        'CSS Modifiers',
        {
          'sf-radio--transparent': 'sf-radio--transparent',
        },
        '',
        { display: 'multi-select' },
      )}
    />
  ));
