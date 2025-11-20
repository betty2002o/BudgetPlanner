import React from "react";
import PageHeaderWithFilters from "../PageHeaderWithFilters/PageHeaderWithFilters";
import TrackerTable from "../TrackerTable/TrackerTable";
export default function Bill({ type }) {
  const columns = ["Date", "Description", "Amount", "Paid"];
  return (
    <div>
      <PageHeaderWithFilters type={type} />
      <TrackerTable columns={columns} type={type} />
    </div>
  );
}
