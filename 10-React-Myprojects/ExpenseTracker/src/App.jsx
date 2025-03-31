import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import Header from "./components/Header";
import ExpenseForm from "./components/ExpenseForm";
import ExpenseList from "./components/ExpenseList.jsx";

function App() {
  const [expenses, setExpenses] = useState([]);

  // To find the total balance 

  const totalbalance = new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    minimumFractionDigits: 2,
  }).format(
    expenses.reduce((total, expense) => {
      return Math.abs(total + Number(expense.amount));
    }, 0)
  ); 

  // To delete expenses
  const deleteExpense = (expense) => {
    const newExpense = expenses.filter((item) => item.id != expense);
    setExpenses(newExpense);
  };

  return (
    <>
      <center>
        <Header totalbalance={totalbalance}></Header>
        <ExpenseForm
          expenses={expenses}
          setExpenses={setExpenses}
        ></ExpenseForm>
        <ExpenseList
          expenses={expenses}
          deleteExpense={deleteExpense}
        ></ExpenseList>
      </center>
    </>
  );
}

export default App;
