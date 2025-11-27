import { createContext, useState, useEffect } from "react";
import axios from "axios";

// Create Context
export const BudgetContext = createContext();

export function BudgetProvider({ children }) {
  const [budgets, setBudgets] = useState([]);
  const API_URL = import.meta.env.VITE_API_URL || "";
  // Fetch data once when app loads
  useEffect(() => {
    axios
      .get(`${API_URL}/api/budgets`)
      .then((res) => setBudgets(res.data))
      .catch((err) => console.error(err));
  }, []);

  // Add expense
  const addBudget = async (newBudget) => {
    const res = await axios.post(`${API_URL}/api/budgets`, newBudget);
    setBudgets((prev) => [...prev, res.data]);
  };

  // Update expense
  const updateBudget = async (id, updatedData) => {
    const res = await axios.put(`${API_URL}/api/budgets/${id}`, updatedData);
    setBudgets((prev) =>
      prev.map((item) => (item._id === id ? res.data : item))
    );
  };

  // Delete expense
  const deleteBudget = async (id) => {
    await axios.delete(`${API_URL}/api/budgets/${id}`);
    setBudgets((prev) => prev.filter((item) => item._id !== id));
  };

  return (
    <BudgetContext.Provider
      value={{ budgets, addBudget, updateBudget, deleteBudget }}
    >
      deleteBudget
      {children}
    </BudgetContext.Provider>
  );
}
