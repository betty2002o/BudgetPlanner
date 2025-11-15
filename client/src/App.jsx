import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import DailyExpense from "./components/DailyExpense/DailyExpense";
import Bill from "./components/Bills/Bills";
import { TodayProvider } from "./contexts/TodayContext";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <div className="body-wrapper">
        <TodayProvider>
          <Routes>
            <Route path="/" element={<h1>Dashboard</h1>} />
            <Route path="/monthly-summary" element={<h1>Monthly Summary</h1>} />
            <Route
              path="/daily-expense"
              element={<DailyExpense Type="Daily Expense" />}
            />
            <Route path="/monthly-budget" element={<h1>Monthly Budget</h1>} />
            <Route path="/bills" element={<Bill Type="Bills" />} />
          </Routes>
        </TodayProvider>
      </div>
    </BrowserRouter>
  );
}

export default App;
