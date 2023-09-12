import { createSlice } from "@reduxjs/toolkit"


const initialState = {
    cartItems: []
}

const cartSlice = createSlice({
    name: 'cart',
    initialState:initialState,
    reducers: {
        //actions
        addToCart: (state, action) => {
            const newCartItems = state.cartItems.concat(action.payload);
           return {...state,cartItems:newCartItems}
        },
        removeFromCart:(state,action)=>{
         
        },
        
    }
});
//actions wil be consumed by components
export const{addToCart,removeFromCart,} = cartSlice.actions;
//reducers will be consumed by store.
export default cartSlice.reducer;