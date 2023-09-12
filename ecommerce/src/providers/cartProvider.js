import { createContext } from "react";

const cartCtx = { 
    cartItems: [], 
    addToCart: () => { } 
};
export const CartContext = createContext(cartCtx)