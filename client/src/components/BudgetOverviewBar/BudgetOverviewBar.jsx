import React from "react";
import ProgressBar from "@ramonak/react-progress-bar";
import "./BudgetOverviewBar.css";

export default function BudgetOverviewBar() {
  const bgColor = "var(--link-color-hover)";
  const baseBgColor = "var(--bg-blue)";
  // budget - expense / budget   remaining

  return (
    <div className="d-flex budget-container">
      <div>Budget Remain:</div>
      <div className="budget-bar">
        <ProgressBar
          completed={(80 / 100) * 100}
          height="30px"
          bgColor={bgColor}
          baseBgColor={baseBgColor}
          labelColor="#fff"
          labelSize="14px"
          borderRadius="6px"
          labelAlignment="center"
          margin="6px"
          transitionTimingFunction="ease-in-out"
          transitionDuration="1s"
          animateOnRender="true"
        />
      </div>
    </div>
  );
}
