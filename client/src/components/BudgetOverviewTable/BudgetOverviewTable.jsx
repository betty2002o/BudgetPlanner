import React from "react";
import "./BudgetOverviewTable.css";

export default function BudgetOverviewTable() {
  return (
    <div className="overview-table">
      <div className="pre-table-title d-flex">
        <span className="flex-grow text-left">
          <div className="pre-table-summary">Budget</div>
        </span>
      </div>
      <div className="budget-grid">
        <div class="budget-grid-item">Income</div>
        <div class="budget-grid-item">Saving</div>
        <div class="budget-grid-item">Budget</div>
        <div class="budget-grid-item">2231</div>
        <div class="budget-grid-item">444231</div>
        <div class="budget-grid-item">213123</div>
      </div>
    </div>
  );
}
