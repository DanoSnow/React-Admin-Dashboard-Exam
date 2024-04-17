import React from 'react'
import { Card, CardContent, Typography, SvgIcon, Grid, Container } from '@mui/material'
import Divider from '@mui/material/Divider';

const DashboardCard = ({ header, content, icon, body=null}) => {
    const renderBody = body ?
    <div><Divider />{body.map((e, index) => <div key={index}><Container sx={{padding: 2}}>{e}</Container></div>)}</div> :
    null;
    return (
        <Card>
            <CardContent>
                <Grid container spacing={2}>
                    <Grid item alignItems='center' alignContent='center' display='flex' xs={2}>
                        <SvgIcon component={icon} />
                    </Grid>
                    <Grid item textAlign='right' width='auto' xs={10}>
                        <Typography variant='h5'>{header}</Typography>
                        <Typography variant='h7'>{content}</Typography>
                    </Grid>
                </Grid>
            </CardContent>
            {renderBody}
        </Card>
    )
}

export default DashboardCard