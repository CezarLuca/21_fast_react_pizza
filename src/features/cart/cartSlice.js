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
            // payload = newPizzaItem
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

// These are called selectors. They are used to extract data from the Redux store state.
// They are used in the components to get the data from the store.
// They can be optimized using the reselect library.
// https://redux.js.org/recipes/computing-derived-data
// https://redux.js.org/recipes/structuring-reducers/reusing-reducer-logic
// https://redux.js.org/recipes/structuring-reducers/using-memoized-selectors
// https://redux.js.org/recipes/structuring-reducers/immutable-update-patterns

export const getCart = (state) => state.cart.cart;

export const getTotalCartQuantity = (state) =>
    state.cart.cart.reduce((sum, pizza) => sum + pizza.quantity, 0);

export const getTotalCartPrice = (state) =>
    state.cart.cart.reduce((sum, pizza) => sum + pizza.totalPrice, 0);
