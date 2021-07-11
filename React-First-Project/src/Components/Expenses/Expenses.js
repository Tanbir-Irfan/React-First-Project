import React, { useState } from "react";
import ExpensesList from "./ExpensesList";
import ExpenseCard from "../UI/ExpenseCard";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesChart from './ExpensesChart';
import "./Expenses.css";
const Expenses = (props) => {
  const [filterYear, setFilterYear] = useState("2019");
  const filterChangeHandler = (selectedYear) => {
    setFilterYear(selectedYear);
  };
  const filteredExpenses = props.expenses.filter((expense) => {
    return expense.date.getFullYear().toString() === filterYear;
  });

  return (
    <div>
      <ExpenseCard className="expenses">
        <ExpensesFilter
          selectedYear={filterYear}
          onFilterChange={filterChangeHandler}
        />
        <ExpensesChart expenses={filteredExpenses}/>
        <ExpensesList items={filteredExpenses}/>
      </ExpenseCard>
    </div>
  );
};
export default Expenses;
