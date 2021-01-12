import React from "react";
import { PizzaProvider } from "./data/PizzaContext";
import MakePizza from "./views/MakePizza";

const App = () => {
  return (
    <PizzaProvider>
      <MakePizza />
    </PizzaProvider>
  );
};

export default App;
