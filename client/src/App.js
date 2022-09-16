import React, { Component } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Registration from "./Registration";
import SignIn from "./SignIn";
import LandingPage from "./LandingPage";
import Profile from "./Profile";
import EditedProfile from "./EditedProfile";
import "tailwindcss/tailwind.css";
import Transaction from "./Transactions/Transaction";
import TransactionWithdraw from "./Transactions/TransactionWithdraw";
import TransactionSendMoney from "./Transactions/TransactionSendMoney";
import Settings from "./Settings";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/Register" element={<Registration />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/EditedProfile" element={<EditedProfile />} />
          <Route path="/transaction" element={<Transaction />} />
          <Route
            path="/transactionwithdraw"
            element={<TransactionWithdraw />}
          />
          <Route path="/sendmoney" element={<TransactionSendMoney />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
