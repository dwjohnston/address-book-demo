
export const FETCH_ALL_ADDRESSES_REQUEST =
    'FETCH_ALL_ADDRESSES_REQUEST';
export const FETCH_ALL_ADDRESSES_SUCCESS =
    'FETCH_ALL_ADDRESSES_SUCCESS';
export const FETCH_ALL_ADDRESSES_FAILURE =
    'FETCH_ALL_ADDRESSES_FAILURE';

export function requestFetchAllAddresses() {
    return {
        type: FETCH_ALL_ADDRESSES_REQUEST,
        payload: null
    }
}

export const UPDATE_ADDRESS_REQUEST =
    'UPDATE_ADDRESS_REQUEST';
export const UPDATE_ADDRESS_SUCCESS =
    'UPDATE_ADDRESS_SUCCESS';
export const UPDATE_ADDRESS_FAILURE =
    'UPDATE_ADDRESS_FAILURE';

export function requestUpdateAddress(addressData) {
    return {
        type: UPDATE_ADDRESS_REQUEST,
        payload: addressData,
    }
}


export const DELETE_ADDRESS_REQUEST =
    'DELETE_ADDRESS_REQUEST';
export const DELETE_ADDRESS_SUCCESS =
    'DELETE_ADDRESS_SUCCESS';
export const DELETE_ADDRESS_FAILURE =
    'DELETE_ADDRESS_FAILURE';

export function requestDeleteAddress(address) {
    return {
        type: DELETE_ADDRESS_REQUEST,
        payload: address,
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


