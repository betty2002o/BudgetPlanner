import React, { useState } from "react";
import "./Modal.css";

export default function Modal({ mode, data, type, onClose, onSubmit }) {
  const categoryOptions = {
    "Daily Expense": [
      "Household",
      "Food",
      "Health Care",
      "Credit & Loan",
      "Personal",
      "Transportation",
      "Entertainment",
      "Other",
    ],
    Budget: ["Income", "Saving"],
    Bills: [
      "Household",
      "Food",
      "Health Care",
      "Credit & Loan",
      "Personal",
      "Transportation",
      "Entertainment",
      "Other",
    ],
  };

  const defaultData = {
    date: new Date().toISOString().split("T")[0],
    description: "",
    category: categoryOptions[type]?.[0] || "",
    amount: "",
    paid: false,
  };

  const [formData, setFormData] = useState(
    ["edit", "delete"].includes(mode.toLowerCase()) ? data : defaultData
  );

  const isDelete = mode.toLowerCase() === "delete";
  const isEdit = mode.toLowerCase() === "edit";

  const fields = {
    "Daily Expense": ["date", "description", "category", "amount"],
    Budget: ["date", "description", "category", "amount"],
    Bills: ["date", "description", "amount", "paid"],
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = () => {
    onSubmit({
      ...formData,
      _id: data?._id || null,
      mode,
      type,
    });
  };

  return (
    <div className="modal-backdrop">
      <div className="modal-content">
        <h3>
          {mode.toUpperCase()} {type}
        </h3>
        <div className="modal-form">
          {fields[type]?.map((field) => (
            <div key={field} className="modal-form-group">
              <label>{field.charAt(0).toUpperCase() + field.slice(1)}:</label>

              {field === "category" && categoryOptions[type] ? (
                <select
                  name="category"
                  value={formData.category}
                  onChange={handleChange}
                  disabled={isDelete}
                >
                  {categoryOptions[type]?.map((cat) => (
                    <option key={cat} value={cat}>
                      {cat}
                    </option>
                  ))}
                </select>
              ) : field === "paid" ? (
                <input
                  type="checkbox"
                  name="paid"
                  checked={formData.paid || false}
                  onChange={handleChange}
                  disabled={isDelete}
                />
              ) : field === "description" ? (
                <textarea
                  name="description"
                  value={formData.description || ""}
                  onChange={handleChange}
                  disabled={isDelete}
                  rows={3}
                  className="description-input"
                />
              ) : (
                <input
                  type={
                    field === "amount"
                      ? "number"
                      : field === "date"
                      ? "date"
                      : "text"
                  }
                  name={field}
                  value={formData[field] || ""}
                  onChange={handleChange}
                  disabled={isDelete}
                  {...(field === "amount" ? { min: 0 } : {})}
                />
              )}
            </div>
          ))}
        </div>

        <div className="modal-buttons">
          <button className="btn btn-sm btn-outline" onClick={onClose}>
            Close
          </button>
          <button className="btn btn-sm btn-outline" onClick={handleSubmit}>
            {isDelete ? "Confirm Delete" : isEdit ? "Save" : "Submit"}
          </button>
        </div>
      </div>
    </div>
  );
}
