import React, { createContext, useState, useEffect } from "react";
import { fetchPizzaBases, fetchPizzaToppings } from "./PizzaApiFactory";

/** 
 * @name Pizza Context Store
 * @requires Fetch Pizza Bases and Fetch Pizza Toppings
 * @returns A global data store for the app, this can be used anywhere in the app to retrieve any backend data and order data
 */

export const PizzaContext = createContext();

export const PizzaProvider = (props) => {
  const [toppings, setToppings] = useState([]);
  const [bases, setBases] = useState([]);
  const [selectedToppings, setSelectedToppings] = useState([]);
  const [selectedBase, setSelectedBase] = useState();
  const [pizzaOrder, setPizzaOrder] = useState({});
  useEffect(() => {
    const initialisePizzaOptions = async () => {
      const fetchToppings = await fetchPizzaToppings();
      const fetchBases = await fetchPizzaBases();
      setToppings(fetchToppings);
      setBases(fetchBases);
    };
    initialisePizzaOptions();
  }, []);

  return (
    <PizzaContext.Provider
      value={[
        toppings,
        bases,
        selectedToppings,
        setSelectedToppings,
        selectedBase,
        setSelectedBase,
        pizzaOrder,
        setPizzaOrder,
      ]}
    >
      {props.children}
    </PizzaContext.Provider>
  );
};
