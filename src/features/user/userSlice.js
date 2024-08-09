import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getAddress } from "../../services/apiGeocoding";
// import { build } from "vite";

function getPosition() {
    return new Promise(function (resolve, reject) {
        navigator.geolocation.getCurrentPosition(resolve, reject);
    });
}

// async function fetchAddress() {
//     // 1) We get the user's geolocation position
//     const positionObj = await getPosition();
//     const position = {
//         latitude: positionObj.coords.latitude,
//         longitude: positionObj.coords.longitude,
//     };

//     // 2) Then we use a reverse geocoding API to get a description of
//     //  the user's address, so we can display it the order form, so that the user can correct it if wrong
//     const addressObj = await getAddress(position);
//     const address = `${addressObj?.locality}, ${addressObj?.city} ${addressObj?.postcode}, ${addressObj?.countryName}`;

//     // 3) Then we return an object with the data that we are interested in
//     return { position, address };
// }

export const fetchAdressThunk = createAsyncThunk(
    "user/fetchAddress",
    async function () {
        // 1) We get the user's geolocation position
        const positionObj = await getPosition();
        const position = {
            latitude: positionObj.coords.latitude,
            longitude: positionObj.coords.longitude,
        };

        // 2) Then we use a reverse geocoding API to get a description of
        //  the user's address, so we can display it the order form, so that the user can correct it if wrong
        const addressObj = await getAddress(position);
        const address = `${addressObj?.locality}, ${addressObj?.city} ${addressObj?.postcode}, ${addressObj?.countryName}`;

        // 3) Then we return an object with the data that we are interested in
        // Payload of the FULFILLED state
        return { position, address };
    },
);

const initialState = {
    username: "",
    status: "idle",
    position: {},
    address: "",
    errors: "",
};

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        updateName(state, action) {
            state.username = action.payload;
        },
        logOut(state) {
            state.username = "";
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchAdressThunk.pending, (state) => {
                state.status = "loading";
            })
            .addCase(fetchAdressThunk.fulfilled, (state, action) => {
                state.position = action.payload.position;
                state.address = action.payload.address;
                state.status = "idle";
            })
            .addCase(fetchAdressThunk.rejected, (state) => {
                state.status = "error";
                // state.errors = action.error.message;
                state.errors =
                    "There was an error getting your address. Make sure you fill up this field.";
            });
    },
});

export const { updateName, logOut } = userSlice.actions;

export const getUsername = (state) => state.user.username;

export default userSlice.reducer;
