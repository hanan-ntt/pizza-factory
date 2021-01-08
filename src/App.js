import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  } from 'react-router-dom';
import { ToppingsProvider } from './data/ToppingsContext';
import ROUTES from './Routes';
import MakePizza from './views/MakePizza';
import ViewOrder from './views/ViewOrder';

const App = () => {
  return (
   // <ToppingsProvider>
     // <MakePizza />
      <Router>
        <Switch>
          <Route 
            path={ROUTES.HOME}
            exact
            component={MakePizza}
          />
          <Route 
            path={ROUTES.ORDER}
            exact
            component={ViewOrder}
          />
        </Switch>
      </Router>
   // </ToppingsProvider>
  )
};

export default App;
