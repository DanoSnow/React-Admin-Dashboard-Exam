import React, { useEffect, useState } from 'react'
import { Pie } from 'react-chartjs-2'
import { Chart, ArcElement, Tooltip, Legend } from 'chart.js'
import { useRecordContext } from 'react-admin';
Chart.register(
    ArcElement, Tooltip, Legend, 
);

const PieChart = () => {
    const [record, setRecord] = useState(null);
    const recordContext = useRecordContext();
    useEffect(() => {
        const getRecordContext = () => {
            setRecord(recordContext);
        }
        getRecordContext();
    }, [record]);
    //const labels = record.products.map(product => product.name);
    //const incomes = record.products.map(product => product.income);
    //Title?
    const labels = ['Product 1', 'Product 2', 'Product 3', 'Product 4'];
    const incomes = [50, 60, 100, 80];
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

    return <Pie data={data} options={options} />
}

export default PieChart
