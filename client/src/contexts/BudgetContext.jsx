import { createContext, useState, useEffect } from "react";
import axios from "axios";

// Create Context
export const BudgetContext = createContext();

export function BudgetProvider({ children }) {
  const [budgets, setBudgets] = useState([]);

  // Fetch data once when app loads
  useEffect(() => {
    axios
      .get("http://localhost:5000/api/budgets")
      .then((res) => setBudgets(res.data))
      .catch((err) => console.error(err));
  }, []);

  // Add expense
  const addBudget = async (newBudget) => {
    const res = await axios.post(
      "http://localhost:5000/api/budgets",
      newBudget
    );
    setBudgets((prev) => [...prev, res.data]);
  };

  // Update expense
  const updateBudget = async (id, updatedData) => {
    const res = await axios.put(
      `http://localhost:5000/api/budgets/${id}`,
      updatedData
    );
    setBudgets((prev) =>
      prev.map((item) => (item._id === id ? res.data : item))
    );
  };

  // Delete expense
  const deleteBudget = async (id) => {
    await axios.delete(`http://localhost:5000/api/budgets/${id}`);
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
