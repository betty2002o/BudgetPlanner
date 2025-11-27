import { useContext, useState, useEffect } from "react";
import { ExpenseContext } from "../../contexts/ExpenseContext";
import { BillContext } from "../../contexts/BillContext";
import "./ExpenseTable.css";

export default function ExpenseTable({ year, month }) {
  const { bills } = useContext(BillContext);
  const { expenses } = useContext(ExpenseContext);

  const labels = [
    "Household",
    "Food",
    "Health Care",
    "Credit & Loan",
    "Personal",
    "Transportation",
    "Entertainment",
    "Other",
  ];

  const [filteredExpenses, setFilteredExpenses] = useState([]);
  const [filteredBills, setFilteredBills] = useState([]);

  useEffect(() => {
    const monthStr = month ? month.toString().slice(0, 3) : "";
    if (!monthStr) return;

    const filterByDate = (items) =>
      items.filter((item) => {
        const date = new Date(item.date);
        const itemMonthStr = date.toLocaleString("en-US", { month: "short" });

        return date.getFullYear() === Number(year) && itemMonthStr === monthStr;
      });

    setFilteredExpenses(filterByDate(expenses));
    setFilteredBills(filterByDate(bills));
  }, [Number(year), month, expenses, bills]);

  const totalExpense = filteredExpenses.reduce(
    (sum, item) => sum + item.amount,
    0
  );
  const totalPaidBill = filteredBills
    .filter((b) => b.paid)
    .reduce((sum, b) => sum + b.amount, 0);
  const totalSpent = totalExpense + totalPaidBill;

  const getPercentage = (amount) =>
    totalSpent ? ((amount / totalSpent) * 100).toFixed(1) : 0;

  return (
    <div className="expense-table-graph">
      <table className="table-products expense-products text-left">
        <thead>
          <tr>
            <th>Category</th>
            <th>Amount</th>
            <th>%</th>
          </tr>
        </thead>
        <tbody>
          {filteredExpenses.length === 0 && filteredBills.length === 0 ? (
            <tr>
              <td colSpan={3} style={{ textAlign: "center" }}>
                No data for {month} {year}
              </td>
            </tr>
          ) : (
            labels.map((label, idx) => {
              const categoryTotal = filteredExpenses
                .filter((e) => e.category.toLowerCase() === label.toLowerCase())
                .reduce((sum, e) => sum + e.amount, 0);

              return (
                <tr key={idx}>
                  <td>{label}</td>
                  <td>${categoryTotal.toFixed(2)}</td>
                  <td>{getPercentage(categoryTotal)}%</td>
                </tr>
              );
            })
          )}
          {filteredBills.length > 0 && (
            <tr>
              <td>Paid Bills</td>
              <td>${totalPaidBill.toFixed(2)}</td>
              <td>{getPercentage(totalPaidBill)}%</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}
