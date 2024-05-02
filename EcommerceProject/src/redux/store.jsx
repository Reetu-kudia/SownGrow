import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cartSlice";

export const store = configureStore({
    //reducer ek function hota hai react me
    reducer :{
        cart : cartSlice
    },
    devTools : true
})