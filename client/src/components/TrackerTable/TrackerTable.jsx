import { useState, useContext } from "react";
import { ExpenseContext } from "../../contexts/ExpenseContext";
import { BillContext } from "../../contexts/BillContext";
import { BudgetContext } from "../../contexts/BudgetContext";
import "./TrackerTable.css";
import Modal from "../Modal/Modal";

export default function TrackerTable({ columns, type }) {
  const { expenses } = useContext(ExpenseContext);
  const { budgets } = useContext(BudgetContext);
  const { bills } = useContext(BillContext);

  const getDataByType = (type) => {
    switch (type) {
      case "Daily Expense":
        return expenses;
      case "Budget":
        return budgets;
      case "Bills":
        return bills;
      default:
        return [];
    }
  };
  const data = getDataByType(type);

  const [modalOpen, setModalOpen] = useState(false);
  const [modalMode, setModalMode] = useState("");
  const [modalData, setModalData] = useState(null);

  const handleAdd = () => {
    setModalMode("add");
    setModalData(null);
    setModalOpen(true);
  };

  const handleEdit = (row) => {
    setModalMode("edit");
    setModalData(row);
    setModalOpen(true);
  };

  const handleDelete = (row) => {
    setModalMode("delete");
    setModalData(row);
    setModalOpen(true);
  };

  let totalIncome = 0;
  let totalSaving = 0;
  let totalAmount = 0;
  let totalOwed = 0;

  const totals = (() => {
    let totalIncome = 0,
      totalSaving = 0,
      totalAmount = 0,
      totalOwed = 0;

    if (type === "Daily Expense") {
      totalAmount = data.reduce((sum, item) => sum + item.amount, 0);
    } else if (type === "Budget") {
      totalIncome = data
        .filter((i) => i.category === "Income")
        .reduce((sum, i) => sum + i.amount, 0);
      totalSaving = data
        .filter((i) => i.category === "Saving")
        .reduce((sum, i) => sum + i.amount, 0);
      totalAmount = totalIncome - totalSaving;
    } else if (type === "Bills") {
      totalAmount = data.reduce((sum, i) => sum + i.amount, 0);
      totalOwed =
        totalAmount -
        data.filter((i) => i.paid).reduce((sum, i) => sum + i.amount, 0);
    }

    return { totalIncome, totalSaving, totalAmount, totalOwed };
  })();

  const renderCell = (col, row, type) => {
    if (col === "Paid" && type !== "Bills") return "";

    switch (col) {
      case "Paid":
        return row.paid ? "Yes" : "No";
      case "Amount":
        return `$${row.amount.toFixed(2)}`;
      case "Category":
        return row.category ?? "";
      case "Description":
        return row.description;
      case "Date":
        return row.date;
      default:
        return row[col.toLowerCase()] ?? "";
    }
  };
  return (
    <div className="container">
      <div className="pre-table-title d-flex">
        <span className="flex-grow text-left">
          <div className="pre-table-summary">
            {(() => {
              switch (type) {
                case "Daily Expense":
                  return <div>Total: ${totals.totalAmount.toFixed(2)}</div>;
                case "Budget":
                  return (
                    <>
                      <div>Income: ${totals.totalIncome.toFixed(2)}</div>
                      <div>Saving: ${totals.totalSaving.toFixed(2)}</div>
                      <div>Budget: ${totals.totalAmount.toFixed(2)}</div>
                    </>
                  );
                case "Bills":
                  return (
                    <>
                      <div>Total: ${totals.totalAmount.toFixed(2)}</div>
                      <div>Owed: ${totals.totalOwed.toFixed(2)}</div>
                    </>
                  );
                default:
                  return <div></div>;
              }
            })()}
          </div>
        </span>
        <span className="btn btn-sm  btn-outline " onClick={handleAdd}>
          Add
        </span>
      </div>
      <table className="table-products tracker-products text-left">
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
              {columns.map((col, i) => (
                <td key={i}>{renderCell(col, row, type)}</td>
              ))}
              <td className="actions">
                <div onClick={() => handleEdit(row)} className="edit">
                  +
                </div>
                <div onClick={() => handleDelete(row)} className="delete">
                  -
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {modalOpen && (
        <Modal
          mode={modalMode} // "add", "edit", "delete"
          data={modalData} // row data for edit/delete
          type={type} // table type if needed
          onClose={() => setModalOpen(false)}
          onSubmit={(updatedData) => {
            console.log("Modal submitted:", updatedData);
            setModalOpen(false);
          }}
        />
      )}
    </div>
  );
}
