import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./counterSlice";
import cartSlice from "./cartSlice";
import productSlice from "./productSlice";


export default configureStore({
    reducer:{
        counter:counterSlice,
        cart:cartSlice,
        product:productSlice
    }
})