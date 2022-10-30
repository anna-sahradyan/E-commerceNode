import {createSlice} from "@reduxjs/toolkit";
import {toast} from "react-toastify";

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        products: localStorage.getItem("products") ? JSON.parse(localStorage.getItem("products")) : [],
        quantity: 0,
        total: 0
    },
    reducers: {
        addProduct: (state, action) => {
            state.quantity += 1;
            state.products.push(action.payload);
            state.total += action.payload.price * action.payload.quantity;
            toast.success("added a new product to cart", {
                position: "bottom-left",
            })
            localStorage.setItem("products", JSON.stringify(state.products));

        },

    },
});
export const {addProduct} = cartSlice.actions;
// export const selectCart = state => state.cart.cart;
export default cartSlice.reducer;