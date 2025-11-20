import { useContext } from "react";
import { ExpenseContext } from "../../contexts/ExpenseContext";
import { BillContext } from "../../contexts/BillContext";
import "./OverviewTable.css";

export default function OverviewTable({ type }) {
  const { expenses } = useContext(ExpenseContext);
  const { bills } = useContext(BillContext);

  const typeMap = {
    expense: {
      data: expenses,
      columns: ["Description", "Amount"],
      title: "Latest Expense",
    },
    bills: {
      data: bills,
      columns: ["Description", "Amount", "Paid"],
      title: "Bills",
    },
  };

  const {
    data: rawData,
    columns,
    title,
  } = typeMap[type] || { data: [], columns: [], title: "" };

  const data = [...rawData]
    .sort((a, b) => new Date(b.date) - new Date(a.date))
    .slice(0, 5);

  const renderCell = (col, row) => {
    if (col === "Paid") return row.paid ? "Paid" : "Unpaid";
    if (col === "Amount") return `$${row.amount.toFixed(2)}`;
    return row[col.toLowerCase()] ?? "";
  };

  return (
    <div className="overview-table">
      <div className="pre-table-title d-flex">
        <span className="flex-grow text-left">
          <div className="pre-table-summary">{title}</div>
        </span>
        <span className="btn btn-sm btn-outline">All</span>
        <span className="btn btn-sm btn-outline">Add</span>
      </div>
      <div className="overview-items">
        {data.map((row, idx) => (
          <div key={idx} className="overview-item">
            {columns.map((col) => (
              <span key={col}>{renderCell(col, row)}</span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
