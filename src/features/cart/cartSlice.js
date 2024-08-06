import { createSlice } from "@reduxjs/toolkit";
// const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
    cart: [],

    // cart: [
    //     {
    //         pizzaId: 12,
    //         name: "Margherita",
    //         quantity: 2,
    //         unitPrice: 10,
    //         totalPrice: 20,
    //     },
    // ],
};

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addItem(state, action) {
            // payload = newItem
            state.cart.push(action.payload);
        },
        deleteItem(state, action) {
            // payload = pizzaId
            state.cart = state.cart.filter(
                (pizza) => pizza.pizzaId !== action.payload,
            );
        },
        increaseItemQuantity(state, action) {
            // payload = pizzaId
            const item = state.cart.find(
                (pizza) => pizza.pizzaId === action.payload,
            );
            item.quantity++;
            item.totalPrice = item.quantity * item.unitPrice;
        },
        decreaseItemQuantity(state, action) {
            // payload = pizzaId
            const item = state.cart.find(
                (pizza) => pizza.pizzaId === action.payload,
            );
            item.quantity--;
            item.totalPrice = item.quantity * item.unitPrice;
        },
        clearCart(state) {
            state.cart = [];
        },
    },
});

export const {
    addItem,
    deleteItem,
    increaseItemQuantity,
    decreaseItemQuantity,
    clearCart,
} = cartSlice.actions;

export default cartSlice.reducer;
