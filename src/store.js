import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./features/user/userSlice";
import cartReducer from "./features/cart/cartSlice";
import visibilityReducer from "./features/user/visibilitySlice";

const store = configureStore({
    reducer: {
        user: userReducer,
        cart: cartReducer,
        visibility: visibilityReducer,
    },
});

export default store;
