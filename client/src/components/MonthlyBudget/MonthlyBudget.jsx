import { useState } from "react";
import PageHeaderWithFilters from "../PageHeaderWithFilters/PageHeaderWithFilters";
import TrackerTable from "../TrackerTable/TrackerTable";

export default function MonthlyBudget({ type }) {
  const columns = ["Date", "Description", "Category", "Amount"];
  const [filters, setFilters] = useState({
    year: "",
    month: "",
    category: "",
    paid: "",
  });
  const handleFilterChange = (newFilters) => {
    setFilters((prev) => ({ ...prev, ...newFilters }));
  };
  return (
    <div>
      <PageHeaderWithFilters
        type={type}
        filters={filters}
        onFilterChange={handleFilterChange}
      />
      <TrackerTable columns={columns} type={type} filters={filters} />
    </div>
  );
}
