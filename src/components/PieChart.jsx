import React, { useEffect, useState } from 'react'
import { Pie } from 'react-chartjs-2'
import { Chart, ArcElement, Tooltip, Legend } from 'chart.js'
Chart.register(
    ArcElement, Tooltip, Legend, 
);

const PieChart = ({ chartData }) => {
    const [data, setData] = useState(null);
    function generateDynamicColors(count){
        const colors = [];
        for(let i=0; i<count; i++){
            const hue = (i * 360) / count;
            colors.push(`rgba(${hue}, 90, 50, 0.75`);
        }
        return colors;
    }
    useEffect(() => {
        if(chartData){
            const labels = chartData.map(product => product.name);
            const incomes = chartData.map(product => product.income);
            const colors = generateDynamicColors(chartData.length);
            const data_ = {
                labels: labels,
                datasets: [
                    {
                        label: 'Incomes per product',
                        data: incomes,
                        backgroundColor: colors,
                        borderColor: colors,
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
