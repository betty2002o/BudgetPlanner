import { createContext, useState, useEffect } from "react";
import axios from "axios";

// Create Context
export const BillContext = createContext();

export function BillProvider({ children }) {
  // Base API URL (works in dev and production)
  const API_URL = import.meta.env.VITE_API_URL || "";

  const [bills, setBills] = useState([]);

  // Fetch all bills when component mounts
  useEffect(() => {
    const fetchBills = async () => {
      try {
        const res = await axios.get(`${API_URL}/api/bills`);
        setBills(res.data);
      } catch (err) {
        console.error("Failed to fetch bills:", err);
      }
    };

    fetchBills();
  }, [API_URL]);

  // Add a new bill
  const addBill = async (newBill) => {
    try {
      const res = await axios.post(`${API_URL}/api/bills`, newBill);
      setBills((prev) => [...prev, res.data]);
    } catch (err) {
      console.error("Failed to add bill:", err);
    }
  };

  // Update an existing bill
  const updateBill = async (id, updatedData) => {
    try {
      const res = await axios.put(`${API_URL}/api/bills/${id}`, updatedData);
      setBills((prev) =>
        prev.map((item) => (item._id === id ? res.data : item))
      );
    } catch (err) {
      console.error("Failed to update bill:", err);
    }
  };

  // Delete a bill
  const deleteBill = async (id) => {
    try {
      await axios.delete(`${API_URL}/api/bills/${id}`);
      setBills((prev) => prev.filter((item) => item._id !== id));
    } catch (err) {
      console.error("Failed to delete bill:", err);
    }
  };

  return (
    <BillContext.Provider value={{ bills, addBill, updateBill, deleteBill }}>
      {children}
    </BillContext.Provider>
  );
}
