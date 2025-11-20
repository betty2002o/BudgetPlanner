import { useContext } from "react";
import { ExpenseContext } from "../../contexts/ExpenseContext";
import { BillContext } from "../../contexts/BillContext";
import "./ExpenseTable.css";
export default function ExpenseTable() {
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

  let totalExpense = expenses.reduce((sum, item) => sum + item.amount, 0);

  const totalPaidBill = bills
    .filter((bill) => bill.paid)
    .reduce((sum, bill) => sum + bill.amount, 0);

  const totalSpent = totalExpense + totalPaidBill;

  return (
    <div className="expense-table-graph ">
      <table className="table-products expense-products text-left">
        <thead>
          <tr>
            <th>Category</th>
            <th>Amount</th>
            <th>%</th>
          </tr>
        </thead>
        <tbody>
          {labels.map((x, idx) => (
            <tr key={idx}>
              <td>{x}</td>
              <td>
                $
                {expenses
                  .filter((z) => z.category.toLowerCase() === x.toLowerCase())
                  .reduce((sum, y) => sum + y.amount, 0)
                  .toFixed(2)}
              </td>
              <td>
                {(
                  expenses
                    .filter((z) => z.category.toLowerCase() === x.toLowerCase())
                    .reduce((sum, y) => sum + y.amount, 0) / totalSpent
                ).toFixed(2) * 100}
                %
              </td>
            </tr>
          ))}
          <tr>
            <td>Paid Bills</td>
            <td> ${totalPaidBill}</td>
            <td> {(totalPaidBill / totalSpent).toFixed(2) * 100}%</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
