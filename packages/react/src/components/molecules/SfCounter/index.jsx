import React, { useState, useEffect } from "react";
import { SfIcon } from "../../atoms";
import classnames from 'classnames';
import '@storefront-ui/shared/styles/components/SfCounter.scss';

export const SfCounter = ({
  classname,
  step,
  value,
  autoFill,
  min,
  max,
  precision,
  name,
  type,
  placeholder,
  disabled,
  required, 
  delimiter,
  iconUp,
  iconDown
}) => {
  const [currentValue, setCurrentValue] = useState(0)

  useEffect(() => {
    setCurrentValue(setCurrentVal(parseNumber(value)))
  }, [value])

  useEffect(() => {
    if (currentValue > max) {
      setCurrentValue(max)
    } else if (currentValue < min) {
      setCurrentValue(min)
    }
  }, [min, max])

  const currentVal = () => {
    return currentValue || currentValue === 0
      ? currentValue
      : autoFill
        ? parseNumber(value)
        : null
  }

  const keypress = (e) => {
    if (e && e.key) {
      switch (e.key) {
        // case "0":
        // case "1":
        // case "2":
        // case "3":
        // case "4":
        // case "5":
        // case "6":
        // case "7":
        // case "8":
        // case "9":
        case "ArrowUp":
          increase()
          return
        case "ArrowDown":
          decrease()
          return
        // case "Enter":
        //   return true;
        // case delimiter:
        //   if (precision) {
        //     return true;
        //   }
        default:
          return
      }
      //e.preventDefault();
    }
  }

  const parseNumber = (v) => {
    switch (typeof v) {
      case "string":
        if (typeof thousands === "string" && thousands !== "") {
          // remove thousands separator first
          v = v.replace(new RegExp(thousands, "g"), "");
        }
        if (precision) {
          let parts = value.split(delimiter, 2);
          if (parts.length === 1) {
            // no decimals
            return parseInt(v, 10);
          }
          // fix up to maximum precision on decimal places
          let decimalPlaces = parts[1].length;
          if (decimalPlaces > precision) {
            // user may have added digit at the end of input
            let digits = parts[0] + parts[1];
            v =
              digits.slice(0, -precision) +
              "." +
              digits.slice(-precision);
          } else if (delimiter !== ".") {
            // just fix the delimiter before parsing to float
            v = v.replace(delimiter, ".");
          }
          return parseFloat(v);
        }
        // no decimal precision: integer value
        return parseInt(v, 10);
      case "number":
        if (!isNaN(v)) {
          return v;
        }
    }
    return min || 0
  }

  const setCurrentVal = (val) => {
    if (typeof val === "number") {
      // check minimum and maximum
      if (typeof min === "number" && val < min) {
        return min
      } else if (typeof max === "number" && val > max) {
        return max
      }
    }
    return val
  }

  // const get = () => {
  //   if (typeof currentValue === "number") {
  //     let str;
  //     if (precision) {
  //       str = currentValue.toFixed(precision);
  //       if (delimiter !== ".") {
  //         str = str.replace(".", delimiter);
  //       }
  //     } else {
  //       str = parseInt(currentValue, 10).toString();
  //     }
  //     if (typeof thousands === "string" && thousands !== "") {
  //       // add thousands delimiter
  //       return str.replace(/\B(?=(\d{3})+(?!\d))/g, thousands);
  //     } else {
  //       return str;
  //     }
  //   }
  //   return currentValue;
  // }

  // const set = (value) => {
  //   if ((value !== null && value !== "") || autofill) {
  //     let num = parseNumber(value);
  //     if (isNaN(num)) {
  //       num = 0;
  //     }
  //     // force current number value to sync with input value
  //     //currentValue = num;
  //     setCurrentValue(num)
  //     // check if number is valid
  //     setCurrentVal(num);
  //   } else {
  //     // sey empty
  //     setCurrentVal(null);
  //   }
  // }

  const increase = () => {
    setCurrentValue(val => setCurrentVal(val + step))
  }

  const decrease = () => {
    setCurrentValue(val => setCurrentVal(val - step))
  }

  const onChangeHandler = (ev) => {
    const newVal = parseNumber(ev.target.value)
    setCurrentValue(setCurrentVal(newVal))
  }


  return (
    <div className={classnames("sf-counter", classname)}>
      <div
        className="sf-counter__control sf-counter__control--down"
        onClick={() => decrease()}>
          {!iconDown && <SfIcon icon="chevron_left" size="23px" />}
          {iconDown && iconDown}
      </div>
        <input
          className="sf-counter__field"
          aria-label="current value"
          onKeyDown={keypress}
          value={currentVal()}
          onChange={onChangeHandler}
          type={type}
          name={name}
          required={required}
          disabled={disabled}
          placeholder={placeholder}/>
      <div
        v-if="controls"
        className="sf-counter__control sf-counter__control--up"
        role="button"
        aria-label="Increase"
        onClick={() => increase()}>
          {!iconUp && <SfIcon icon="chevron_right" size="23px" />}
          {iconUp && iconUp}
      </div>
    </div>
  )
}

SfCounter.defaultProps = {
  step: 1,
  // decimal precision
  precision: 0,
  // number format delimiters
  delimiter: ".",
  thousands: ",",
  // whether to enable the control buttons
  controls: true,
  // native input attributes
  type: "text",
  autoFill: false,
  disabled: false,
  required: false
}
