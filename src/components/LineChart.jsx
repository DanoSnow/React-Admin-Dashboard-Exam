import React from 'react'
import { Line } from 'react-chartjs-2'
import { Chart, CategoryScale, LinearScale, PointElement, Title, Tooltip, Legend, Filler, LineElement } from 'chart.js'
Chart.register(
    CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, Filler
);

const MONTHS = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

const LineChart = ( {chartData} ) => {
    const sales = chartData.map(e => e.totalIncome);
    const months = chartData.map(e => MONTHS[e.monthId-1]);

    const data = {
        labels: months,
        datasets: [
            {
                label: 'Sales',
                data: sales,
                tension: 0.25,
                fill: true,
                borderColor: 'rgba(255, 99, 132, 0.5)',
                pointRadius: 5,
                pointBorderColor: 'rgba(255, 99, 132, 0.5)',
                pointBackgroundColor: 'rgba(255, 99, 132, 0.5)'
            }
        ]
    };
    const options = {
        maintainAspectRatio: false,
        responsive: true,
        animation: false,
        scales: {
            y: {
                min: 0
            },
            x: {
                ticks: { color: 'rgba(255, 99, 132, 1)' }
            }
        }
    };

    return <Line data={data} options={options} />;
}

export default LineChart
