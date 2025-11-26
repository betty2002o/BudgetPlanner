import { useContext } from "react";
import ProgressBar from "@ramonak/react-progress-bar";
import { BudgetContext } from "../../contexts/BudgetContext";
import { ExpenseContext } from "../../contexts/ExpenseContext";
import { BillContext } from "../../contexts/BillContext";
import "./BudgetOverviewBar.css";

export default function BudgetOverviewBar() {
  const bgColor = "var(--link-color-hover)";
  const baseBgColor = "var(--bg-blue)";

  const { budgets } = useContext(BudgetContext);
  const { expenses } = useContext(ExpenseContext);
  const { bills } = useContext(BillContext);

  const currentYear = new Date().getFullYear();
  const currentMonth = new Date().toLocaleString("en-US", { month: "short" });

  // Generic filter by current month & year
  const filterByDate = (items) =>
    items.filter((item) => {
      const date = new Date(item.date);
      const matchYear = date.getFullYear() === currentYear;
      const matchMonth =
        date.toLocaleString("en-US", { month: "short" }) === currentMonth;
      return matchYear && matchMonth;
    });

  const filteredBudgets = filterByDate(budgets);
  const filteredExpenses = filterByDate(expenses);
  const filteredBills = filterByDate(bills);

  const sumByCategory = (items, category) =>
    items
      .filter((x) =>
        category ? x.category?.toLowerCase() === category.toLowerCase() : true
      )
      .reduce((sum, item) => sum + item.amount, 0);

  const totalIncome = sumByCategory(filteredBudgets, "income");
  const totalSaving = sumByCategory(filteredBudgets, "saving");
  const totalExpense = sumByCategory(filteredExpenses);
  const totalPaidBill = sumByCategory(filteredBills.filter((x) => x.paid));

  const totalBudget = totalIncome - totalSaving;
  const totalSpent = totalExpense + totalPaidBill;
  const spentPercentage = totalBudget ? totalSpent / totalBudget : 0;

  const remainingPercentage = Math.max(0, Math.min(1, 1 - spentPercentage));
  const completed = Math.round(remainingPercentage * 100);

  return (
    <div className="d-flex budget-container">
      <div>Remaining Budget: ${totalBudget - totalSpent}</div>
      <div className="budget-bar">
        <ProgressBar
          completed={completed}
          height="30px"
          bgColor={bgColor}
          baseBgColor={baseBgColor}
          labelColor="#fff"
          labelSize="14px"
          borderRadius="6px"
          labelAlignment="center"
          margin="6px"
          transitionTimingFunction="ease-in-out"
          transitionDuration="1s"
          animateOnRender="true"
        />
      </div>
    </div>
  );
}
