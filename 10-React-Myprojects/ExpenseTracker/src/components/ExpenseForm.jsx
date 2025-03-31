import { useState } from "react";

function ExpenseForm({expenses, setExpenses}) {
  // using states for all three inputs

  const [expenseName, setExpenseName] = useState("");
  const [amount, setAmount] = useState('');
  const [date, setDate] = useState('');


  function handleSubmit(e)
  {
    e.preventDefault();

    if(!expenseName || !amount)
    {
      alert("Please fill neccessary fields !!");
      return;
    }

    const newExpense = {
      id : Date.now(),
      expenseName,
      amount,
      date
    };

    setExpenses([...expenses, newExpense]);
     setExpenseName("");
     setAmount("");
     setDate("");
  }

  return (
    <div className="expense-form">
      <div className="expense-row">
        <div className="col">
          <h5>Expenses</h5>
          <input
            type="text"
            placeholder="Expenses"
            value={expenseName}
            onChange={(e) => setExpenseName(e.target.value)}
          />
        </div>
        <div className="col">
          <h5>
            Amount <i>(Negative - expenses, Positive - income)</i>
          </h5>
          <input
            type="number"
            placeholder="Amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
        </div>
        <div className="col">
          <h5>Date</h5>
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
        </div>
      </div>
      <button type="submit" onClick={handleSubmit}>
        Add Expense
      </button>
    </div>
  );
}
export default ExpenseForm;
