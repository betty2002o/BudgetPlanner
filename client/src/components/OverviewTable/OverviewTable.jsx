import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { ExpenseContext } from "../../contexts/ExpenseContext";
import { BillContext } from "../../contexts/BillContext";
import Modal from "../Modal/Modal";
import "./OverviewTable.css";

export default function OverviewTable({ type, year, month }) {
  const { expenses, addExpense } = useContext(ExpenseContext);
  const { bills, addBill } = useContext(BillContext);

  const [modalOpen, setModalOpen] = useState(false);

  const handleAdd = () => {
    setModalOpen(true);
  };

  const typeMap = {
    "Daily Expense": {
      data: expenses,
      columns: ["Description", "Amount"],
      title: "Latest Expense",
      allLink: "/daily-expense",
      type: "Daily Expense",
    },
    Bills: {
      data: bills,
      columns: ["Description", "Amount", "Paid"],
      title: "Bills",
      allLink: "/monthly-budget",
      type: "Bills",
    },
  };

  const {
    data: rawData,
    columns,
    title,
    allLink,
  } = typeMap[type] || {
    data: [],
    columns: [],
    title: "",
    allLink: "",
    type: "",
  };
  const monthNames = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  const data = rawData
    .filter((item) => {
      const [yearStr, monthStr] = item.date.split("-");
      const itemYear = Number(yearStr);
      const itemMonth = monthNames[Number(monthStr) - 1];

      return itemYear === year && itemMonth === month;
    })
    .sort((a, b) => new Date(b.date) - new Date(a.date))
    .slice(0, 5);

  const renderCell = (col, row) => {
    if (col === "Paid") return row.paid ? "Paid" : "Unpaid";
    if (col === "Amount") return `$${row.amount.toFixed(2)}`;
    return row[col.toLowerCase()] ?? "";
  };

  function addItem(item) {
    if (type == "Daily Expense") {
      addExpense(item);
    }
    if (type == "Bills") addBill(item);
  }

  return (
    <div className="overview-table">
      <div className="pre-table-title d-flex">
        <span className="flex-grow text-left">
          <div className="pre-table-summary">{title}</div>
        </span>
        <Link to={allLink} className="btn btn-sm btn-outline">
          All
        </Link>
        <span className="btn btn-sm btn-outline" onClick={handleAdd}>
          Add
        </span>
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
      {modalOpen && (
        <Modal
          mode="add"
          type={type}
          onClose={() => setModalOpen(false)}
          onSubmit={(formValues) => {
            addItem(formValues);
            setModalOpen(false);
          }}
        />
      )}
    </div>
  );
}
