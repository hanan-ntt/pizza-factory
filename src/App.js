import React from "react";
import { PizzaProvider } from "./data/PizzaContext";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ROUTES from "./Routes";
import MakePizza from "./views/MakePizza";
import ViewOrder from "./views/ViewOrder";

const App = () => {
  return (
    <PizzaProvider>
      <Router>
        <Switch>  
          <Route path={ROUTES.HOME} exact component={MakePizza} />
          <Route path={ROUTES.ORDER} exact component={ViewOrder} />
        </Switch>
      </Router>
    </PizzaProvider>
  );
};

export default App;
