import React from 'react'
import { Show, SimpleShowLayout, TextField, ArrayField, Datagrid, BooleanField, NumberField } from 'react-admin'

const ReviewsShow = () => {
    return (
        <Show>
            <SimpleShowLayout>
                <TextField source="id" />
                <TextField source="productId" />
                <ArrayField source="reviews">
                    <Datagrid>
                        <TextField source="customerId" />
                        <TextField source="comment" />
                        <TextField source="date" />
                        <NumberField source="rating" />
                        <BooleanField source="checked" />
                    </Datagrid>
                </ArrayField>
            </SimpleShowLayout>
        </Show>
    )
}

export default ReviewsShow
