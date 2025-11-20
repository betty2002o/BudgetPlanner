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

  const sumByCategory = (items, category) =>
    items
      .filter((x) =>
        category ? x.category?.toLowerCase() === category.toLowerCase() : true
      )
      .reduce((sum, item) => sum + item.amount, 0);

  // Totals
  const totalIncome = sumByCategory(budgets, "income");
  const totalSaving = sumByCategory(budgets, "saving");
  const totalExpense = sumByCategory(expenses);
  const totalPaidBill = sumByCategory(bills.filter((x) => x.paid));

  const totalBudget = totalIncome - totalSaving;
  const totalSpent = totalExpense + totalPaidBill;

  const spentPercentage = totalBudget
    ? (totalSpent / totalBudget).toFixed(2)
    : 0;
  return (
    <div className="d-flex budget-container">
      <div>Remaining Budget: ${totalBudget - totalSpent}</div>
      <div className="budget-bar">
        <ProgressBar
          completed={(1 - spentPercentage) * 100}
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
