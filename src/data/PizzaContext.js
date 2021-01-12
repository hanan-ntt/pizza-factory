import React, { createContext, useState, useEffect } from "react";
import { fetchPizzaBases, fetchPizzaToppings } from "./PizzaApiFactory";



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
