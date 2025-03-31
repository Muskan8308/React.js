import ExpenseItem from './ExpenseItem';

function ExpenseList({ expenses, deleteExpense }) {

  const expenseList = expenses.filter(item => item.amount < 0);
  const incomeList = expenses.filter((item) => item.amount > 0);


  return (
    <>
      <div>
        {/* Expense section */}
        <h4 className="heading">Expenses</h4>
        {expenseList.map((item) => (
          <ExpenseItem
            key={item.id}
            item={item}
            deleteExpense={deleteExpense}
          />
        ))}

        {/* Income section */}
        <h4 className="heading">Incomes</h4>
        {incomeList.map((item) => (
          <ExpenseItem
            key={item.id}
            item={item}
            deleteExpense={deleteExpense}
          />
        ))}
      </div>
    </>
  );
}

export default ExpenseList;
