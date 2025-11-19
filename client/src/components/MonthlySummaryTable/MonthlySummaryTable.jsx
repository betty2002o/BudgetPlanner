import React from "react";
import "./MonthlySummaryTable.css";

export default function MonthlySummaryTable() {
  return (
    <div className="container">
      <div className="overview-table">
        <div className="pre-table-title d-flex">
          <span className="flex-grow text-left">
            <div className="pre-table-summary">Budget Review</div>
          </span>
        </div>

        <div className="monthly-summary-grid">
          <div className="monthly-summary-table-item">
            <div className="monthly-summary-item-label">
              Balance From Last Month
            </div>
            <div className="value">x</div>
          </div>

          <div className="monthly-summary-table-item">
            <div className="monthly-summary-item-label">Total Income</div>
            <div className="value">y</div>
          </div>

          <div className="monthly-summary-table-item">
            <div className="monthly-summary-item-label">Total Expense</div>
            <div className="value">z</div>
          </div>

          <div className="monthly-summary-table-item">
            <div className="monthly-summary-item-label">Difference</div>
            <div className="value">a</div>
          </div>

          <div className="monthly-summary-table-item">
            <div className="monthly-summary-item-label">Monthly Saving</div>
            <div className="value">b</div>
          </div>

          <div className="monthly-summary-table-item">
            <div className="monthly-summary-item-label">Balance Forward</div>
            <div className="value">c</div>
          </div>
        </div>
      </div>
    </div>
  );
}
