import { createContext, useState, useEffect } from "react";
import axios from "axios";

// Create Context
export const ExpenseContext = createContext();

export function ExpenseProvider({ children }) {
  const [expenses, setExpenses] = useState([]);
  const API_URL = import.meta.env.VITE_API_URL || "";
  // Fetch data once when app loads
  useEffect(() => {
    axios
      .get(`${API_URL}/api/expenses`)
      .then((res) => setExpenses(res.data))
      .catch((err) => console.error(err));
  }, []);

  // Add expense
  const addExpense = async (newExpense) => {
    const res = await axios.post(`${API_URL}/api/expenses`, newExpense);
    setExpenses((prev) => [...prev, res.data]);
  };

  // Update expense
  const updateExpense = async (id, updatedData) => {
    const res = await axios.put(`${API_URL}/api/expenses/${id}`, updatedData);
    setExpenses((prev) =>
      prev.map((item) => (item._id === id ? res.data : item))
    );
  };

  // Delete expense
  const deleteExpense = async (id) => {
    await axios.delete(`${API_URL}/api/expenses/${id}`);
    setExpenses((prev) => prev.filter((item) => item._id !== id));
  };

  return (
    <ExpenseContext.Provider
      value={{ expenses, addExpense, deleteExpense, updateExpense }}
    >
      {children}
    </ExpenseContext.Provider>
  );
}
