import { createSlice } from "@reduxjs/toolkit";

const initialState = JSON.parse(localStorage.getItem('cart')) ?? [];

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers : {
        addToCart(state, action){
            //jab user add to cart karega tho (state means initialState) (.push and action and payload means jo bhi aapp action perform karoge add to cart click karne pe )
    
            state.push(action.payload)   
                
        },
        deleteFromCart(state,action){
            return state.filter(item => item.id != action.payload.id);
        }
    }
})

export const {addToCart, deleteFromCart} = cartSlice.actions;

export default cartSlice.reducer;