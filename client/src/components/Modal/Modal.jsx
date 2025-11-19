// import React, { useState, useEffect } from "react";
// import "./Modal.css"; // for styling the overlay and modal

// export default function Modal({
//   isOpen,
//   mode,
//   table,
//   initialData = {},
//   onClose,
//   onSubmit,
// }) {
//   const [formData, setFormData] = useState({
//     date: "",
//     description: "",
//     category: "",
//     amount: "",
//     paid: false,
//   });

//   // Pre-fill data in edit mode
//   useEffect(() => {
//     if (mode === "edit" && initialData) {
//       setFormData({ ...formData, ...initialData });
//     }
//   }, [mode, initialData]);

//   if (!isOpen) return null; // Don't render if modal is closed

//   const handleChange = (e) => {
//     const { name, value, type, checked } = e.target;
//     setFormData({
//       ...formData,
//       [name]: type === "checkbox" ? checked : value,
//     });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     onSubmit(formData); // Pass form data back to parent
//     onClose(); // Close modal
//   };

//   const renderFields = () => {
//     switch (table) {
//       case "expense":
//       case "budget":
//         return (
//           <>
//             <label>Date</label>
//             <input
//               type="date"
//               name="date"
//               value={formData.date}
//               onChange={handleChange}
//             />

//             <label>Description</label>
//             <input
//               type="text"
//               name="description"
//               value={formData.description}
//               onChange={handleChange}
//             />

//             <label>Category</label>
//             <input
//               type="text"
//               name="category"
//               value={formData.category}
//               onChange={handleChange}
//             />

//             <label>Amount</label>
//             <input
//               type="number"
//               name="amount"
//               value={formData.amount}
//               onChange={handleChange}
//             />
//           </>
//         );
//       case "bills":
//         return (
//           <>
//             <label>Date</label>
//             <input
//               type="date"
//               name="date"
//               value={formData.date}
//               onChange={handleChange}
//             />

//             <label>Description</label>
//             <input
//               type="text"
//               name="description"
//               value={formData.description}
//               onChange={handleChange}
//             />

//             <label>Amount</label>
//             <input
//               type="number"
//               name="amount"
//               value={formData.amount}
//               onChange={handleChange}
//             />

//             <label>Paid</label>
//             <input
//               type="checkbox"
//               name="paid"
//               checked={formData.paid}
//               onChange={handleChange}
//             />
//           </>
//         );
//       default:
//         return null;
//     }
//   };

//   return (
//     <div className="modal-overlay">
//       <div className="modal">
//         <h2>
//           {mode === "add"
//             ? `Add ${table}`
//             : mode === "edit"
//             ? `Edit ${table}`
//             : `Delete ${table}`}
//         </h2>
//         {mode === "delete" ? (
//           <>
//             <p>Are you sure you want to delete this {table}?</p>
//             <div className="modal-buttons">
//               <button
//                 onClick={() => {
//                   onSubmit(initialData);
//                   onClose();
//                 }}
//               >
//                 Yes, Delete
//               </button>
//               <button onClick={onClose}>Cancel</button>
//             </div>
//           </>
//         ) : (
//           <form onSubmit={handleSubmit} className="modal-form">
//             {renderFields()}
//             <div className="modal-buttons">
//               <button type="submit">{mode === "add" ? "Add" : "Save"}</button>
//               <button type="button" onClick={onClose}>
//                 Cancel
//               </button>
//             </div>
//           </form>
//         )}
//       </div>
//     </div>
//   );
// }
// src/Modal/Modal.jsx
import React from "react";
import "./Modal.css";

export default function Modal({ mode, data, type, onClose, onSubmit }) {
  return (
    <div className="modal-backdrop">
      <div className="modal-content">
        <h2>
          {mode.toUpperCase()} {type}
        </h2>
        {/* Simple example: show data if editing/deleting */}
        {data && <pre>{JSON.stringify(data, null, 2)}</pre>}

        <button onClick={() => onSubmit({ dummy: "data" })}>Submit</button>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
}
