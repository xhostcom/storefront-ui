import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';
import { CSSTransition } from 'react-transition-group';
import { SfButton } from '../../atoms';
import './transitions.scss';

const Transition = ({ name }) => {
  const [showMessage, setShowMessage] = useState(false);
  return (
    <>
      <SfButton on={() => setShowMessage((prevState) => !prevState)}>{name}</SfButton>
      <CSSTransition in={showMessage} classNames={name} timeout={300} unmountOnExit>
        <p>hello</p>
      </CSSTransition>
    </>
  );
};

export default storiesOf('Utilities|Transitions', module)
  .add('Fade', () => <Transition name="fade" />)
  .add('Slide Right', () => <Transition name="slide-right" />)
  .add('Slide Left', () => <Transition name="slide-left" />)
  .add('Collapse Top', () => <Transition name="collapse-top" />)
  .add('Collapse Bottom', () => <Transition name="collapse-bottom" />)
  .add('Fade Slide', () => <Transition name="fade-slide" />)
  .add('Fade Collapse', () => <Transition name="fade-collapse" />);
