import React from 'react';
import { Typography } from '@material-ui/core';
import AddressEditForm from './AddressEditForm';
import { createEmptyAddress } from '../../redux/selectors';
import AddressEditFormLayout from '../layouts/AddressEditFormLayout';



const emptyData = createEmptyAddress();

function CreateAddress() {
    return <AddressEditFormLayout>
        <Typography variant="h2" gutterBottom>Create Address </Typography>
        <AddressEditForm addressData={emptyData} />
    </AddressEditFormLayout>;
}

export default CreateAddress; 