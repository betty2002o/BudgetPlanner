import React from "react";
import RecentOverview from "../RecentOverview/RecentOverview";
import BudgetOverview from "../BudgetOverview/BudgetOverview";
import ExpenseOverview from "../ExpenseOverview/ExpenseOverview";

export default function Dashboard() {
  return (
    <div>
      <RecentOverview />
      <BudgetOverview />
      <ExpenseOverview />
    </div>
  );
}
