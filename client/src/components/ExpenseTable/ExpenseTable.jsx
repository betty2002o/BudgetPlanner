import React from "react";
import "./ExpenseTable.css";
export default function ExpenseTable() {
  return (
    <div className="expense-table-graph ">
      <table className="table-products expense-products text-left">
        <thead>
          <tr>
            <th>Category</th>
            <th>Amount</th>
            <th>%</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Food</td>
            <td>$50</td>
            <td>10</td>
          </tr>
          <tr>
            <td>Food</td>
            <td>$50</td>
            <td>10</td>
          </tr>
          <tr>
            <td>Food</td>
            <td>$50</td>
            <td>10</td>
          </tr>
          <tr>
            <td>Food</td>
            <td>$50</td>
            <td>10</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
