import React from "react";
import PageHeaderWithFilters from "../PageHeaderWithFilters/PageHeaderWithFilters";
import TrackerTable from "../TrackerTable/TrackerTable";
export default function DailyExpense({ Type }) {
  const columns = ["Date", "Description", "Category", "Amount"];
  const expenses = [
    {
      date: "2025-01-12",
      description: "Coffee",
      category: "Food",
      amount: 5.75,
    },
    {
      date: "2025-01-12",
      description: "Groceries",
      category: "Supermarket",
      amount: 42.1,
    },
    {
      date: "2025-01-13",
      description: "Uber",
      category: "Transport",
      amount: 12.5,
    },
  ];
  return (
    <div>
      <PageHeaderWithFilters Type={Type} />
      <TrackerTable columns={columns} data={expenses} />
    </div>
  );
}
