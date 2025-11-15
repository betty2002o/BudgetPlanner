import React from "react";
import "./PageHeaderWithFilters.css";

export default function PageHeaderWithFilters({ Type }) {
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
  if (Type === "Budget") {
    categories = budgetCategory;
  } else if (Type === "Daily Expense") {
    categories = expenseCategory;
  }

  return (
    <div className="header-wrapper">
      <div className="container d-flex">
        <h1 className="header-title flex-grow">{Type}</h1>
        <div className="header-filters  d-flex">
          <select name="year" id="year">
            <option value="">Filter by Year</option>
            {years.map((year) => (
              <option key={year} value={year}>
                {year}
              </option>
            ))}
          </select>
          <select name="month" id="month">
            <option value="">Filter by Month</option>
            {months.map((month, index) => (
              <option key={index} value={month}>
                {month}
              </option>
            ))}
          </select>
          {categories.length > 0 && (
            <select name="category" id="category">
              <option value="">Filter by Category</option>
              {categories.map((cat, index) => (
                <option key={index} value={cat}>
                  {cat}
                </option>
              ))}
            </select>
          )}

          {Type !== "Bills" && (
            <select name="" id="">
              <option value="">Filter by Amount </option>
              <option value="">Below 50 </option>
              <option value="">50 and above </option>
            </select>
          )}
          {Type == "Bills" && (
            <select name="" id="">
              <option value="">Filter by Paid </option>
              <option value="">Yes</option>
              <option value="">No </option>
            </select>
          )}
        </div>
      </div>
    </div>
  );
}
