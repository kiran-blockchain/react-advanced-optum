import { createContext } from "react";

const cartCtx = { 
    cartItems: [], 
    addToCart: () => { },
    removeFromCart:()=>{}
};
export const CartContext = createContext(cartCtx)