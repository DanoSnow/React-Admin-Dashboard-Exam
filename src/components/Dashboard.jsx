import React, { useEffect, useState } from 'react'
import { Card, CardContent, CardHeader, Grid, Container } from "@mui/material";
import LineChart from './LineChart';
import DashboardCard from './DashboardCard';
import EuroIcon from '@mui/icons-material/Euro';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import MessageIcon from '@mui/icons-material/Message';
import PersonAddRoundedIcon from '@mui/icons-material/PersonAddRounded';

const Dashboard = () => {
    const [chartData, setChartData] = useState([{
        year: 0,
        monthId: 0,
        totalIncome: 0
    }]);
    useEffect(() => {
        const fetchData = async () => {
            try{
                const response = await fetch('http://localhost:3000/sales');
                if(!response.ok){
                    throw new Error('Failed to fetch data');
                }
                const data = await response.json();
                setChartData(data.map(e => {
                    const totalIncome = e.products.reduce((total, product) => total + product.income, 0);
                    return {
                        year: e.year,
                        monthId: e.monthId,
                        totalIncome: totalIncome
                    };
                }));
            } catch(error){
                console.error('Error fetching data:', error);
            }
        };
        fetchData();
    }, []);

    return (
        <Card>
            <CardHeader title="Welcome to the administration" />
            <CardContent>
                <Grid container spacing={2}>
                    <Grid item md={6} sm={12}>
                        <Container>
                            <Grid container spacing={2}>
                                <Grid item xs={12} sm={6} md={6}>
                                    <DashboardCard header="Month sales" content={`${chartData[chartData.length-1].totalIncome} €`} icon={EuroIcon} />
                                </Grid>
                                <Grid item xs={12} sm={6} md={6}>
                                    <DashboardCard header="New orders" content="18" icon={ShoppingCartIcon} />
                                </Grid>
                                <Grid item xs={12} sx={{height: '300px', width: 'auto'}}>
                                    <LineChart chartData={chartData} />
                                </Grid>
                            </Grid>
                        </Container>
                    </Grid>
                    <Grid item xs={12} md={3} sm={6}>
                        <DashboardCard header="Pending reviews" content="3" icon={MessageIcon}
                        body={['Pending reviews body 1', 'Pending reviews body 2', 'Pending reviews body 3']} />
                    </Grid>
                    <Grid item xs={12} md={3} sm={6}>
                        <DashboardCard header="New customers" content="4" icon={PersonAddRoundedIcon}
                        body={['New customers body 1', 'New customers body 2', 'New customers body 3', 'New customers body 4']} />
                    </Grid>
                </Grid>
            </CardContent>
        </Card>
    )
}

export default Dashboard
