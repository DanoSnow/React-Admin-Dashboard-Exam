import React from 'react'
import { Show, SimpleShowLayout, ArrayField, Datagrid, NumberField, TextField } from 'react-admin'

const SalesShow = () => {
    return (
        <Show>
            <SimpleShowLayout>
                <TextField source="id" />
                <NumberField source="year" />
                <TextField source="monthId" />
                <ArrayField source="products">
                    <Datagrid>
                        <TextField source="name" />
                        <NumberField source="quantity" />
                        <NumberField source="income" />
                    </Datagrid>
                </ArrayField>
            </SimpleShowLayout>
        </Show>
    )
}

export default SalesShow
