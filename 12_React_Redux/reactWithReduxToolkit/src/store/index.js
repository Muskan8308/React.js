import {configureStore} from "@reduxjs/toolkit"
import { privacySlice } from "./privacy";
import { counterSlice } from "./counter";

// Store - all slices are combined here
const counterStore = configureStore({
    reducer : {                   // Reducer function  
        counter : counterSlice.reducer,
        privacy : privacySlice.reducer
    }
});

export default counterStore;


/*

const INITIAL_VALUE = {
    counter : 0,
    privacy : false
}

// Reducer function
const counterReducer = (store = INITIAL_VALUE, action) => {
    if(action.type == "INCREMENT")
        return {...store, counter : store.counter + 1, privacy : store.privacy};
    else if(action.type == "DECREMENT")
        return {...store, counter : store.counter - 1}; // Spread operator se pura store de diya aur jo value update krni h vo de di.
    else if(action.type == "ADD")
        return {...store, counter : store.counter + Number(action.payload.num)};
    else if(action.type == "SUBSTRACT")
        return {...store, counter : store.counter - Number(action.payload.num)};
    else if(action.type == "PRIVACY_TOGGLE")
        return {...store, privacy : !store.privacy};
  
    return store;
}
*/