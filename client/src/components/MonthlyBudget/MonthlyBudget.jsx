import React from "react";
import PageHeaderWithFilters from "../PageHeaderWithFilters/PageHeaderWithFilters";
import TrackerTable from "../TrackerTable/TrackerTable";

export default function MonthlyBudget({ type }) {
  const columns = ["Date", "Description", "Category", "Amount"];
  return (
    <div>
      <PageHeaderWithFilters type={type} />
      <TrackerTable columns={columns} type={type} />
    </div>
  );
}
