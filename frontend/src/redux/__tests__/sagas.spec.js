import { fetchAllAddressesSaga } from "../sagas";
import { ExpansionPanelActions } from "@material-ui/core";
import { all, takeLeading, put, call } from "redux-saga/effects";
import { FETCH_ALL_ADDRESSES_REQUEST, FETCH_ALL_ADDRESSES_SUCCESS, FETCH_ALL_ADDRESSES_FAILURE } from "../actions";
import { fetchAllAddressses } from "../../services/AddressService";
describe("fetchAllAddressesSaga", () => {
    describe("API call successful", () => {
        it("fetches the data from the API, and dispatches a SUCCESS object", () => {
            const gen = fetchAllAddressesSaga();
            expect(gen.next().value).toEqual(call(fetchAllAddressses));
            const result = "foo";
            expect(gen.next(result).value).toEqual(put({
                type: FETCH_ALL_ADDRESSES_SUCCESS,
                payload: result
            }));
        });
    });

    describe("API call failure", () => {
        it("fetches the data from the API, and dispatches a FAILURE object", () => {
            const gen = fetchAllAddressesSaga();
            expect(gen.next().value).toEqual(call(fetchAllAddressses));
            const result = "error";
            expect(gen.throw(result).value).toEqual(put({
                type: FETCH_ALL_ADDRESSES_FAILURE,
                payload: result
            }));
        });
    });
})