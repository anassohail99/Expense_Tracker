import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import ExpenseTransaction from "./ExpenseTransaction";

const ExpenseList = () => {
  const { expenseTransactions } = useContext(GlobalContext);

  console.log(expenseTransactions);

  return (
    <div className="col-md-6">
      <div className="transactions transactions-expense">
        <h2>Transaction History</h2>
        <ol className="transaction-list">
          {expenseTransactions.map((expenseTransaction) => (
            <ExpenseTransaction
              key={expenseTransaction.id}
              expenseTransaction={expenseTransaction}
            />
          ))}
        </ol>
      </div>
    </div>
  );
};

export default ExpenseList;
