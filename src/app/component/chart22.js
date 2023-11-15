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
        text: 'Match Runs Per Over',
      },
    },
    responsive: true,
  });

  const labels = [
    '1st', '2nd', '3rd', '4th', '5th', '6th', '6th', '7th', '8th', '9th',
    '10th'
  ];

  useEffect(() => {
    setChartData({
      datasets: [
        {
          label: 'Islamabad United',
          data: [3, 5, 2, 6, 8, 1, 6, 7, 2, 0, 2],
          borderColor: 'rgb(255, 99, 132)',
          backgroundColor: 'rgba(255, 99, 132, 0.5)',
        },
        {
          label: 'Karachi Kings',
          data: [6, 0, 8, 6, 4, 9, 4, 3, 1, 5, 4 ],
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
          text: 'Match Runs Per Over',
        },
      },
      responsive: true,
    });
  }, []);

  return (
    <div className='w-1/2 h-1/2'>
      <Line options={chartOptions} data={chartData} />
    </div>
  );
};
