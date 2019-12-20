import React, { useState } from 'react';
import classnames from 'classnames';
import { storiesOf } from '@storybook/react';
import { withKnobs, select, optionsKnob as options } from '@storybook/addon-knobs';
import { SfSidebar } from './';
import { SfButton } from '../../atoms';

const SidebarWrapper = (props) => {
  const [open, setOpen] = useState(true);

  return (
    <>
      <SfButton onclick={() => setOpen(true)}>show sidebar</SfButton>
      <SfSidebar
        classname={props.classname}
        button={props.button}
        overlay={props.overlay}
        visible={open}
        onclose={() => setOpen(false)}
      />
    </>
  );
};

storiesOf('Organisms|Sidebar', module)
  .addDecorator(withKnobs)
  .add('Primary', () => (
    <SidebarWrapper
      classname={classnames(
        options(
          'CSS modifier',
          {
            'sf-sidebar--right': 'sf-sidebar--right',
          },
          '',
          { display: 'multi-select' },
        ),
      )}
      button={select('button', [true, false], true)}
      overlay={select('overlay', [true, false], true)}
    />
  ));
