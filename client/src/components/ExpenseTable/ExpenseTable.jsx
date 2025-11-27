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
    if (!month || !year) return;

    const monthIndex = new Date(`${month} 1, 2000`).getMonth() + 1;
    const monthStr = monthIndex.toString().padStart(2, "0"); // "11"

    const filterByDate = (items) =>
      items.filter((item) => {
        if (!item.date) return false;
        const [itemYear, itemMonth] = item.date.split("-");
        return itemYear === year.toString() && itemMonth === monthStr;
      });

    setFilteredExpenses(filterByDate(expenses));
    setFilteredBills(filterByDate(bills));
  }, [year, month, expenses, bills]);

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
