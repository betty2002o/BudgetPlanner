import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import DailyExpense from "./components/DailyExpense/DailyExpense";
import Bill from "./components/Bills/Bills";
import MonthlyBudget from "./components/MonthlyBudget/MonthlyBudget";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <div className="body-wrapper">
        <Routes>
          <Route path="/" element={<h1>Dashboard</h1>} />
          <Route path="/monthly-summary" element={<h1>Monthly Summary</h1>} />
          <Route
            path="/daily-expense"
            element={<DailyExpense type="Daily Expense" />}
          />
          <Route
            path="/monthly-budget"
            element={<MonthlyBudget type="Budget" />}
          />
          <Route path="/bills" element={<Bill type="Bills" />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
