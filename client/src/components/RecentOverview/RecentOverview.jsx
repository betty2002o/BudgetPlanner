import React from "react";
import OverviewTable from "../OverviewTable/OverviewTable";
import "./RecentOverview.css";
export default function RecentOverview() {
  const currentYear = new Date().getFullYear();
  const currentMonth = new Date().toLocaleString("en-US", { month: "short" });
  return (
    <div className=" container d-flex overviews">
      <OverviewTable
        type="Daily Expense"
        year={currentYear}
        month={currentMonth}
      />
      <OverviewTable type="Bills" year={currentYear} month={currentMonth} />
    </div>
  );
}
