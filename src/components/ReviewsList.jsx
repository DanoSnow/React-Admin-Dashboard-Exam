import React from 'react'
import { List, Datagrid, TextField, ArrayField, SimpleList } from 'react-admin'

const ReviewsList = () => {
    return (
        <List>
            <Datagrid rowClick='show'>
                <TextField source="id" />
                <TextField source="productId" />
                <ArrayField source="reviews">
                    <SimpleList
                        primaryText={record => record.comment}
                        secondaryText={record => record.date}
                        tertiaryText={record => record.rating}
                    />
                </ArrayField>
            </Datagrid>
        </List>
    )
}

export default ReviewsList
