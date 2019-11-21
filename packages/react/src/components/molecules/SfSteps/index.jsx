import React, { useState, useEffect } from "react";
import classnames from 'classnames';
import '@storefront-ui/shared/styles/components/SfSteps.scss';

export const SfSteps = ({ steps, children, onStepChange, canGoBack, active }) => {
  const [activeStep, setActiveStep] = useState(active)
  const [step, setStep] = useState([])

  useEffect(() => {
    if (canGoBack) {
      setStep(step.map(el => {return {...el, disabled: false}}))
    }
  }, [canGoBack])

  useEffect(() => {
    setActiveStep(active)
    setStep(steps.map((el, idx) => {
      return {
        step: el,
        done: idx < active,
        disabled: !canGoBack && idx < active,
        current: idx === active
      }
    }))
  }, [active])

  const onClickHandler = (index) => {
    if (!step[index].disabled) {
      onStepChange(index)
      setActiveStep(index)
      setStep(currStep => currStep.map((el, idx) =>
        {
          return {
            ...el,
            done: idx < index,
            disabled: !canGoBack && idx < index,
            current: idx === index
          }
        }
      ))
    }
  }

  return (
    <div className="sf-steps">
      <div className="sf-steps__header">
        {step.map((step, idx) => <div
          key={idx}
          className={classnames({
            'sf-steps__header-step': true,
            'sf-steps__header-step-done': step.done,
            'sf-steps__header-step-current': step.current,
            'sf-steps__header-step-disabled': step.disabled
          })}
          onClick={(e) => onClickHandler(idx)}
        >
          <span>{step.step}</span>
        </div>)}
        <div
          className="sf-steps__progress"
          style={{ width: `${100 / step.length}%`, transform: `scaleX(${activeStep + 1})` }}
        >
        </div>
      </div>
      <div className="sf-steps__content">
        {children}
      </div>
    </div>
  );
};

SfSteps.defaultProps = {
  /**
   * Steps to show
   */
  steps: [],
  /**
   * Current active step
   */
  active: 0,
  /**
   * Disable clicking on  a past step
   */
  canGoBack: true
}
