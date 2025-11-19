import React from "react";
import PageHeaderWithFilters from "../PageHeaderWithFilters/PageHeaderWithFilters";
import MonthlySummaryTable from "../MonthlySummaryTable/MonthlySummaryTable";
import ExpenseOverview from "../ExpenseOverview/ExpenseOverview";
export default function MonthlySummary() {
  return (
    <div>
      <PageHeaderWithFilters type={"Monthly Summary"} />
      <MonthlySummaryTable />
      <ExpenseOverview />
    </div>
  );
}
