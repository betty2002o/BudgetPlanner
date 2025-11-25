import { useState } from "react";
import PageHeaderWithFilters from "../PageHeaderWithFilters/PageHeaderWithFilters";
import MonthlySummaryTable from "../MonthlySummaryTable/MonthlySummaryTable";
import ExpenseOverview from "../ExpenseOverview/ExpenseOverview";
export default function MonthlySummary() {
  const [filters, setFilters] = useState({
    year: "",
    month: "",
    category: "",
    paid: "",
  });

  // Called when the user changes any filter in PageHeaderWithFilters
  const handleFilterChange = (newFilters) => {
    setFilters((prev) => ({ ...prev, ...newFilters }));
  };
  return (
    <div>
      <PageHeaderWithFilters
        type="Monthly Summary"
        filters={filters}
        onFilterChange={handleFilterChange}
      />
      <MonthlySummaryTable filters={filters} />
      <ExpenseOverview filters={filters} />
    </div>
  );
}
