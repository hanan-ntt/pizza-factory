import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ROUTES from "./Routes";
import MakePizza from "./views/MakePizza";
import ViewOrder from "./views/ViewOrder";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path={ROUTES.HOME} exact component={MakePizza} />
        <Route path={ROUTES.ORDER} exact component={ViewOrder} />
      </Switch>
    </Router>
  );
};

export default App
