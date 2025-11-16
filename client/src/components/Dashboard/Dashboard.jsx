import React from "react";
import RecentOverview from "../RecentOverview/RecentOverview";
import BudgetOverview from "../BudgetOverview/BudgetOverview";

export default function Dashboard() {
  return (
    <div>
      <RecentOverview />
      <BudgetOverview />
    </div>
  );
}
