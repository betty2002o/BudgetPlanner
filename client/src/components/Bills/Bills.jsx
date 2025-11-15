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
    },
    { id: 2, date: "2025-01-10", description: "Water Bill", amount: 45.5 },
    { id: 3, date: "2025-01-15", description: "Internet Bill", amount: 60.0 },
    { id: 4, date: "2025-01-20", description: "Gas Bill", amount: 72.25 },
    {
      id: 5,
      date: "2025-01-25",
      description: "Trash Collection",
      amount: 30.0,
    },
    { id: 6, date: "2025-01-28", description: "Phone Bill", amount: 55.0 },
  ];

  const columns = ["Date", "Description", "Amount"];
  return (
    <div>
      <PageHeaderWithFilters Type={Type} />
      <TrackerTable columns={columns} data={bills} />
    </div>
  );
}
