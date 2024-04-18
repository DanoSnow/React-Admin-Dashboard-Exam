import React from 'react'
import { List, Datagrid, TextField, NumberField, ArrayField, ChipField, SingleFieldList } from 'react-admin'

const SalesList = () => {
    return (
        <List>
            <Datagrid rowClick="show">
                <TextField source="id" />
                <NumberField source="year" />
                <NumberField source="monthId" />
                <ArrayField source="products">
                    <SingleFieldList>
                        <ChipField source="name" />
                    </SingleFieldList>
                </ArrayField>
            </Datagrid>
        </List>
    )
}

export default SalesList
