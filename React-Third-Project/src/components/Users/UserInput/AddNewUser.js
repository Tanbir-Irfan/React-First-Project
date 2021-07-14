import React, { useState } from "react";
import ErrorModal from "../../UI/Error/ErrorModal";
import styles from "./AddNewUser.module.css";
import Button from "../../UI/Button/Button";
import Card from "../../UI/Card/Card";

const AddNewUser = (props) => {
  const nameWarning = "Please Enter Your Name";
  const ageWarning = "Please Enter Your Age";
  const [getInput, setInput] = useState({
    username: "",
    age: "",
  });
  const [userNameValidation, setUserNameValidation] = useState(true);
  const [userAgeValidation, setUserAgeValidation] = useState(true);
  const [userNameWarning, setUserNameWarning] = useState(nameWarning);
  const [userAgeWarning, setUserAgeWarning] = useState(ageWarning);
  const getUserName = (event) => {
    setUserNameValidation(true);
    setInput((prevState) => {
      return {
        ...prevState,
        username: event.target.value,
      };
    });
  };
  const getUserAge = (event) => {
    setUserAgeValidation(true);
    setInput((prevState) => {
      return {
        ...prevState,
        age: event.target.value,
      };
    });
  };
  const gatherUserDetails = (event) => {
    event.preventDefault();
    if (getInput.username === "" && getInput.age === "") {
      setUserNameValidation(false);
      setUserAgeValidation(false);
      setUserNameWarning("Please Enter Your Name");
      setUserAgeWarning("Please Enter Your Age");
    } else if (getInput.username === "") {
      setUserNameWarning("Please Enter Your Name");
      setUserNameValidation(false);
      if (parseInt(getInput.age, 10) < 1) {
        setUserAgeValidation(false);
        setUserAgeWarning("Age can not be negative or 0");
      }
    } else if (getInput.age === "") {
      setUserAgeWarning("Please Enter Your Age");
      setUserAgeValidation(false);
    } else if (parseInt(getInput.age, 10) < 1) {
      setUserAgeValidation(false);
      setUserNameWarning("Please Enter Your Name");
      setUserAgeWarning("Age can not be negative or 0");
    } else {
      const gatherDetails = {
        username: getInput.username,
        age: getInput.age,
        id: Math.random().toString(),
      };
      props.onGatherUserDetails(gatherDetails);
      setInput((prevState) => {
        return {
          ...prevState,
          username: "",
          age: "",
        };
      });
    }
  };
  const closeModal = () => {
    setUserNameValidation(true);
    setUserAgeValidation(true);
  }
  return (
    <div>
      {!userNameValidation && !userAgeValidation && <ErrorModal title="Error Occurred" message={`${userNameWarning} \n\n ${userAgeWarning}`} onClose={closeModal}/>}
      <Card className={styles.input}>
        <form onSubmit={gatherUserDetails}>
          <label htmlFor="username">User Name</label>
          <input
            type="text"
            id="username"
            onChange={getUserName}
            value={getInput.username}
            style={{ borderColor: !userNameValidation && "red" }}
          />
          {!userNameValidation && (
            <label style={{ color: "red" }}>{userNameWarning}</label>
          )}
          <label htmlFor="age">Age (In Year)</label>
          <input
            type="number"
            id="age"
            onChange={getUserAge}
            value={getInput.age}
            style={{ borderColor: !userAgeValidation && "red" }}
          />
          {!userAgeValidation && (
            <label style={{ color: "red" }}>{userAgeWarning}</label>
          )}
          <Button type="submit">Submit</Button>
        </form>
      </Card>
    </div>
  );
};

export default AddNewUser;
