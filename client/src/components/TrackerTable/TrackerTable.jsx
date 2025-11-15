import React, { useContext } from "react";
import "./TrackerTable.css";
import { TodayContext } from "../../contexts/TodayContext";

export default function TrackerTable({ columns, data }) {
  const { today } = useContext(TodayContext);

  const month = today.toLocaleDateString("en-US", { month: "short" });
  const day = today.getDate();
  const weekday = today.toLocaleDateString("en-US", { weekday: "long" });
  const year = today.getFullYear();

  return (
    <div className="container">
      <div className="pre-table-title d-flex">
        <span className="flex-grow text-left">
          {`${month} ${day} ${weekday}, ${year}`}
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
            {/* <th>Date</th>
            <th>Description</th>
            <th>Category</th>
            <th>Amount</th>
            <th></th> */}
          </tr>
        </thead>
        <tbody>
          {/* {expenses.map((exp) => (
            <tr key={exp.id}>
              <td>{exp.date}</td>
              <td>{exp.description}</td>
              <td>{exp.category}</td>
              <td>${exp.amount.toFixed(2)}</td>
              <td className="add">+</td>
            </tr>
          ))} */}
          {data.map((row, index) => (
            <tr key={index}>
              {columns.map((col, i) => (
                <td key={i}>
                  {row[col.toLowerCase()] ?? ""} {/* match keys in row */}
                </td>
              ))}
              <td className="add">+</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
