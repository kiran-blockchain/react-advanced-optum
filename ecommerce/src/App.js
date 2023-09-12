// #1. Every Component must be having a return statement
// #2. Inside the return there must be only one parent tag
// #3. Every component name must be starting with a capital letter
// #4. Every component must be having a export statement.

import { useState } from "react";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Product } from "./components/Product";
import { Textbox } from "./components/Textbox";
import { Products } from "./pages/Products";
import { Register } from "./pages/Register";
import { CartContext } from "./providers/cartProvider";
import { ShowCount } from "./components/Counter/showCount";
import { Increment } from "./components/Counter/increment";
import { Provider } from "react-redux";
import store from "./store"

const App = () => {
  const headerConfig = {
    title: 'Optum'
  };
  const [cart, setCart] = useState([])
  const addItemsToCart = (item) => {

    setCart([...cart, item]);
  };
  const removeItemsFromCart = (item) => {
    const index = cart.findIndex(x => x.id == item.id);
    if (index > -1) {
      const newCart = [...cart];
      newCart.splice(index, 1)
      setCart(newCart)
    }
  };
  return (
    <Provider store={store}>
      <div>
        <Increment />
        <ShowCount />
      </div>
    </Provider>
    // <CartContext.Provider value={{cartItems:cart,
    // addToCart:addItemsToCart,
    // removeFromCart:removeItemsFromCart}}>
    //   <Header headerConfig={headerConfig} />
    //   <div className="container">
    //     {/* <Register/> */}
    //     <Products />
    //   </div>
    //   <Footer />
    // </CartContext.Provider>
  )
}

export default App;

