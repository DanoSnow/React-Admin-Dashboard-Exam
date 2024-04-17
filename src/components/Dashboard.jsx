import React from 'react'
import { Card, CardContent, CardHeader, Grid, Container } from "@mui/material";
import LineChart from './LineChart';
import DashboardCard from './DashboardCard';
import EuroIcon from '@mui/icons-material/Euro';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import MessageIcon from '@mui/icons-material/Message';
import PersonAddRoundedIcon from '@mui/icons-material/PersonAddRounded';

const Dashboard = () => {
    return (
        <Card>
            <CardHeader title="Welcome to the administration" />
            <CardContent>
                <Grid container spacing={2}>
                    <Grid item md={6}>
                        <Container>
                            <Grid container md={12} spacing={2}>
                                <Grid item md={6}>
                                    <DashboardCard header="Month sales" content="1538 €" icon={EuroIcon} />
                                </Grid>
                                <Grid item md={6}>
                                    <DashboardCard header="New orders" content="18" icon={ShoppingCartIcon} />
                                </Grid>
                                <Grid item md={12} sx={{height: '300px', width: '100%'}}>
                                    <LineChart />
                                </Grid>
                            </Grid>
                        </Container>
                    </Grid>
                    <Grid item md={3}>
                        <DashboardCard header="Pending reviews" content="3" icon={MessageIcon}
                        body={['Pending reviews body 1', 'Pending reviews body 2', 'Pending reviews body 3']} />
                    </Grid>
                    <Grid item md={3}>
                        <DashboardCard header="New customers" content="4" icon={PersonAddRoundedIcon}
                        body={['New customers body 1', 'New customers body 2', 'New customers body 3', 'New customers body 4']} />
                    </Grid>
                </Grid>
            </CardContent>
        </Card>
    )
}

export default Dashboard
