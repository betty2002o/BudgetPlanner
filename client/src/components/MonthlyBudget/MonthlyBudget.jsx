import React from "react";
import PageHeaderWithFilters from "../PageHeaderWithFilters/PageHeaderWithFilters";
import TrackerTable from "../TrackerTable/TrackerTable";

export default function MonthlyBudget({ type }) {
  const monthlyBudget = [
    {
      date: "2025-11-01",
      description: "Salary",
      category: "Income",
      amount: 3000,
    },
    {
      date: "2025-11-03",
      description: "Freelance Project",
      category: "Income",
      amount: 500,
    },
    {
      date: "2025-11-05",
      description: "Emergency Fund",
      category: "Saving",
      amount: 200,
    },
    {
      date: "2025-11-07",
      description: "Vacation Fund",
      category: "Saving",
      amount: 150,
    },
    {
      date: "2025-11-10",
      description: "Bonus",
      category: "Income",
      amount: 250,
    },
    {
      date: "2025-11-12",
      description: "Investment",
      category: "Saving",
      amount: 300,
    },
    {
      date: "2025-11-15",
      description: "Part-time Job",
      category: "Income",
      amount: 400,
    },
    {
      date: "2025-11-18",
      description: "Health Saving",
      category: "Saving",
      amount: 100,
    },
    {
      date: "2025-11-20",
      description: "Gift Received",
      category: "Income",
      amount: 120,
    },
    {
      date: "2025-11-25",
      description: "Retirement Fund",
      category: "Saving",
      amount: 250,
    },
  ];
  const columns = ["Date", "Description", "Category", "Amount"];
  return (
    <div>
      <PageHeaderWithFilters type={type} />
      <TrackerTable columns={columns} data={monthlyBudget} type={type} />
    </div>
  );
}
