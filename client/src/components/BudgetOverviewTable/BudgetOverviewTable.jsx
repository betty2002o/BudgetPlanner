import { useContext } from "react";
import { BudgetContext } from "../../contexts/BudgetContext";
import "./BudgetOverviewTable.css";

export default function BudgetOverviewTable() {
  const { budgets } = useContext(BudgetContext);

  const currentYear = new Date().getFullYear();
  const currentMonth = new Date().toLocaleString("en-US", { month: "short" });

  const filteredBudgets = budgets.filter((item) => {
    const date = new Date(item.date);
    const matchYear = date.getFullYear() === currentYear;
    const matchMonth =
      date.toLocaleString("en-US", { month: "short" }) === currentMonth;
    return matchYear && matchMonth;
  });

  const totalIncome = filteredBudgets
    .filter((x) => x.category.toLowerCase() === "income")
    .reduce((sum, item) => sum + item.amount, 0);

  const totalSaving = filteredBudgets
    .filter((x) => x.category.toLowerCase() === "saving")
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
