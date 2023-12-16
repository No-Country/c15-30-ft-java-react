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
import { useEffect, useState } from "react";

import { PolarArea, Line, Doughnut } from "react-chartjs-2";

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

const generateDynamicColors = (contributors) => {
  const baseHue = 265; // Tono base deseado
  const baseSaturation = 52;
  const baseLightness = 36;

  return Array.from({ length: contributors.length }, (_, index) => {
    // Calcular el tono para cada índice
    const hue = (baseHue + (150 / contributors.length) * index) % 360;
    // Devolver el color en formato HSL
    return `hsl(${hue}, ${baseSaturation}%, ${baseLightness}%)`;
  });
};

export const PolarAreaChart = ({ className = "", selectedProject }) => {
  const [commits, setCommits] = useState([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await fetch(
          `https://api.github.com/repos/Jandres373/${selectedProject}/commits`,
          {
            method: "GET",
            headers: {
              Authorization: `Bearer ${process.env.NEXT_PUBLIC_GITHUB_TOKEN}`,
              "X-GitHub-Api-Version": "2022-11-28",
              "Content-Type": "application/json",
            },
          }
        );

        if (!response.ok) {
          throw new Error(`Error en la solicitud: ${response.status}`);
        }

        const data = await response.json();
        setCommits(data);
      } catch (error) {
        console.error("Error en la solicitud:", error.message);
      }
    };

    if (selectedProject) {
      getData();
    }
  }, [selectedProject]);

  const contributorCounts = {};
  commits.forEach((commit) => {
    const contributorName = commit.commit.author.name;
    contributorCounts[contributorName] =
      (contributorCounts[contributorName] || 0) + 1;
  });

  const contributors = Object.keys(contributorCounts);
  const contributionCounts = Object.values(contributorCounts);

  const dynamicColors = generateDynamicColors(contributors);

  const data = {
    labels: contributors,
    datasets: [
      {
        label: "Contribuciones",
        data: contributionCounts,
        backgroundColor: dynamicColors,
        borderColor: "rgba(0, 0, 0, 0.1)",
      },
    ],
  };

  return (
    <div
      className={`w-full h-full flex justify-center items-center  ${className}`}
    >
      <PolarArea
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

export const LineChartChart = ({ className = "", selectedProject }) => {
  const [chartData, setChartData] = useState(null);
  const [contributors, setContributors] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://api.github.com/repos/Jandres373/${selectedProject}/commits`,
          {
            method: "GET",
            headers: {
              Authorization: `Bearer ${process.env.NEXT_PUBLIC_GITHUB_TOKEN}`,
              "X-GitHub-Api-Version": "2022-11-28",
              "Content-Type": "application/json",
            },
          }
        );

        if (!response.ok) {
          throw new Error(`Error en la solicitud: ${response.status}`);
        }

        const commits = await response.json();

        if (commits && commits.length > 0) {
          const dates = commits.map((commit) =>
            Date.parse(commit?.commit?.author?.date)
          );

          const minDate = Math.min(...dates);
          const maxDate = Math.max(...dates);

          const intervalCount = 12;
          const interval = (maxDate - minDate) / intervalCount;

          const intervals = Array.from(
            { length: intervalCount },
            (_, index) => {
              const start = minDate + index * interval;
              return new Date(start).toLocaleDateString();
            }
          );

          const groupedCommits = commits.reduce((grouped, commit) => {
            const author = commit?.commit?.author.name;

            if (!grouped[author]) {
              grouped[author] = {
                label: author,
                data: Array(intervalCount).fill(0),
              };
            }

            const intervalIndex = Math.floor(
              (Date.parse(commit?.commit?.author?.date) - minDate) / interval
            );
            grouped[author].data[intervalIndex] += 1;

            return grouped;
          }, {});

          const datasets = Object.values(groupedCommits);

          // Obtener contribuidores y asignar colores
          const contributors = datasets.map((dataset) => dataset.label);
          setContributors(contributors);

          const colors = generateDynamicColors(contributors);

          const data = {
            labels: intervals,
            datasets: datasets.map((dataset, index) => ({
              label: dataset.label,
              data: dataset.data,
              borderColor: colors[index],
              backgroundColor: colors[index],
            })),
          };

          setChartData(data);
        }
      } catch (error) {
        console.error("Error en la solicitud:", error.message);
      }
    };

    if (selectedProject) {
      fetchData();
    }
  }, [selectedProject]);

  return (
    <div
      className={`w-full h-full flex justify-center items-center ${className}`}
    >
      {
        <Line
          data={
            chartData || {
              labels: "no repo",
              datasets: ["no repo"],
            }
          }
          options={{
            scales: {
              x: {
                beginAtZero: true,
                ticks: {
                  font: {
                    size: 8,
                  },
                },
              },
            },
            elements: {
              line: {
                tension: 0,
                borderWidth: 2,
              },
            },
            plugins: {
              legend: {
                labels: {
                  usePointStyle: true,
                  pointStyle: "circle",
                  pointRadius: 5,
                  font: {
                    size: 12,
                  },
                },
              },
            },
          }}
        />
      }
    </div>
  );
};

export const DoughnutChart = ({ className = "" }) => {
  const data = {
    labels: ["JavaScript", "TypeScript", "Python", "Java", "HTML", "CSS"],
    datasets: [
      {
        label: "# de proyectos",
        data: [12, 19, 3, 5, 2, 3],
        backgroundColor: [
          "rgba(255, 99, 132, 0.8)",
          "rgba(54, 162, 235, 0.8)",
          "rgba(255, 206, 86, 0.8)",
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
        borderWidth: 1,
      },
    ],
  };

  return (
    <div
      className={`w-full h-full flex justify-center items-center  ${className}`}
    >
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
