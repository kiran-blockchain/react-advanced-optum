// #1. Every Component must be having a return statement
// #2. Inside the return there must be only one parent tag
// #3. Every component name must be starting with a capital letter
// #4. Every component must be having a export statement.

import { useEffect, useState } from "react";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Product } from "./components/Product";
import { Textbox } from "./components/Textbox";
import { Products } from "./pages/Products";
import { Register } from "./pages/Register";
import { CartContext } from "./providers/cartProvider";
import { ShowCount } from "./components/Counter/showCount";
import { Increment } from "./components/Counter/increment";
import { Provider, useDispatch } from "react-redux";
import store from "./store"
import { Cart } from "./components/Cart";
import { fetchProducts } from "./store/productSlice";
import { Login } from "./pages/Login";

const App = () => {
  const headerConfig = {
    title: 'Optum'
  };
  //const dispatch = useDispatch();
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
      {/* <div>
        <Increment />
        <ShowCount />
      </div>

      <CartContext.Provider value={{
        cartItems: cart,
        addToCart: addItemsToCart,
        removeFromCart: removeItemsFromCart
      }}>
        <Header headerConfig={headerConfig} />
        <div className="container">
         
          <div class="row">
            <div class="col-md-7">
              <Products />
            </div>
            <div class="col-md-4">
              <Cart />
            </div>
          </div>
          </div>
          <Footer />
      </CartContext.Provider> */}
      <Login/>
    </Provider>
  )
}

export default App;

