import React from "react";
import OverviewTable from "../OverviewTable/OverviewTable";
import "./RecentOverview.css";
export default function RecentOverview() {
  const expenseData = [
    { date: "2025-01-12", description: "Coffee at Starbucks", amount: 5.75 },
    { date: "2025-01-12", description: "Groceries - Walmart", amount: 42.1 },
    { date: "2025-01-13", description: "Uber to work", amount: 12.5 },
    { date: "2025-01-14", description: "Lunch - Sushi Bento", amount: 16.9 },
    { date: "2025-01-15", description: "Gym smoothie", amount: 7.25 },
  ];
  const billsData = [
    {
      date: "2025-01-05",
      description: "Electricity Bill",
      amount: 88.0,
      paid: true,
    },
    {
      date: "2025-01-10",
      description: "Water Bill",
      amount: 45.5,
      paid: false,
    },
    {
      date: "2025-01-15",
      description: "Internet Bill",
      amount: 60.0,
      paid: true,
    },
    {
      date: "2025-01-20",
      description: "Gas Bill",
      amount: 72.25,
      paid: false,
    },
    {
      date: "2025-01-25",
      description: "Trash Collection",
      amount: 30.0,
      paid: true,
    },
  ];

  return (
    <div className=" container d-flex overviews">
      <OverviewTable type={"expense"} data={expenseData} />
      <OverviewTable type={"bills"} data={billsData} />
    </div>
  );
}
