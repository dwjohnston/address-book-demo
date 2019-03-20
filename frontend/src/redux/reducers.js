import { combineReducers } from "redux";
import { FETCH_ALL_ADDRESSES_SUCCESS, UPDATE_ADDRESS_REQUEST, UPDATE_ADDRESS_FAILURE, UPDATE_ADDRESS_SUCCESS, DELETE_ADDRESS_SUCCESS, CLEAR_ERRORS_REQUEST, CLEAR_ERRORS_SUCCESS, FETCH_CURRENCY_RATE_SUCCESS, UPDATE_FILTER_SUCCESS } from "./actions";


const initialState = {};
export function addressesReducer(state = initialState, action) {
    const { type, payload } = action;

    switch (type) {
        case FETCH_ALL_ADDRESSES_SUCCESS: {
            return payload;
        }

        case UPDATE_ADDRESS_SUCCESS: {
            //Add/replace product to existing product index
            return { ...state, [payload.id]: payload }
        }

        case DELETE_ADDRESS_SUCCESS: {
            const newState = { ...state };
            delete newState[payload.id];
            return newState;
        }


        default: return state;
    }
}

const initialLoadingState = {
    updateProduct: false,
}
/**
 * This is obviously not a sustainable way to handle loading flags, but works for a quick demo. 
 * 
 * Better solution is a modified version of this: 
 * https://medium.com/stashaway-engineering/react-redux-tips-better-way-to-handle-loading-flags-in-your-reducers-afda42a804c6
 */
export function loadingFlagsReducer(state = initialLoadingState, action) {
    const { type, payload } = action;
    switch (type) {
        case UPDATE_ADDRESS_REQUEST: return { ...state, updateProduct: true }
        case UPDATE_ADDRESS_SUCCESS: return { ...state, updateProduct: false }
        case UPDATE_ADDRESS_FAILURE: return { ...state, updateProduct: false }
        default: return state;

    }
}

const initialErrorState = {
    errors: null,
}

export function errorsReducer(state = initialErrorState, action) {
    const { type, payload } = action;

    if (type.split('_').pop() === 'FAILURE') {
        return {
            errors: payload
        }
    }

    if (type === CLEAR_ERRORS_SUCCESS) {
        return initialErrorState;
    }

    return state;
}


const initialFilterState = {
    enabled: false,
    items: [],
}

export function filterReducer(state = initialFilterState, action) {
    const { type, payload } = action;
    if (type === UPDATE_FILTER_SUCCESS) {
        return payload;
    }

    return state;
}

const rootReducer = combineReducers({
    addresses: addressesReducer,
    loadingFlags: loadingFlagsReducer,
    errors: errorsReducer,
    filter: filterReducer,
});


export default rootReducer; 