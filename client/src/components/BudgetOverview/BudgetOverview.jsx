import React from "react";
import BudgetOverviewBar from "../BudgetOverviewBar/BudgetOverviewBar";
import BudgetOverviewTable from "../BudgetOverviewTable/BudgetOverviewTable";
export default function BudgetOverview() {
  return (
    <div className=" container d-flex-column overviews">
      <BudgetOverviewTable />
      <BudgetOverviewBar />
    </div>
  );
}
