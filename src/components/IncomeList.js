import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import IncomeTransaction from "./IncomeTransaction";

const IncomeList = () => {
  const { incomeTransactions } = useContext(GlobalContext);

  console.log(incomeTransactions);

  return (
    <div className="col-md-6">
      <div className="transactions transactions-income">
        <h2>Transaction History</h2>
        <ol className="transaction-list">
          {incomeTransactions.map((incomeTransaction) => (
            <IncomeTransaction
              key={incomeTransaction.id}
              incomeTransaction={incomeTransaction}
            />
          ))}
        </ol>
      </div>
    </div>
  );
};

export default IncomeList;
