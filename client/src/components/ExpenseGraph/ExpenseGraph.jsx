import React from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import ChartDataLabels from "chartjs-plugin-datalabels";
import "./ExpenseGraph.css";
ChartJS.register(ArcElement, Tooltip, Legend, ChartDataLabels);
export default function ExpenseGraph() {
  const data = {
    labels: [
      "Household",
      "Food",
      "Health Care",
      "Credit & Loan",
      "Personal",
      "Transportation",
      "Entertainment",
      "Other",
    ],
    datasets: [
      {
        data: [12, 19, 3, 5],
        backgroundColor: [
          "rgba(255, 99, 132, 0.8)",
          "rgba(54, 162, 235, 0.8)",
          "rgba(255, 206, 86,0.8)",
          "rgba(75, 192, 192, 0.8)",
          "rgba(153, 102, 255, 0.8)",
          "rgba(255, 159, 64, 0.8)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
        ],
        borderWidth: 3,
      },
    ],
  };

  const options = {
    plugins: {
      legend: { display: false },
      datalabels: {
        color: "#fff",
        formatter: (_, context) => context.chart.data.labels[context.dataIndex],
      },
    },
    cutout: "30%",
  };

  return (
    <div className="graph-center">
      <div className="graph-size">
        <Doughnut data={data} options={options} />
      </div>
    </div>
  );
}
