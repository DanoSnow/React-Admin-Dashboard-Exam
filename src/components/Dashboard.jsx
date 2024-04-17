import React from 'react'
import { Card, CardContent, CardHeader, Grid } from "@mui/material";
import LineChart from './LineChart';
import DashboardCard from './DashboardCard';

const Dashboard = () => {
    return (
        <Card>
            <CardHeader title="Welcome to the administration" />
            <CardContent>
                <Grid container spacing={2}>
                    <Grid item md={3}>
                        <DashboardCard header="Month sales" content="4278 US$" />
                    </Grid>
                    <Grid item md={3}>
                        <DashboardCard header="New orders" content="18" />
                    </Grid>
                    <Grid item md={3}>
                        <DashboardCard header="Pending reviews" content="3" />
                    </Grid>
                    <Grid item md={3}>
                        <DashboardCard header="New customers" content="4" />
                    </Grid>
                </Grid>
                <div style={{width: '800px', height: '500px'}}><LineChart /></div>
            </CardContent>
        </Card>
    )
}

export default Dashboard
