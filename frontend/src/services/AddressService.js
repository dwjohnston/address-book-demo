import axios from "axios";
import { globName } from "../util/globName";

const BASE_URL = '/api';
const URI_ADDRESSES = '/addresses';

const defaultOptions = {

}

export const makeApiCall = async function (uri, method = "GET", options = defaultOptions) {
    try {
        const response = await axios({
            ...options,
            method: method,
            url: BASE_URL + uri,
        });
        return response.data;
    } catch (err) {
        //We will handle this in the middleware
        throw err;
    }
}
export async function fetchAllAddressses() {
    return makeApiCall(URI_ADDRESSES);
}

export async function postAddress(address) {
    return makeApiCall(URI_ADDRESSES, "POST", {
        data: address
    });
}


export async function deleteAddress(address) {
    return makeApiCall(`${URI_ADDRESSES}/${globName(address.name)}`, "DELETE");
}