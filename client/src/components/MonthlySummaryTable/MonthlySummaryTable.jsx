import { useContext } from "react";
import { BillContext } from "../../contexts/BillContext";
import { BudgetContext } from "../../contexts/BudgetContext";
import { ExpenseContext } from "../../contexts/ExpenseContext";
import "./MonthlySummaryTable.css";

export default function MonthlySummaryTable({ filters }) {
  const { budgets } = useContext(BudgetContext);
  const { expenses } = useContext(ExpenseContext);
  const { bills } = useContext(BillContext);

  const monthNames = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  const filterByDate = (items) =>
    items.filter((item) => {
      const date = new Date(item.date);
      const matchYear = filters.year
        ? date.getFullYear() === Number(filters.year)
        : true;
      const matchMonth = filters.month
        ? monthNames[date.getMonth()] === filters.month
        : true;
      return matchYear && matchMonth;
    });

  const filteredBudgets = filterByDate(budgets);
  const filteredExpenses = filterByDate(expenses);
  const filteredBills = filterByDate(bills);

  const totalIncome = filteredBudgets
    .filter((b) => b.category.toLowerCase() === "income")
    .reduce((sum, b) => sum + b.amount, 0);

  const totalSaving = filteredBudgets
    .filter((b) => b.category.toLowerCase() === "saving")
    .reduce((sum, b) => sum + b.amount, 0);

  const totalExpense = filteredExpenses.reduce((sum, e) => sum + e.amount, 0);

  const totalPaidBills = filteredBills
    .filter((b) => b.paid)
    .reduce((sum, b) => sum + b.amount, 0);

  const difference = totalIncome - totalExpense - totalPaidBills;
  const balanceForward = difference - totalSaving;

  return (
    <div className="container">
      <div className="overview-table">
        <div className="pre-table-title d-flex">
          <span className="flex-grow text-left">
            <div className="pre-table-summary">Budget Review</div>
          </span>
        </div>

        <div className="monthly-summary-grid">
          <div className="monthly-summary-table-item">
            <div className="monthly-summary-item-label">Total Income</div>
            <div className="value">${totalIncome.toFixed(2)}</div>
          </div>

          <div className="monthly-summary-table-item">
            <div className="monthly-summary-item-label">Total Expense/Bill</div>
            <div className="value">
              ${(totalExpense + totalPaidBills).toFixed(2)}
            </div>
          </div>

          <div className="monthly-summary-table-item">
            <div className="monthly-summary-item-label">Difference</div>
            <div className="value">${difference.toFixed(2)}</div>
          </div>

          <div className="monthly-summary-table-item">
            <div className="monthly-summary-item-label">Monthly Saving</div>
            <div className="value">${totalSaving.toFixed(2)}</div>
          </div>

          <div className="monthly-summary-table-item">
            <div className="monthly-summary-item-label">Balance Forward</div>
            <div className="value">${balanceForward.toFixed(2)}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
