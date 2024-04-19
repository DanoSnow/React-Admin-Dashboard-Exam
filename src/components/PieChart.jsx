import React, { useEffect, useState } from 'react'
import { Pie } from 'react-chartjs-2'
import { Chart, ArcElement, Tooltip, Legend } from 'chart.js'
import { useRecordContext } from 'react-admin';
Chart.register(
    ArcElement, Tooltip, Legend, 
);

const PieChart = () => {
    const record = useRecordContext();
    const [chartData, setChartData] = useState(null);
    const [chartOptions, setChartOptions] = useState(null);
    useEffect(() => {
        const getRecordContext = () => {
            if(record){
                const labels = record.products.map(product => product.name);
                const incomes = record.products.map(product => product.income);
                const data = {
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
                const options = {
                    responsive: true,
                    maintainAspectRatio: false,
                };
                setChartData(data);
                setChartOptions(options);
            }
        }
        getRecordContext();
    }, [record]);
    
    return chartData && chartOptions ? <Pie data={chartData} options={chartOptions} /> : null;
}

export default PieChart
