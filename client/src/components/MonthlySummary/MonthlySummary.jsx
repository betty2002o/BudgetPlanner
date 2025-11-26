import { useState } from "react";
import PageHeaderWithFilters from "../PageHeaderWithFilters/PageHeaderWithFilters";
import MonthlySummaryTable from "../MonthlySummaryTable/MonthlySummaryTable";
import ExpenseOverview from "../ExpenseOverview/ExpenseOverview";

export default function MonthlySummary() {
  const [filters, setFilters] = useState({
    year: "",
    month: "",
  });

  const handleFilterChange = (newFilters) => {
    setFilters(newFilters);
  };

  return (
    <div>
      <PageHeaderWithFilters
        type="Monthly Summary"
        onFilterChange={handleFilterChange}
      />
      <MonthlySummaryTable filters={filters} />
      <ExpenseOverview year={filters.year} month={filters.month} />
    </div>
  );
}
