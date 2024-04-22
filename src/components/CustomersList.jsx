import React from 'react'
import { List, Datagrid, TextField, EmailField, SimpleList } from 'react-admin';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

const CustomersList = () => {
    const matches = useMediaQuery((theme) => theme.breakpoints.up('md'));
    return (
        <List>
            {matches ? 
                <Datagrid rowClick="show">
                    <TextField source="id" />
                    <TextField source="name" />
                    <EmailField source="email" />
                    <TextField source="phone" />
                    <TextField source="registeredAt" />
                </Datagrid>
                : 
                 <SimpleList
                    primaryText={(record) => record.name}
                    secondaryText={(record) => record.email}
                    tertiaryText={(record) => record.phone}
                />
            }
            
        </List>
    )
}

export default CustomersList
