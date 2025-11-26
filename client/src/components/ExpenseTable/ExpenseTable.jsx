import { useContext } from "react";
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

  const filterByDate = (items) =>
    items.filter((item) => {
      const date = new Date(item.date);
      return (
        date.getFullYear() === year &&
        date.toLocaleString("en-US", { month: "short" }) === month
      );
    });

  const filteredExpenses = filterByDate(expenses);
  const filteredBills = filterByDate(bills);

  const totalExpense = filteredExpenses.reduce(
    (sum, item) => sum + item.amount,
    0
  );
  const totalPaidBill = filteredBills
    .filter((bill) => bill.paid)
    .reduce((sum, bill) => sum + bill.amount, 0);

  const totalSpent = totalExpense + totalPaidBill;

  const getPercentage = (amount) =>
    totalSpent ? ((amount / totalSpent) * 100).toFixed(2) : 0;

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
          {labels.map((x, idx) => {
            const categoryTotal = filteredExpenses
              .filter((z) => z.category.toLowerCase() === x.toLowerCase())
              .reduce((sum, y) => sum + y.amount, 0);

            return (
              <tr key={idx}>
                <td>{x}</td>
                <td>${categoryTotal.toFixed(2)}</td>
                <td>{getPercentage(categoryTotal)}%</td>
              </tr>
            );
          })}
          <tr>
            <td>Paid Bills</td>
            <td>${totalPaidBill.toFixed(2)}</td>
            <td>{getPercentage(totalPaidBill)}%</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
