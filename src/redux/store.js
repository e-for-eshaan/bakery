import { createStore } from "redux";
import isEqual from "lodash"
// Define the initial state
const initialState = {
    cartItems: [],
};

// Define the reducer function
const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case "ADD_TO_CART":
            return {
                ...state,
                cartItems: [...state.cartItems, action.payload],
            };
        case "REMOVE_FROM_CART":
            const indexToRemove = state.cartItems.findIndex(
                (item) => {
                    return item.title === action.payload.title
                }
            );
            if (indexToRemove !== -1) {
                const updatedCartItems = [...state.cartItems];
                updatedCartItems.splice(indexToRemove, 1);
                return {
                    ...state,
                    cartItems: updatedCartItems,
                };
            }
            return state;
        default:
            return state;
    }
};

// Create the Redux store
const store = createStore(cartReducer);

export default store;
