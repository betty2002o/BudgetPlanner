import React from "react";
import OverviewTable from "../OverviewTable/OverviewTable";
import "./RecentOverview.css";
export default function RecentOverview() {
  return (
    <div className=" container d-flex overviews">
      <OverviewTable type={"expense"} />
      <OverviewTable type={"bills"} />
    </div>
  );
}
