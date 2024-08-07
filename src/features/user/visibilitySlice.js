import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    logOutVisible: false,
};

const visibilitySlice = createSlice({
    name: "visibility",
    initialState,
    reducers: {
        showLogOut: (state) => {
            state.logOutVisible = true;
        },
        hideLogOut: (state) => {
            state.logOutVisible = false;
        },
    },
});

export const { showLogOut, hideLogOut } = visibilitySlice.actions;
export default visibilitySlice.reducer;
