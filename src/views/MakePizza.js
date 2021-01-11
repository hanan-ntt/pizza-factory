import React, { useState, useEffect } from "react";
import { fetchPizzaBases, fetchPizzaToppings } from "../data/PizzaData";
import CheckboxComponent from "../components/CheckboxComponent";
import { useHistory } from "react-router-dom";
import RadioComponent from "../components/RadioComponent";

const MakePizza = () => {
  const history = useHistory();
  const [toppings, setToppings] = useState([]);
  const [bases, setBases] = useState([]);
  useEffect(() => {
    const initialisePizzaOptions = async () => {
      const fetchToppings = await fetchPizzaToppings();
      const fetchBases = await fetchPizzaBases();
      setToppings(fetchToppings);
      setBases(fetchBases);
    };
    initialisePizzaOptions();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    history.push("/order/81");
  };
  return (
    <>
      <h1>Welcome to NTT Pizza Palace</h1>
      <h3>Customise your Pizza! </h3>
      <form method="POST" action="/order" onSubmit={handleSubmit}>
        <fieldset>
          <CheckboxComponent title="toppings" data={toppings} min={0} max={3} />{" "}
          <br />
          <RadioComponent title="bases" data={bases} /> <br />
          <button type="submit"> Submit </button>
        </fieldset>
      </form>
    </>
  );
};

export default MakePizza;
