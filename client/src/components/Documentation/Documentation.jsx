import React from "react";
import "./Documentation.css";

export default function Documentation() {
  return (
    <div className="header-wrapper">
      <div className="container d-flex">
        <h1 className="header-title flex-grow">Documentation</h1>
      </div>

      <div className="container">
        <div className="documentation-body-heading">
          1. How to Build & Run the Project
        </div>
        <div className="documentation-body-subheading">
          <section>
            Prerequisites
            <ul>
              <li>Node.js & npm installed</li>
              <li>MongoDB (local or MongoDB Atlas)</li>
              <li>
                Create a <code>.env</code> file inside /server folder
              </li>
            </ul>
          </section>

          <section>
            Project Structure
            <div className="documentation-indent">
              root
              <div>├── client/ (React + Vite frontend)</div>
              <div>└── server/ (Express backend)</div>
            </div>
          </section>

          <section>
            Install Dependencies
            <ul>
              <li>cd client</li>
              <li>npm install</li>
              <li>cd ../server</li>
              <li>npm install</li>
            </ul>
          </section>

          <section>
            Run Frontend & Backend Concurrently
            <ul>
              <li>Navigate to server folder</li>
              <li>
                Run: <code>npm run dev:all</code>
              </li>
            </ul>
          </section>
        </div>

        <div className="documentation-body-heading">
          2. How to Use the Application
        </div>
        <div className="documentation-body-subheading">
          <section>
            Dashboard
            <ul>
              <li>Displays current month financial overview.</li>
              <li>Quick access to spent, income, savings, and bill stats.</li>
              <li>Shows remaining budget for the current month.</li>
              <li>Filters: Automatically based on current system date.</li>
            </ul>
          </section>

          <section>
            Monthly Summary
            <ul>
              <li>
                Shows detailed monthly breakdown of budget, expenses, income,
                and bills.
              </li>
              <li>Displays category breakdown via table and graph.</li>
              <li>
                Shows values such as Total Income, Total Expense, Paid Bills,
                Saving, Difference, and Balance Forward.
              </li>
              <li>Filters: Year and Month.</li>
            </ul>
          </section>

          <section>
            Daily Expense
            <ul>
              <li>Users can add, edit, and delete daily expenses.</li>
              <li>Supports category-based tracking.</li>
              <li>Filters: Year, Month, and Category.</li>
            </ul>
          </section>

          <section>
            Monthly Budget
            <ul>
              <li>Users can add, edit, and delete income and savings.</li>
              <li>Paid bills are included in monthly summary calculations.</li>
              <li>Filters: Year, Month, and Category.</li>
            </ul>
          </section>

          <section>
            Bills
            <ul>
              <li>Users can add, edit, and delete bills.</li>
              <li>Mark bills as Paid or Unpaid.</li>
              <li>
                Displays Total (sum of all bills) and Owed (unpaid amount).
              </li>
              <li>Filters: Year, Month, and Payment Status.</li>
            </ul>
          </section>

          <section>
            Validation & Error Messages
            <ul>
              <li>
                All forms validate inputs before submission:
                <ul>
                  <li>Amount fields must be positive numbers.</li>
                  <li>Date fields must be valid dates.</li>
                  <li>Description cannot be empty.</li>
                  <li>Category must be selected.</li>
                </ul>
              </li>
              <li>Error messages are displayed below each invalid field.</li>
              <li>
                Numeric fields show <code>0</code> or error if invalid input is
                entered.
              </li>
              <li>Users cannot submit the form until all validations pass.</li>
            </ul>
          </section>

          <section>
            Navigation
            <ul>
              <li>Mobile-first design using hamburger menu.</li>
              <li>
                Navigate between Dashboard, Monthly Summary, Daily Expense,
                Budget, and Bills.
              </li>
            </ul>
          </section>

          <section>
            Footer
            <ul>
              <li>Footer is fixed at the bottom of the page.</li>
              <li>Navigate to Documentation</li>
            </ul>
          </section>
        </div>

        <div className="documentation-body-heading">3. Future Improvements</div>
        <div className="documentation-body-subheading">
          <ul>
            <li>Implement authentication (user login).</li>
            <li>Enable export to PDF or Excel.</li>
            <li>Carry forward remaining monthly balance.</li>
            <li>Add dark mode support.</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
