// #1. Every Component must be having a return statement
// #2. Inside the return there must be only one parent tag
// #3. Every component name must be starting with a capital letter
// #4. Every component must be having a export statement.

import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Product } from "./components/Product";
import { Textbox } from "./components/Textbox";
import { Products } from "./pages/Products";
import { Register } from "./pages/Register";

const App = () => {
  const headerConfig = {
    title: 'Optum'
  };
  return (
    <>
      <Header headerConfig={headerConfig} />
      <div className="container">
        {/* <Register/> */}
        <Products/>
      </div>
      <Footer />
    </>
  )
}

export default App;

