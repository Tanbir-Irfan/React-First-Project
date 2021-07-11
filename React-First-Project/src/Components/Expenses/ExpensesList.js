import React from "react";
import ExpenseItem from "./ExpenseItem";
import "./ExpensesList.css";
const ExpensesList = (prop) => {
  if (prop.items.length === 0) {
    return <h2 className="expenses-list__fallback">No Expenses Found!!!</h2>;
  }
  return (
    <ul className="expenses-list">
      {prop.items.map((item) => {
        return (
          <ExpenseItem
            key={item.id}
            title={item.title}
            date={item.date}
            price={item.price}
          />
        );
      })}
    </ul>
  );
};

export default ExpensesList;
