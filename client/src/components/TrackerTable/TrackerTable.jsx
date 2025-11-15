import React from "react";
import "./TrackerTable.css";

export default function TrackerTable({ columns, data, type }) {
  console.log("ty", type);
  let totalIncome = 0;
  let totalSaving = 0;
  let totalAmount = 0;
  if (type == "Budget") {
    totalIncome = data
      .filter((item) => item.category === "Income")
      .reduce((sum, item) => sum + item.amount, 0);
    totalSaving = data
      .filter((item) => item.category === "Saving")
      .reduce((sum, item) => sum + item.amount, 0);
    totalAmount = totalIncome - totalSaving;
  } else {
    totalAmount = data.reduce((sum, item) => sum + item.amount, 0);
  }
  return (
    <div className="container">
      <div className="pre-table-title d-flex">
        <span className="flex-grow text-left">
          {type == "Budget" ? (
            <span className="budget-summary">
              <div> Income: ${totalIncome.toFixed(2)}</div>
              <div>Saving: ${totalSaving.toFixed(2)} </div>
              <div> Budget: ${totalAmount.toFixed(2)}</div>
            </span>
          ) : (
            <span>Total: ${totalAmount.toFixed(2)}</span>
          )}
        </span>
        <span className="btn btn-sm  btn-outline ">Add</span>
      </div>
      <table className="table-products text-left">
        <thead>
          <tr key={columns.id}>
            {columns.map((col) => (
              <th key={col}>{col}</th>
            ))}
            <th></th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, idx) => (
            <tr key={idx}>
              {columns.map((col, i) => {
                if (col === "Paid")
                  return <td key={i}>{row.paid ? "Yes" : "No"}</td>;
                if (col === "Amount")
                  return <td key={i}>${row.amount.toFixed(2)}</td>;
                if (col === "Category")
                  return <td key={i}>{row.category ?? ""}</td>;
                if (col === "Description")
                  return <td key={i}>{row.description}</td>;
                if (col === "Date") return <td key={i}>{row.date}</td>;

                return <td key={i}>{row[col.toLowerCase()] ?? ""}</td>;
              })}
              <td className="add">+</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
