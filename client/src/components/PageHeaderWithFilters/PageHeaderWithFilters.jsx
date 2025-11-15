import React from "react";
import "./PageHeaderWithFilters.css";

export default function PageHeaderWithFilters({ Type }) {
  return (
    <div className="header-wrapper">
      <div className="container d-flex">
        <h1 className="header-title flex-grow">{Type}</h1>
        <div className="header-filters  d-flex">
          <select name="" id="">
            <option value="">Filter by Year </option>
            <option value="">Jan </option>
          </select>
          <select name="" id="">
            <option value="">Filter by Month </option>
            <option value="">Jan </option>
          </select>
          {Type !== "Bills" && (
            <select name="" id="">
              <option value="">Filter by Category </option>
              <option value="">Jan </option>
            </select>
          )}
          {Type !== "Bills" && (
            <select name="" id="">
              <option value="">Filter by Amount </option>
              <option value="">Below 50 </option>
              <option value="">50 and above </option>
            </select>
          )}
        </div>
      </div>
    </div>
  );
}
