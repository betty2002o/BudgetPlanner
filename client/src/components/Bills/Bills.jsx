import React from "react";
import PageHeaderWithFilters from "../PageHeaderWithFilters/PageHeaderWithFilters";
import TrackerTable from "../TrackerTable/TrackerTable";
export default function Bill({ Type }) {
  const bills = [
    {
      id: 1,
      date: "2025-01-05",
      description: "Electricity Bill",
      amount: 88.0,
      paid: true,
    },
    {
      id: 2,
      date: "2025-01-10",
      description: "Water Bill",
      amount: 45.5,
      paid: false,
    },
    {
      id: 3,
      date: "2025-01-15",
      description: "Internet Bill",
      amount: 60.0,
      paid: true,
    },
    {
      id: 4,
      date: "2025-01-20",
      description: "Gas Bill",
      amount: 72.25,
      paid: false,
    },
    {
      id: 5,
      date: "2025-01-25",
      description: "Trash Collection",
      amount: 30.0,
      paid: true,
    },
    {
      id: 6,
      date: "2025-01-28",
      description: "Phone Bill",
      amount: 55.0,
      paid: false,
    },
  ];

  const columns = ["Date", "Description", "Amount", "Paid"];
  return (
    <div>
      <PageHeaderWithFilters Type={Type} />
      <TrackerTable columns={columns} data={bills} Type={Type} />
    </div>
  );
}
