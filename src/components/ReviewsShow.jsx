import React from 'react'
import { Show, SimpleShowLayout, TextField, ArrayField, Datagrid, BooleanField, NumberField } from 'react-admin'
import MarkChatReadIcon from '@mui/icons-material/MarkChatRead';
import MarkChatUnreadIcon from '@mui/icons-material/MarkChatUnread';

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
                        <BooleanField sx={{display: 'flex', justifyContent: 'center'}} source="checked" TrueIcon={MarkChatReadIcon} FalseIcon={MarkChatUnreadIcon} />
                    </Datagrid>
                </ArrayField>
            </SimpleShowLayout>
        </Show>
    )
}

export default ReviewsShow
