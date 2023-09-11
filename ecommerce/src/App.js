// #1. Every Component must be having a return statement
// #2. Inside the return there must be only one parent tag
// #3. Every component name must be starting with a capital letter
// #4. Every component must be having a export statement.

import { Footer } from "./components/Footer";
import { Header } from "./components/Header";

const App = () => {
  const orgName ='Optum';
  return (
    <>
      <Header companyName={orgName} />
      <h1>Welcome to react</h1>
      <Footer />
    </>
  )
}

export default App;

