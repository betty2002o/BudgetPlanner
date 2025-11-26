import React from "react";
import RecentOverview from "../RecentOverview/RecentOverview";
import BudgetOverview from "../BudgetOverview/BudgetOverview";
import ExpenseOverview from "../ExpenseOverview/ExpenseOverview";

export default function Dashboard() {
  const currentYear = new Date().getFullYear();
  const currentMonth = new Date().toLocaleString("en-US", { month: "short" });
  return (
    <div>
      <RecentOverview />
      <BudgetOverview />
      <ExpenseOverview year={currentYear} month={currentMonth} />
    </div>
  );
}
