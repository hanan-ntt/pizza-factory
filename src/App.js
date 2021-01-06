import {React, useEffect} from 'react';
// import {pizzaToppings, pizzaBases} from './data';
import Toppings from './data/ToppingsData';

// const axios = require('axios').default;

const App = () => {
    const fetchData = async () => {
        const toppingsData = await Toppings('https://run.mocky.io/v3/71f5fd01-aad6-4593-9a18-d81f36530319');
        const basesData = await Toppings('https://run.mocky.io/v3/82566527-cf08-46a2-9930-4bb520fe74a1');
        console.log("toppings data: ", toppingsData);
        console.log("bases data: ", basesData);
      };
      useEffect(() => {
        fetchData();
      }, []);


    return (
        <h1>Hello World</h1>
    )
};

export default App;
