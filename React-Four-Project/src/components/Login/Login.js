import React, { useState, useReducer, useEffect, useContext, useRef } from "react";

import Card from "../UI/Card/Card";
import classes from "./Login.module.css";
import Button from "../UI/Button/Button";
import AuthContext from "../Store/auth-context";
import Input from "./Input";

const emailReducer = (state, action) => {
  if (action.type === "USER_INPUT") {
    return { value: action.value, isValid: true };
  }
  if (action.type === "Email_Validate") {
    return { value: state.value, isValid: state.value.includes("@") };
  }
  return { value: "", isValid: false };
};

const Login = (props) => {
  const ctx = useContext(AuthContext);
  const [formIsValid, setFormIsValid] = useState(false);

  //  one way for not breaking the state scheduling rule
  const [emailState, emailDispatcher] = useReducer(emailReducer, {
    value: "",
    isValid: null,
  });
  //  second way for not breaking the state scheduling rule
  const [getPassword, setPassword] = useState({ value: "", isValid: null });

  const { isValid: isEmailValid } = emailState;
  const { isValid: isPasswordValid } = getPassword;
  const emailRef = useRef();
  const passwordRef = useRef();
  useEffect(() => {
    const timer = setTimeout(() => {
      console.log("Validating");
      setFormIsValid(isEmailValid && isPasswordValid);
    }, 500);
    return () => {
      clearTimeout(timer);
    };
  }, [isEmailValid, isPasswordValid]);
  const emailChangeHandler = (event) => {
    emailDispatcher({ type: "USER_INPUT", value: event.target.value });
  };

  const passwordChangeHandler = (event) => {
    setPassword({
      isValid: true,
      value: event.target.value,
    });
  };

  const validateEmailHandler = () => {
    emailDispatcher({ type: "Email_Validate" });
  };

  const validatePasswordHandler = () => {
    setPassword((prevState) => {
      return {
        ...prevState,
        isValid: prevState.value.trim().length > 6,
      };
    });
  };

  const submitHandler = (event) => {
    event.preventDefault();
    if (formIsValid) {
      ctx.onLogin(emailState.value, getPassword.value);
    }
    else if(!isEmailValid){
      emailRef.current.focus();
    }
    else{
      passwordRef.current.focus();
    }
  };

  return (
    <Card className={classes.login}>
      <form onSubmit={submitHandler}>
        <Input
        ref={emailRef}
          isValid={emailState.isValid}
          labelName="Email"
          type="email"
          inputFor="email"
          value={emailState.value}
          onChange={emailChangeHandler}
          onBlur={validateEmailHandler}
        />
        <Input
        ref={passwordRef}
          isValid={getPassword.isValid}
          labelName="Password"
          type="password"
          inputFor="password"
          value={getPassword.value}
          onChange={passwordChangeHandler}
          onBlur={validatePasswordHandler}
        />
        <div className={classes.actions}>
          <Button type="submit" className={classes.btn}>
            Login
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default Login;
