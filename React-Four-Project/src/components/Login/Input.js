import React, { useRef, useImperativeHandle } from "react";
import classes from "./Login.module.css";

const Input = React.forwardRef((props, ref) => {
  const inputRef = useRef();
  const activate = () => {
    inputRef.current.focus();
  }
  useImperativeHandle(ref, () => {
      return {
        focus: activate
      }
  });
  return (
    <React.Fragment>
      <div
        className={`${classes.control} ${
          props.isValid === false ? classes.invalid : ""
        }`}
      >
        <label htmlFor={props.inputFor}>{props.labelName}</label>
        <input
          ref={inputRef}
          type={props.type}
          id={props.inputFor}
          value={props.value}
          onChange={props.onChange}
          onBlur={props.onBlur}
        />
      </div>
    </React.Fragment>
  );
});
export default Input;
