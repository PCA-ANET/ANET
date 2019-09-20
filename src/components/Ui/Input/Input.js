import React from 'react';
import classes from './Input.module.css';

const input = props => {
  let inputElement = null;
  const inputClasses = ['form-control'];
  if (props.invalid && props.shouldValidate && props.touched) {
    inputClasses.push(classes.Invalid);
  }
  switch (props.elementType) {
    case 'X':
      inputElement = null;
      break;
    default:
      inputElement = (
        <input
          className="form-control"
          {...props.elementConfig}
          value={props.value}
          onChange={props.changed}
        />
      );
  }
  return <>{inputElement}</>;
};

export default input;
