import { useState } from "react";
import PageHeaderWithFilters from "../PageHeaderWithFilters/PageHeaderWithFilters";
import TrackerTable from "../TrackerTable/TrackerTable";
export default function Bill({ type }) {
  const columns = ["Date", "Description", "Amount", "Paid"];
  const [filters, setFilters] = useState({
    year: "",
    month: "",
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
