import {createSlice} from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart",
    initialState:{
        products:[],
        quantity: 0,
        total: 0
    } ,
    reducers:{

    }
});
export const selectCart = state => state.cart.cart;
export default cartSlice.reducer;