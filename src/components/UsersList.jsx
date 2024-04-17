import React from 'react'
import { List, Datagrid, TextField, EmailField, BooleanField } from 'react-admin'

const UsersList = () => {
    return (
        <List>
            <Datagrid>
                <TextField source="id" />
                <TextField source="username" />
                <TextField source="fullname" />
                <EmailField source="email" />
                <BooleanField source="disabled" />
            </Datagrid>
        </List>
    )
}

export default UsersList