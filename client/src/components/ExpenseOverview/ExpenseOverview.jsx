import React from "react";
import ExpenseTable from "../ExpenseTable/ExpenseTable";
import ExpenseGraph from "../ExpenseGraph/ExpenseGraph";
import "./ExpenseOverview.css";
export default function ExpenseOverview() {
  return (
    <div className="container d-flex-column">
      <div className="pre-table-title">
        <div className="pre-table-summary">Expense</div>
      </div>
      <div className="d-flex">
        <ExpenseTable />
        <div className="expense-table-graph">
          <ExpenseGraph />
        </div>
      </div>
    </div>
  );
}

// //   return (
// //     <div className="graph-center">
// //       <div className="graph-size">
// //         <Doughnut data={data} />
// //       </div>
// //     </div>
// //   );
// // }
