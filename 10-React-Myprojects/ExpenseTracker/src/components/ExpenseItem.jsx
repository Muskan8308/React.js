import { GiCancel } from "react-icons/gi";

function ExpenseItem({ item, deleteExpense }) {
  return (
    <>
      <div
        key={item.id}
        className={`expense-item ${
          item.amount < 0 ? "red-border" : "green-border"
        }`}
      >
        <div className="expense-details">
          <span>
            <b>{item.expenseName}</b>
          </span>
          <span className="expense-amount">
            {item.amount < 0
              ? `- ₹${Math.abs(item.amount)}`
              : `₹${item.amount}`}
          </span>
          <span>
            <b>{item.date}</b>
          </span>
        </div>
        <button className="delete-btn" onClick={() => deleteExpense(item.id)}>
          <GiCancel />
        </button>
      </div>
    </>
  );
}

export default ExpenseItem;
