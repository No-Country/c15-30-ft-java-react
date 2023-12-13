"use client";
import React from "react";
import {
  Chart as ChartJS,
  PolarAreaController,
  RadialLinearScale,
  PointElement,
  LineElement,
  ArcElement,
} from "chart.js";

import { PolarArea } from "react-chartjs-2";

ChartJS.register(
  PolarAreaController,
  RadialLinearScale,
  PointElement,
  LineElement,
  ArcElement
);

export const PolarAreaChart = ({ className = "" }) => {
  const data = {
    labels: ["January", "February", "March"],
    datasets: [
      {
        label: "Dataset 1",
        data: [10, 0, 0],
        backgroundColor: "#aa22aa",
        borderColor: "rgba(255, 99, 132, 1)",
        borderWidth: 1,
      },
      {
        label: "Dataset 2",
        data: [0, 20, 0],
        backgroundColor: "#ff22aa",
        borderColor: "rgba(255, 99, 132, 1)",
        borderWidth: 1,
      },
      {
        label: "Dataset 2",
        data: [0, 0, 25],
        backgroundColor: "#ffcc22",
        borderColor: "rgba(255, 99, 132, 1)",
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Polar Area Chart",
      },
      tooltip: {
        enabled: true,
      },
    },
    scales: {
      r: {
        beginAtZero: true,
        max: 30,
      },
    },
  };

  return (
    <div
      className={`w-full h-full flex justify-center items-center  ${className}`}
    >
      <PolarArea data={data} options={options} />
    </div>
  );
};
