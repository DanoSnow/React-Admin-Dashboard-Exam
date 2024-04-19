import React, { useState, useEffect } from 'react'
import { Box, Typography, Card } from "@mui/material"
import PieChart from './PieChart'
import { useRecordContext } from 'react-admin'

const MONTHS = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

const ShowWrapper = () => {
    const record = useRecordContext();
    const [chartData, setChartData] = useState(null);
    const [totalIncome, setTotalIncome] = useState(null);
    useEffect(() => {
        if(record){
            setTotalIncome(record.products.reduce((total, product) => total + product.income, 0));
            setChartData(record.products.map(e => {
                return {
                    name: e.name,
                    income: e.income
                }
            }));
        }
    }, [record]);

    return (
        <Card sx={{width: '100%', padding: '24px 0'}}>
            <Typography display='flex' justifyContent='center' variant='h4'>Statistics of {record ? `${MONTHS[record.monthId-1]} ${record.year}` : null}</Typography>
            <Typography display='flex' justifyContent='center' variant='h6'>Total income: {totalIncome ? totalIncome : null} €</Typography>
            <Box sx={{height: '300px'}}>
                <PieChart chartData={chartData}/>
            </Box>
        </Card>
    )
}

export default ShowWrapper
