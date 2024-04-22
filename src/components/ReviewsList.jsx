import React from 'react'
import { List, Datagrid, TextField, ArrayField, SingleFieldList } from 'react-admin'

const ReviewsList = () => {
    return (
        <List>
            <Datagrid>
                <TextField source="id" />
                <TextField source="productId" />
                <ArrayField source="reviews">
                    <SingleFieldList>
                        <TextField source="comment" />
                    </SingleFieldList>
                </ArrayField>
            </Datagrid>
        </List>
    )
}

export default ReviewsList
