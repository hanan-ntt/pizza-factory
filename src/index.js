import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ROUTES from "./Routes";
import MakePizza from "./views/MakePizza";
import ViewOrder from "./views/ViewOrder";

ReactDOM.render(
    <Router>
      <Switch>  
        <App />
        <Route path={ROUTES.HOME} exact component={MakePizza} />
        <Route path={ROUTES.ORDER} exact component={ViewOrder} />
      </Switch>
    </Router>
, document.getElementById("root"));
