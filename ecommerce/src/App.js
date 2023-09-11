// #1. Every Component must be having a return statement
// #2. Inside the return there must be only one parent tag
// #3. Every component name must be starting with a capital letter
// #4. Every component must be having a export statement.

import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Textbox } from "./components/Textbox";

const App = () => {
  const headerConfig = {
    title: 'Optum'
  };
  const firstNameConfig = {
    id: 'firstName',
    value: '',
    name: 'firstName',
    label: 'First Name'
  }
  return (
    <>
      <Header headerConfig={headerConfig} />
      <form  className="mt-5 needs-validation">
        <Textbox textboxConfig={firstNameConfig} />
      </form>
      <Footer />
    </>
  )
}

export default App;

