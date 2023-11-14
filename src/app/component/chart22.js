import React, { useState, useEffect } from 'react';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const Chartg = () => {
  const [chartData, setChartData] = useState({
    datasets: [],
  });

  const [chartOptions, setChartOptions] = useState({
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Match',
      },
    },
    responsive: true,
  });

  const labels = [
    '1st', '2nd', '3rd', '4th', '5th', '6th', '6th', '7th', '8th', '9th',
    '10th', '11th', '12th', '13th', '14th', '15th', '16th', '17th', '18th', '19th', '20th'
  ];

  useEffect(() => {
    setChartData({
      datasets: [
        {
          label: 'Team 1',
          data: [3, 5, 2, 6, 8, 1, 6, 7, 2, 10, 2, 6, 8, 4, 5, 6, 1, 0, 1, 20],
          borderColor: 'rgb(255, 99, 132)',
          backgroundColor: 'rgba(255, 99, 132, 0.5)',
        },
        {
          label: 'Team 2',
          data: [2, 3, 0, 8, 6, 4, 9, 4, 0, 1, 5, 0, 2, 4, 6, 9, 1, 6, 10, 6, 4],
          borderColor: 'rgb(53, 162, 235)',
          backgroundColor: 'rgba(53, 162, 235, 0.5)',
        },
      ],
      labels: labels, // Added this line to include labels in the chart
    });

    setChartOptions({
      plugins: {
        legend: {
          position: 'top',
        },
        title: {
          display: true,
          text: 'Match',
        },
      },
      responsive: true,
    });
  }, []);

  return (
    <div>
      <Line  class='h-10 w-10' options={chartOptions} data={chartData} />
    </div>
  );
};
