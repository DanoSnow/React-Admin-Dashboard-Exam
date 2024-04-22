import React from 'react'
import { useRecordContext } from 'react-admin'
import { Card, Typography, Table, TableContainer, Box, TableHead, TableRow, TableCell, TableBody, List, ListItem } from "@mui/material"

const CustomerShow = () => {
    const record = useRecordContext();
    
    return (
        <Card sx={{width: '100%', padding: '24px 16px', display: 'flex', flexDirection: 'column'}}>
            <Typography display='flex' justifyContent='center' variant='h4'>{record ? record.name: null}</Typography>
            <Typography variant='p' sx={{color: 'gray'}}>Email:</Typography>
            <Typography variant='p'>{record ? record.email: null}</Typography>
            <Typography variant='p' sx={{color: 'gray'}}>Phone:</Typography>
            <Typography variant='p'>{record ? record.phone : null}</Typography>
            <Typography variant='p' sx={{color: 'gray'}}>Address:</Typography>
            <Typography variant='p'>{record ? `${record.address.street} city ${record.address.city} state ${record.address.state} zipcode ${record.address.zipCode}` : null}</Typography>
            <Typography variant='p' sx={{color: 'gray'}}>Registered at:</Typography>
            <Typography variant='p'>{record ? record.registeredAt : null}</Typography>
            <Typography variant='p' sx={{color: 'gray'}}>Orders:</Typography>
            <TableContainer component={Box}>
                <Table aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell><Typography variant='h6'>Id</Typography></TableCell>
                            <TableCell><Typography variant='h6'>Date</Typography></TableCell>
                            <TableCell><Typography variant='h6'>Items</Typography></TableCell>
                            <TableCell><Typography variant='h6'>Total</Typography></TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {record ? record.orders.map(e => 
                            <TableRow key={e.id}>
                                <TableCell component="th" scope="row">{e.id}</TableCell>
                                <TableCell>{e.date}</TableCell>
                                <TableCell>
                                    {e.items.map(e_ => 
                                        <List>
                                            <ListItem disablePadding>
                                                <Typography variant='p'>{e_.product}</Typography>
                                            </ListItem>
                                            <ListItem disablePadding>
                                                <Typography variant='p'>Quantity: {e_.quantity}</Typography>
                                            </ListItem>
                                            <ListItem disablePadding>
                                                <Typography variant='p'>Price: {e_.price} €</Typography>
                                            </ListItem>
                                        </List>
                                    )}
                                </TableCell>
                                <TableCell>{e.total} €</TableCell>
                            </TableRow>
                        ) : null}
                    </TableBody>
                </Table>
            </TableContainer>
            <Typography variant='p' sx={{color: 'gray'}}>Notes:</Typography>
            <Typography variant='p'>{record ? record.notes : null}</Typography>
        </Card>
    )
}

export default CustomerShow
