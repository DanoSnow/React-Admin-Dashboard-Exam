import React, { useState, useEffect } from 'react'
import { Container, Box, Typography } from "@mui/material"
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
        }
    }, [record]);

    return (
        <Container>
            <Typography display='flex' justifyContent='center' my={2} variant='h4'>Statistics of {record ? `${MONTHS[record.monthId-1]} ${record.year}` : null}</Typography>
            <Typography display='flex' justifyContent='center' variant='h6'>Total income: {totalIncome ? totalIncome : null} €</Typography>
            <Box sx={{height: '300px'}}>
                <PieChart />
            </Box>
        </Container>
    )
}

export default ShowWrapper
