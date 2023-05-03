import React from "react";
import { Bar } from "react-chartjs-2";
import Chart from "chart.js/auto";

const yticks = ['bad', 'avg', 'good', 'v.good', 'great', 'excellent']

const options = {
  responsive: true,
  maintainAspectRatio: false,
  scales: {
    x: {
      grid: {
        display: false
      }
    },
    y: {
      suggestedMax: 50,
      grid: {
        display: false
      },
      ticks: {
        beginAtZero: true,
        callback: (value, index) => yticks[index],
      }
  }
}
  // scales: {
  //   yAxes: [
  //     {
  //       ticks: {
          // beginAtZero: true,
          // callback: (value) => `$ ${value}`,
  //       },
  //       scaleLabel: {
  //         display: true,
  //         labelString: "Y-Axis Label",
  //       },
  //       gridLines: {
  //         display: false,
  //       },
  //     },
  //   ],
  //   xAxes: [
  //     {
  //       scaleLabel: {
  //         display: true,
  //         labelString: "X-Axis Label",
  //       },
  //       gridLines: {
  //         display: false,
  //       },
  //     },
  //   ],
  // },
};

export default function BarChart() {
  const data = {
    labels: ["Mock1", "Mock2", "Mock3", "Mock4", "Mock5"],
    datasets: [
      {
        label: "Mock",
        backgroundColor: ["orange"],
        data: [10, 20, 20, 10, 20],
        barThickness: 30
      },
      {
        label: "Remock",
        backgroundColor: ["blue"],
        data: [30, 40, 0, 0, 0],
        barThickness: 30
      },
    ],
  };
  return <Bar data={data} options={options} />;
}
