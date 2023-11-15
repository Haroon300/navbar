import React, { useEffect, useState } from 'react'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

const Piechart = () => {
    const [chartData, setChartData] = useState({
        datasets: [],
    });


    const labels = ['Karachi Kings', 'Lahore Qalandars', 'Islamabad United', 'Multan Sultans'];

    useEffect(() => {
        setChartData({
            datasets: [
                {
                    label: 'Teams points',
                    data: [ 3, 5, 2, 3],
                    backgroundColor: [
                        'rgba(255, 99, 132)',
                        'rgba(54, 162, 235)',
                        'rgba(255, 206, 86)',
                        'rgba(75, 192, 192)',

                    ],
                    borderColor: [
                        'rgba(255, 99, 132, 1)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(255, 206, 86, 1)',
                        'rgba(75, 192, 192, 1)',
                    ],
                    borderWidth: 1,
                }
            ],
            labels:labels,
        })
    })


    return (
        <div>
            <Pie className='h-1/3 w-1/3' data={chartData} />
        </div>
    )
}

export default Piechart;
