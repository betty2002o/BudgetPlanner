import { createContext, useState, useEffect } from "react";
import axios from "axios";

// Create Context
export const BillContext = createContext();

export function BillProvider({ children }) {
  const [bills, setBills] = useState([]);

  // Fetch data once when app loads
  useEffect(() => {
    axios
      .get("http://localhost:5000/api/bills")
      .then((res) => setBills(res.data))
      .catch((err) => console.error(err));
  }, []);

  const addBill = async (newBill) => {
    const res = await axios.post("http://localhost:5000/api/bills", newBill);
    setBills((prev) => [...prev, res.data]);
  };

  const updateBill = async (id, updatedData) => {
    const res = await axios.put(
      `http://localhost:5000/api/bills/${id}`,
      updatedData
    );
    setBills((prev) => prev.map((item) => (item._id === id ? res.data : item)));
  };

  const deleteBill = async (id) => {
    await axios.delete(`http://localhost:5000/api/bills/${id}`);
    setBills((prev) => prev.filter((item) => item._id !== id));
  };

  return (
    <BillContext.Provider value={{ bills, addBill, updateBill, deleteBill }}>
      {children}
    </BillContext.Provider>
  );
}
