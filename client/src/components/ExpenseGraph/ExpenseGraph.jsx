import React, { useContext, useEffect, useState } from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import ChartDataLabels from "chartjs-plugin-datalabels";
import { ExpenseContext } from "../../contexts/ExpenseContext";
import { BillContext } from "../../contexts/BillContext";
import "./ExpenseGraph.css";

ChartJS.register(ArcElement, Tooltip, Legend, ChartDataLabels);

export default function ExpenseGraph({ year, month }) {
  const { expenses } = useContext(ExpenseContext);
  const { bills } = useContext(BillContext);

  const [filteredExpenses, setFilteredExpenses] = useState([]);
  const [filteredBills, setFilteredBills] = useState([]);

  useEffect(() => {
    if (!month) return;

    const filterByDate = (items) =>
      items.filter((item) => {
        const [yearStr, monthStr] = item.date.split("-");
        const itemYear = Number(yearStr);
        const itemMonth = Number(monthStr) - 1; // 0 = Jan

        // month is like "Nov"
        const monthNames = [
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
        const filterMonthNumber = monthNames.indexOf(month);

        return itemYear === Number(year) && itemMonth === filterMonthNumber;
      });

    setFilteredExpenses(filterByDate(expenses));
    setFilteredBills(filterByDate(bills));
  }, [year, month, expenses, bills]);
  const labels = [
    "Household",
    "Food",
    "Health Care",
    "Credit & Loan",
    "Personal",
    "Transportation",
    "Entertainment",
    "Other",
    "Paid Bills",
  ];

  const dataValues = labels.map((label) => {
    if (label === "Paid Bills") {
      return filteredBills
        .filter((b) => b.paid)
        .reduce((sum, b) => sum + b.amount, 0);
    } else {
      return filteredExpenses
        .filter((e) => e.category.toLowerCase() === label.toLowerCase())
        .reduce((sum, e) => sum + e.amount, 0);
    }
  });

  const backgroundColors = [
    "rgba(255, 99, 132, 0.8)",
    "rgba(54, 162, 235, 0.8)",
    "rgba(255, 206, 86, 0.8)",
    "rgba(75, 192, 192, 0.8)",
    "rgba(153, 102, 255, 0.8)",
    "rgba(255, 159, 64, 0.8)",
    "rgba(199, 199, 199, 0.8)",
    "rgba(255, 159, 255, 0.8)",
    "rgba(100, 100, 255, 0.8)",
  ];

  const data = {
    labels,
    datasets: [
      {
        data: dataValues,
        backgroundColor: backgroundColors,
        borderColor: backgroundColors.map((c) => c.replace("0.8", "1")),
        borderWidth: 3,
      },
    ],
  };

  const options = {
    plugins: {
      legend: { display: false },
      datalabels: {
        color: "#fff",
        formatter: (_, context) => {
          const value = context.chart.data.datasets[0].data[context.dataIndex];
          const label = context.chart.data.labels[context.dataIndex];
          return value > 0 ? label : null;
        },
        font: { weight: "bold", size: 12 },
      },
    },
    cutout: "30%", // donut style
  };

  return (
    <div className="graph-center">
      <div className="graph-size">
        <Doughnut data={data} options={options} />
      </div>
    </div>
  );
}
