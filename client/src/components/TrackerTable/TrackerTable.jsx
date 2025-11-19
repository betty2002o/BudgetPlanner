import { useState } from "react";
import "./TrackerTable.css";
import Modal from "../Modal/Modal";

export default function TrackerTable({ columns, data, type }) {
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

  switch (type) {
    case "Daily Expense":
      totalAmount = data.reduce((sum, item) => sum + item.amount, 0);
      break;

    case "Budget":
      totalIncome = data
        .filter((item) => item.category === "Income")
        .reduce((sum, item) => sum + item.amount, 0);
      totalSaving = data
        .filter((item) => item.category === "Saving")
        .reduce((sum, item) => sum + item.amount, 0);
      totalAmount = totalIncome - totalSaving;
      break;

    case "Bills":
      totalAmount = data.reduce((sum, item) => sum + item.amount, 0);
      totalOwed =
        totalAmount -
        data
          .filter((item) => item.paid)
          .reduce((sum, item) => sum + item.amount, 0);
      break;

    default:
      break;
  }
  return (
    <div className="container">
      <div className="pre-table-title d-flex">
        <span className="flex-grow text-left">
          <div className="pre-table-summary">
            {(() => {
              switch (type) {
                case "Daily Expense":
                  return <div>Total: ${totalAmount.toFixed(2)}</div>;
                case "Budget":
                  return (
                    <>
                      <div>Income: ${totalIncome.toFixed(2)}</div>
                      <div>Saving: ${totalSaving.toFixed(2)}</div>
                      <div>Budget: ${totalAmount.toFixed(2)}</div>
                    </>
                  );
                case "Bills":
                  return (
                    <>
                      <div>Total: ${totalAmount.toFixed(2)}</div>
                      <div>Owed: ${totalOwed.toFixed(2)}</div>
                    </>
                  );
                default:
                  return <div>1234</div>;
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
