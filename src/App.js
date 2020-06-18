import React from "react";
import Header from "./components/Header";
import Balance from "./components/Balance";
import IncomeList from "./components/IncomeList";
import ExpenseList from "./components/ExpenseList";
import AddTransaction from "./components/AddTransaction";
import { GlobalContextProvider } from "./context/GlobalState";
import "./App.css";

const App = () => {
  return (
    <div>
      <div className="section">
        <GlobalContextProvider>
          <div className="row">
            <div className="col-lg-4">
              <Header />
              <Balance />
            </div>
            <div className="col-lg-8">
              <AddTransaction />
              <div className="row">
                <IncomeList />
                <ExpenseList />
              </div>
            </div>
          </div>
        </GlobalContextProvider>
      </div>
    </div>
  );
};

export default App;
