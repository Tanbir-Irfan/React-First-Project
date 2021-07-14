import React from "react";
import User from "./User";
import styles from  './UserList.module.css'
import Card from '../../UI/Card/Card'
const UserList = (props) => {
  return (
    <Card className={styles['user-list']}>
    <ul>
      {props.userList.map((user) => {
        return (
          <User key={user.id}>
            Name: {user.username} and Age: {user.age}
          </User>
        );
      })}
    </ul>
    </Card>
  );
};
export default UserList;
