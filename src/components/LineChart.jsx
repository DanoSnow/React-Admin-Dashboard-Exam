import React from 'react'
import { Line } from 'react-chartjs-2'
import { Chart, CategoryScale, LinearScale, PointElement, Title, Tooltip, Legend, Filler, LineElement } from 'chart.js'
Chart.register(
    CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, Filler
);

const sales = [150, 175, 80, 120, 140, 135, 180, 170];
const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August'];
const data = {
    labels: months,
    datasets: [
        {
            label: 'Sales',
            data: sales,
            tension: 0.5,
            fill: true,
            borderColor: 'rgba(255, 99, 132, 0.5)',
            pointRadius: 5,
            pointBorderColor: 'rgba(255, 99, 132, 0.5)',
            pointBackgroundColor: 'rgba(255, 99, 132, 0.5)'
        }
    ]
    
};
const options = {
    scales: {
        y: {
            min: 0
        },
        x: {
            ticks: { color: 'rgba(255, 99, 132, 1)' }
        }
    }
};


const LineChart = () => {
    return <Line data={data} options={options} />;
}

export default LineChart
