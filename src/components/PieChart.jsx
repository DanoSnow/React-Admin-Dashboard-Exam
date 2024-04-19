import React, { useEffect, useState } from 'react'
import { Pie } from 'react-chartjs-2'
import { Chart, ArcElement, Tooltip, Legend } from 'chart.js'
import { useRecordContext } from 'react-admin';
Chart.register(
    ArcElement, Tooltip, Legend, 
);

const PieChart = ({ chartData }) => {
    const [data, setData] = useState(null);
    useEffect(() => {
        if(chartData){
            const labels = chartData.map(product => product.name);
            const incomes = chartData.map(product => product.income);
            const data_ = {
                labels: labels,
                datasets: [
                    {
                        label: 'Incomes per product',
                        data: incomes,
                        backgroundColor: [
                            'rgba(255, 99, 132, 0.6)',
                            'rgba(54, 162, 235, 0.6)',
                            'rgba(255, 206, 86, 0.6)',
                            'rgba(75, 192, 192, 0.6)',
                            'rgba(153, 102, 255, 0.6)',
                            'rgba(255, 159, 64, 0.6)'
                        ],
                        borderColor: [
                            'rgba(255, 99, 132, 0.6)',
                            'rgba(54, 162, 235, 0.6)',
                            'rgba(255, 206, 86, 0.6)',
                            'rgba(75, 192, 192, 0.6)',
                            'rgba(153, 102, 255, 0.6)',
                            'rgba(255, 159, 64, 0.6)'
                        ],
                        borderWidth: 1
                    }
                ]
            };
            setData(data_);
        }
    }, [chartData]);
    const options = {
        responsive: true,
        maintainAspectRatio: false,
    };

    return data ? <Pie data={data} options={options} /> : null;
}

export default PieChart
