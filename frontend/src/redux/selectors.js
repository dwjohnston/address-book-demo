export function createEmptyAddress() {
    return {
        name: "",
        phone: "",
    }
}

export function isUpdateLoading(state) {
    return state.loadingFlags.productUpdate;
}

export function selectAllAddresses(state) {
    return Object.values(state.addresses)
}

export function selectAddressByAddressId(state, id) {

    console.log(state, id);
    return state.addresses[id];
}

export function selectErrors(state) {
    return state.errors.errors;
}

