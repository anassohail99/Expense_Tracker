import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

const ExpenseTransaction = ({ expenseTransaction }) => {
  const { deleteTransaction } = useContext(GlobalContext);

  return (
    <li className="transaction transactions-expense">
      <span className="transaction-text">{expenseTransaction.expenseText}</span>
      <span className="transaction-amount">
        Rs{expenseTransaction.expenseAmount}
      </span>
      <button
        onClick={() => deleteTransaction(expenseTransaction.id)}
        className="delete-btn"
      >
        <i className="fas fa-trash"></i>
      </button>
    </li>
  );
};

export default ExpenseTransaction;
