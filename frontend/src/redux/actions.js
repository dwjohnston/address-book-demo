
export const FETCH_ALL_PRODUCTS_REQUEST =
    'FETCH_ALL_PRODUCTS_REQUEST';
export const FETCH_ALL_PRODUCTS_SUCCESS =
    'FETCH_ALL_PRODUCTS_SUCCESS';
export const FETCH_ALL_PRODUCTS_FAILURE =
    'FETCH_ALL_PRODUCTS_FAILURE';

export function requestFetchAllProducts() {
    return {
        type: FETCH_ALL_PRODUCTS_REQUEST,
        payload: null
    }
}

export const UPDATE_PRODUCT_REQUEST =
    'UPDATE_PRODUCT_REQUEST';
export const UPDATE_PRODUCT_SUCCESS =
    'UPDATE_PRODUCT_SUCCESS';
export const UPDATE_PRODUCT_FAILURE =
    'UPDATE_PRODUCT_FAILURE';

export function requestUpdateProduct(productData) {
    return {
        type: UPDATE_PRODUCT_REQUEST,
        payload: productData,
    }
}


export const DELETE_PRODUCT_REQUEST =
    'DELETE_PRODUCT_REQUEST';
export const DELETE_PRODUCT_SUCCESS =
    'DELETE_PRODUCT_SUCCESS';
export const DELETE_PRODUCT_FAILURE =
    'QUIZE_FETCH_FAILURE';

export function requestDeleteProduct(product) {
    return {
        type: DELETE_PRODUCT_REQUEST,
        payload: product,
    }
}


export const CLEAR_ERRORS_REQUEST =
    'CLEAR_ERRORS_REQUEST';
export const CLEAR_ERRORS_SUCCESS =
    'CLEAR_ERRORS_SUCCESS';
export const CLEAR_ERRORS_FAILURE =
    'CLEAR_ERRORS_FAILURE';

export function requestClearErrors() {
    return {
        type: CLEAR_ERRORS_REQUEST,
        payload: null
    }
}



export const FETCH_CURRENCY_RATE_REQUEST =
    'FETCH_CURRENCY_RATE_REQUEST';
export const FETCH_CURRENCY_RATE_SUCCESS =
    'FETCH_CURRENCY_RATE_SUCCESS';
export const FETCH_CURRENCY_RATE_FAILURE =
    'FETCH_CURRENCY_RATE_FAILURE';


export function requestFetchCurrencyRate() {
    return {
        type: FETCH_CURRENCY_RATE_REQUEST
    }
}