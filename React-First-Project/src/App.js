import React, {useState} from "react";
import Expenses from "./Components/Expenses/Expenses";
import NewExpense from "./Components/NewExpenses/NewExpense";
const INITIAL_EXPENSES = [
  {
    title: "Car Insurance",
    price: 12.67,
    date: new Date(2020, 3, 30),
    id: Math.random().toString()
  },
  {
    title: "Tv",
    price: 13.9,
    date: new Date(2019, 4, 12),
    id: Math.random().toString()
  },
  {
    title: "Toilet Tissue",
    price: 15.1,
    date: new Date(2022, 1, 23),
    id: Math.random().toString()
  },
  {
    title: "Computer",
    price: 37.55,
    date: new Date(2022, 8, 17),
    id: Math.random().toString()
  },
];
const App = () => {
  
  const [expenses, setExpenses] = useState(INITIAL_EXPENSES);
  const addExpenseHandler = (expenseData) => {
    setExpenses((prevExpense) => {
      return [expenseData, ...prevExpense]
    });
    console.log(expenses);
  };
  return (
    <div>
      <NewExpense onAddExpense ={addExpenseHandler} />
      <Expenses expenses={expenses} />
    </div>
  );
};

export default App;
