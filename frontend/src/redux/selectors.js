export function createEmptyAddress() {
    return {
        name: "",
        phone: "",
    }
}

export function isUpdateLoading(state) {
    return state.loadingFlags.productUpdate;
}


function filterAddresses(state) {

    const addresses = Object.values(state.addresses);
    if (state.filter.enabled && state.filter.items.length > 0) {
        return addresses.filter(v => state.filter.items.includes(v.name));
    }
    return addresses;
}
export function selectAllAddresses(state) {

    const addresses = filterAddresses(state);
    return addresses.sort((a, b) => {
        return (a.name < b.name) ? -1 : 1;
    });

}

export function selectAddressByAddressId(state, id) {

    console.log(state, id);
    return state.addresses[id];
}

export function selectErrors(state) {
    return state.errors.errors;
}

