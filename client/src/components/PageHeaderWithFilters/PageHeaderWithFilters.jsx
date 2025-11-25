import { useState } from "react";
import "./PageHeaderWithFilters.css";

export default function PageHeaderWithFilters({ type, onFilterChange }) {
  const currentYear = new Date().getFullYear();
  const startYear = currentYear - 5;
  const years = [];
  for (let y = currentYear; y >= startYear; y--) {
    years.push(y);
  }

  const months = [
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

  const budgetCategory = ["Income", "Saving"];
  const expenseCategory = [
    "Household",
    "Food",
    "Health Care",
    "Credit & Loan",
    "Personal",
    "Transportation",
    "Entertainment",
    "Other",
  ];

  let categories = [];
  if (type === "Budget") categories = budgetCategory;
  else if (type === "Daily Expense") categories = expenseCategory;

  // State to store selected filters
  const [filters, setFilters] = useState({
    year: "",
    month: "",
    category: "",
    paid: "",
    amount: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    const updatedFilters = { ...filters, [name]: value };
    setFilters(updatedFilters);
    if (onFilterChange) onFilterChange(updatedFilters); // pass to parent
  };

  return (
    <div className="header-wrapper">
      <div className="container d-flex">
        <h1 className="header-title flex-grow">{type}</h1>
        <div className="header-filters d-flex">
          <select name="year" value={filters.year} onChange={handleChange}>
            <option value="">Filter by Year</option>
            {years.map((year) => (
              <option key={year} value={year}>
                {year}
              </option>
            ))}
          </select>

          <select name="month" value={filters.month} onChange={handleChange}>
            <option value="">Filter by Month</option>
            {months.map((month, index) => (
              <option key={index} value={month}>
                {month}
              </option>
            ))}
          </select>

          {categories.length > 0 && (
            <select
              name="category"
              value={filters.category}
              onChange={handleChange}
            >
              <option value="">Filter by Category</option>
              {categories.map((cat, index) => (
                <option key={index} value={cat}>
                  {cat}
                </option>
              ))}
            </select>
          )}

          {type === "Bills" && (
            <select name="paid" value={filters.paid} onChange={handleChange}>
              <option value="">Filter by Paid</option>
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
          )}

          {/* {type !== "Bills" && type !== "Monthly Summary" && (
            <select
              name="amount"
              value={filters.amount}
              onChange={handleChange}
            >
              <option value="">Filter by Amount</option>
              <option value="below50">Below 50</option>
              <option value="above50">50 and above</option>
            </select>
          )} */}
        </div>
      </div>
    </div>
  );
}
