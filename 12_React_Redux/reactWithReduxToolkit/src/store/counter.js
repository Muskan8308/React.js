import { createSlice } from "@reduxjs/toolkit";

// Slices of store
// 1st slice - for counter
export const counterSlice = createSlice ({
    name : "counter",
    initialState : {counterVal : 0},
    reducers : {
        increment : (state) => {
            state.counterVal++;
        },
        decrement : (state) => {
            state.counterVal--;
        },
        add : (state, action) => {
            state.counterVal += Number(action.payload);
        },
        subtract : (state, action) => {
            state.counterVal -= Number (action.payload.num);
        }
    }
})

export const counterActions = counterSlice.actions;


