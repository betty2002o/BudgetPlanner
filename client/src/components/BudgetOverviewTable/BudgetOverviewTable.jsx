import { useContext } from "react";
import { BudgetContext } from "../../contexts/BudgetContext";
import "./BudgetOverviewTable.css";

export default function BudgetOverviewTable() {
  const { budgets } = useContext(BudgetContext);

  const now = new Date();
  const currentYear = now.getFullYear();
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
  const currentMonth = monthNames[now.getMonth()];

  const filteredBudgets = budgets.filter((item) => {
    if (!item.date) return false;

    const [yearStr, monthStr] = item.date.split("-");
    const itemYear = Number(yearStr);
    const itemMonth = monthNames[Number(monthStr) - 1];

    return itemYear === currentYear && itemMonth === currentMonth;
  });

  const totalIncome = filteredBudgets
    .filter((x) => x.category?.toLowerCase() === "income")
    .reduce((sum, item) => sum + item.amount, 0);

  const totalSaving = filteredBudgets
    .filter((x) => x.category?.toLowerCase() === "saving")
    .reduce((sum, item) => sum + item.amount, 0);

  const totalBudget = totalIncome - totalSaving;

  return (
    <div className="overview-table">
      <div className="pre-table-title d-flex">
        <span className="flex-grow text-left">
          <div className="pre-table-summary">Budget</div>
        </span>
      </div>
      <div className="budget-grid">
        <div className="budget-grid-item">Income</div>
        <div className="budget-grid-item">Saving</div>
        <div className="budget-grid-item">Budget</div>
        <div className="budget-grid-item">${totalIncome.toFixed(2)}</div>
        <div className="budget-grid-item">${totalSaving.toFixed(2)}</div>
        <div className="budget-grid-item">${totalBudget.toFixed(2)}</div>
      </div>
    </div>
  );
}
