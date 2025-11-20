import React from "react";
import { BudgetProvider } from "./BudgetContext.jsx";
import { BillProvider } from "./BillContext.jsx";
import { ExpenseProvider } from "./ExpenseContext.jsx";

export default function FinanceProvider({ children }) {
  return (
    <BudgetProvider>
      <BillProvider>
        <ExpenseProvider>{children}</ExpenseProvider>
      </BillProvider>
    </BudgetProvider>
  );
}
