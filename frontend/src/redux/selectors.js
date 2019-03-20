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

    const addresses = Object.values(state.addresses);

    if (state.filter.enabled && state.filter.items.length > 0) {
        return addresses.filter(v => state.filter.items.includes(v.name));
    }

    return addresses;

}

export function selectAddressByAddressId(state, id) {

    console.log(state, id);
    return state.addresses[id];
}

export function selectErrors(state) {
    return state.errors.errors;
}

