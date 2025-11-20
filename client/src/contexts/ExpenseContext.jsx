import { createContext, useState, useEffect } from "react";
import axios from "axios";

// Create Context
export const ExpenseContext = createContext();

export function ExpenseProvider({ children }) {
  const [expenses, setExpenses] = useState([]);

  // Fetch data once when app loads
  useEffect(() => {
    axios
      .get("http://localhost:5000/api/expenses")
      .then((res) => setExpenses(res.data))
      .catch((err) => console.error(err));
  }, []);

  // Add expense
  //   const addExpense = async (newExpense) => {
  //     const res = await axios.post("http://localhost:5000/api/expenses", newExpense);
  //     setExpenses((prev) => [...prev, res.data]);
  //   };

  //   // Update expense
  //   const updateExpense = async (id, updatedData) => {
  //     const res = await axios.put(`http://localhost:5000/api/expenses/${id}`, updatedData);
  //     setExpenses((prev) => prev.map((item) =>
  //       item._id === id ? res.data : item
  //     ));
  //   };

  //   // Delete expense
  //   const deleteExpense = async (id) => {
  //     await axios.delete(`http://localhost:5000/api/expenses/${id}`);
  //     setExpenses((prev) => prev.filter((item) => item._id !== id));
  //   };

  return (
    <ExpenseContext.Provider value={{ expenses }}>
      {children}
    </ExpenseContext.Provider>
  );
}
