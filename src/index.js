import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import ToppingsProvider from './context/PizzaContext';

ReactDOM.render(
  <ToppingsProvider>
    <App />
  </ToppingsProvider>,
  document.getElementById('root')
);

