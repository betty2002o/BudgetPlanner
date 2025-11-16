import React from "react";
import "./OverviewTable.css";

export default function OverviewTable({ type, data }) {
  const columnMap = {
    expense: ["Description", "Amount"],
    bills: ["Description", "Amount", "Paid"],
  };

  return (
    <div className="overview-table">
      <div className="pre-table-title d-flex">
        <span className="flex-grow text-left">
          <div className="pre-table-summary">
            {type == "expense" ? "Latest Expense" : "Bills"}
          </div>
        </span>
        <span className="btn btn-sm  btn-outline ">All</span>
        <span className="btn btn-sm  btn-outline ">Add</span>
      </div>
      <div className="overview-items">
        {data.map((d, index) => (
          <div key={index} className="overview-item">
            {columnMap[type].map((col) => {
              const key = col.toLowerCase();
              return (
                <span key={col}>
                  {key === "paid" ? (d[key] ? "Paid" : "Unpaid") : d[key]}
                </span>
              );
            })}
          </div>
        ))}
      </div>
    </div>
  );
}
