import React from "react";
import RecentOverview from "../RecentOverview/RecentOverview";
import BudgetOverview from "../BudgetOverview/BudgetOverview";
import ExpenseOverview from "../ExpenseOverview/ExpenseOverview";

export default function Dashboard() {
  const now = new Date();
  const currentYear = now.getFullYear();

  const monthNames = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  const currentMonth = monthNames[now.getMonth()];

  return (
    <div>
      <RecentOverview />
      <BudgetOverview />
      <ExpenseOverview year={currentYear} month={currentMonth} />
    </div>
  );
}
