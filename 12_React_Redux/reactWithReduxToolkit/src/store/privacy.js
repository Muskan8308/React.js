import { createSlice } from "@reduxjs/toolkit";

// 2nd slice : for privacy toggle
export const privacySlice = createSlice ({
    name : "privacy",
    initialState : false,
    reducers : {
        privacyToggle : (state) => {
           return state = !state;
        }
    }
})

export const privacyActions = privacySlice.actions;


