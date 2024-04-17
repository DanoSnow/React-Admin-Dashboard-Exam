import React from 'react'
import { Card, CardContent, Typography } from '@mui/material'
import UserIcon from "@mui/icons-material/Group"

const DashboardCard = ({ header, content, icon, body=null}) => {
    return (
        <Card>
            <CardContent>
                <Typography variant='h5'>{header}</Typography>
                <Typography variant='h7'>{content}</Typography>
            </CardContent>
        </Card>
    )
}

export default DashboardCard