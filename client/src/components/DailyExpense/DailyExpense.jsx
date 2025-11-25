import { useState } from "react";
import PageHeaderWithFilters from "../PageHeaderWithFilters/PageHeaderWithFilters";
import TrackerTable from "../TrackerTable/TrackerTable";
export default function DailyExpense({ type }) {
  const columns = ["Date", "Description", "Category", "Amount"];
  const [filters, setFilters] = useState({
    year: "",
    month: "",
    category: "",
  });

  const handleFilterChange = (newFilters) => {
    setFilters(newFilters);
  };

  return (
    <div>
      <PageHeaderWithFilters type={type} onFilterChange={handleFilterChange} />
      <TrackerTable columns={columns} type={type} filters={filters} />
    </div>
  );
}
