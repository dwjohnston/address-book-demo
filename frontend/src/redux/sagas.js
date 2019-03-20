import { all, takeLeading, put, call } from "redux-saga/effects";
import {
    FETCH_ALL_ADDRESSES_REQUEST,
    FETCH_ALL_ADDRESSES_SUCCESS,
    FETCH_ALL_ADDRESSES_FAILURE,
    UPDATE_ADDRESS_REQUEST,
    UPDATE_ADDRESS_SUCCESS,
    UPDATE_ADDRESS_FAILURE,
    DELETE_ADDRESS_REQUEST,
    DELETE_ADDRESS_FAILURE,
    DELETE_ADDRESS_SUCCESS,
    CLEAR_ERRORS_REQUEST,
    CLEAR_ERRORS_FAILURE,
    CLEAR_ERRORS_SUCCESS,
} from "./actions";
import { fetchAllAddressses, postAddress, deleteAddress } from "../services/ProductService";

export function* fetchAllAddressesSaga() {
    yield takeLeading(FETCH_ALL_ADDRESSES_REQUEST, function* () {
        try {
            const result = yield call(fetchAllAddressses);
            yield put({
                type: FETCH_ALL_ADDRESSES_SUCCESS,
                payload: result
            })
        }
        catch (err) {

            console.error(err);
            yield put({
                type: FETCH_ALL_ADDRESSES_FAILURE,
                payload: err
            });
        }
    });
}

export function* updateAddressSaga() {
    yield takeLeading(UPDATE_ADDRESS_REQUEST, function* (action) {
        try {
            const { payload } = action;
            let result;

            result = yield call(postAddress, payload);

            yield put({
                type: UPDATE_ADDRESS_SUCCESS,
                payload: result
            })
        }
        catch (err) {

            console.error(err);
            yield put({
                type: UPDATE_ADDRESS_FAILURE,
                payload: err
            });
        }
    });
}

export function* deleteAddressSaga() {
    yield takeLeading(DELETE_ADDRESS_REQUEST, function* (action) {
        try {
            const { payload } = action;
            const result = yield call(deleteAddress, payload);

            yield put({
                type: DELETE_ADDRESS_SUCCESS,
                payload: result
            })
        }
        catch (err) {

            console.error(err);
            yield put({
                type: DELETE_ADDRESS_FAILURE,
                payload: err
            });
        }
    });
}

export function* clearErrorsSaga() {
    yield takeLeading(CLEAR_ERRORS_REQUEST, function* () {
        try {
            yield put({
                type: CLEAR_ERRORS_SUCCESS,
            })
        }
        catch (err) {
            yield put({
                type: CLEAR_ERRORS_FAILURE,
                payload: err
            });
        }
    });
}

export default function* rootSaga() {
    yield all([
        fetchAllAddressesSaga(),
        updateAddressSaga(),
        deleteAddressSaga(),
        clearErrorsSaga(),
    ])
}