import React from 'react';
import { Typography } from '@material-ui/core';
import ProductEditForm from './ProductEditForm';
import { createEmptyProduct } from '../../redux/selectors';
import ProductEditFormLayout from '../layouts/ProductEditFormLayout';



const emptyData = createEmptyProduct();

export default function CreateProduct() {
    return <ProductEditFormLayout>
        <Typography variant="h2" gutterBottom>Create Product </Typography>
        <ProductEditForm productData={emptyData} />
    </ProductEditFormLayout>;
}