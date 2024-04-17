import React from 'react'
import { Datagrid, List, TextField, DateField } from 'react-admin'

const PostsList = () => {
    return (
        <List>
            <Datagrid>
                <TextField source="id" />
                <TextField source="title" />
                <TextField source="body" />
                <DateField source="publishedAt" />
                <TextField source="userId" reference="users" />
            </Datagrid>
        </List>
    )
}

export default PostsList
