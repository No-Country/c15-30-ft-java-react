"use client";

import {
  Chart as ChartJS,
  PolarAreaController,
  RadialLinearScale,
  CategoryScale,
  PointElement,
  LineElement,
  LinearScale,
  ArcElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

import { PolarArea, Line, Pie, Doughnut } from "react-chartjs-2";

ChartJS.register(
  PolarAreaController,
  CategoryScale,
  RadialLinearScale,
  PointElement,
  LineElement,
  LinearScale,
  ArcElement,
  Title,
  Tooltip,
  Legend
);

export const PolarAreaChart = ({ className = "" }) => {
  const config = {
    type: "polarArea",
    data: {
      labels: ["Gertrudis", "Scarlet", "Edgar"],
      datasets: [
        {
          label: "Contribuciones",
          data: [11, 16, 24],
          backgroundColor: [
            "rgb(255, 99, 132)",
            "rgb(75, 192, 192)",
            "rgb(255, 205, 86)",
          ],
        },
      ],
    },
    options: {
      responsive: true,
      scales: {
        r: {
          beginAtZero: true,
          max: 30,
        },
      },
    },
  };

  return (
    <div
      className={`w-full h-full flex justify-center items-center  ${className}`}
    >
      <PolarArea
        data={config.data}
        options={{
          plugins: {
            legend: {
              labels: {
                usePointStyle: true,
                pointStyle: "circle",
                pointRadius: 5,
              },
            },
          },
        }}
      />
    </div>
  );
};

export const LineChartChart = ({ className = "" }) => {
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Chart.js Line Chart",
      },
    },
  };

  const labels = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
  ];

  const data = {
    labels,
    datasets: [
      {
        label: "Pedro",
        data: [16, 5, 6, 8, 4, 8, 32],
        borderColor: "rgb(255, 99, 132)",
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
      {
        label: "Toño",
        data: [7, 15, 8, 18, 14, 21, 56],
        borderColor: "rgb(53, 162, 235)",
        backgroundColor: "rgba(53, 162, 235, 0.5)",
      },
    ],
  };

  return (
    <div
      className={`w-full h-full flex justify-center items-center  ${className}`}
    >
      <Line data={data}
        options={{
          plugins: {
            legend: {
              labels: {
                usePointStyle: true,
                pointStyle: "circle",
                pointRadius: 5,
              },
            },
          },
        }}
      />
    </div>
  );
};

export const DoughnutChart = ({ className = "" }) => {
  const data = {
    labels: ['JavaScript', 'TypeScript', 'Python', 'Java', 'HTML', 'CSS'],
    datasets: [
      {
        label: '# de proyectos',
        data: [12, 19, 3, 5, 2, 3],
        backgroundColor: [
          'rgba(255, 99, 132, 0.8)',
          'rgba(54, 162, 235, 0.8)',
          'rgba(255, 206, 86, 0.8)',
          'rgba(75, 192, 192, 0.8)',
          'rgba(153, 102, 255, 0.8)',
          'rgba(255, 159, 64, 0.8)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className={`w-full h-full flex justify-center items-center  ${className}`}>
      <Doughnut
        data={data}
        options={{
          plugins: {
            legend: {
              labels: {
                usePointStyle: true,
                pointStyle: "circle",
                pointRadius: 5,
              },
            },
          },
        }}
      />
    </div>
  );
};
