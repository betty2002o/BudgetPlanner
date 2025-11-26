import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import DailyExpense from "./components/DailyExpense/DailyExpense";
import Bill from "./components/Bills/Bills";
import Dashboard from "./components/Dashboard/Dashboard";
import MonthlyBudget from "./components/MonthlyBudget/MonthlyBudget";
import MonthlySummary from "./components/MonthlySummary/MonthlySummary";
import Documentation from "./components/Documentation/Documentation";
import FinanceProvider from "./contexts/FinanceProvider";

function App() {
  return (
    <FinanceProvider>
      <BrowserRouter>
        <Navbar />
        <div className="body-wrapper">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/monthly-summary" element={<MonthlySummary />} />
            <Route
              path="/monthly-budget"
              element={<MonthlyBudget type="Budget" />}
            />
            <Route path="/bills" element={<Bill type="Bills" />} />
            <Route
              path="/daily-expense"
              element={<DailyExpense type="Daily Expense" />}
            />
            <Route path="/documentation" element={<Documentation />} />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </FinanceProvider>
  );
}

export default App;
