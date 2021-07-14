import React, { useState } from "react";
import AddNewUser from "./components/Users/UserInput/AddNewUser";
import UserList from "./components/Users/UserDetails/UserList";
const userList = [
  {
    username: "Tanbir Irfan",
    age: "23",
    id: Math.random().toString(),
  },
  {
    username: "Samia Chowdhury",
    age: "30",
    id: Math.random().toString(),
  },
];
function App() {
  var [getUserDetails, setUserDetails] = useState(userList);

  const gatherUserDetails = (userDetails) => {
    setUserDetails((prevState) => {
      return [userDetails, ...prevState];
    });
  };
  return (
    <div>
      <AddNewUser onGatherUserDetails={gatherUserDetails} />
      <UserList userList={getUserDetails} />
    </div>
  );
}

export default App;
