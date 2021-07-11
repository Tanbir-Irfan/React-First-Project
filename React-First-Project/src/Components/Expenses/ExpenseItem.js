import React from "react";
import ExpenseDate from "./ExpenseDate";
import ExpenseCard from "../UI/ExpenseCard";
import "./ExpenseItem.css";
const ExpenseItem = (props) => {
  return (
    <li>
      <ExpenseCard className="expense-item">
        <ExpenseDate date={props.date} />
        <div className="expense-item__description">
          <h2>{props.title}</h2>
          <div className="expense-item__price">${props.price}</div>
        </div>
      </ExpenseCard>
    </li>
  );
};
export default ExpenseItem;
