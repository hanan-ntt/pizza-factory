import React, { useContext } from "react";
import CheckboxComponent from "../components/CheckboxComponent";
import { useHistory } from "react-router-dom";
import RadioComponent from "../components/RadioComponent";
import { PizzaContext } from "../data/PizzaContext";
import CreateOrder from "../classes/CreateOrder";

/** 
 * @name Make Pizza View
 * @requires Toppings Data and Base Data
 * @returns A view for the user to create a pizza using toppings and base
 */


const MakePizza = () => {
  const [
    toppings,
    bases,
    selectedToppings,
    setSelectedToppings,
    selectedBase,
    setSelectedBase,
    pizzaOrder,
    setPizzaOrder,
  ] = useContext(PizzaContext);
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    const newOrder = new CreateOrder(selectedBase, selectedToppings);
    setPizzaOrder(newOrder.orderDetails);
    history.push("/order/81");
  };
  console.log(pizzaOrder);
  return (
    <>
      <h1>Welcome to NTT Pizza Palace</h1>
      <h3>Customise your Pizza! </h3>
      <form method="POST" action="/order" onSubmit={handleSubmit}>
        <fieldset>
          <CheckboxComponent
            title="toppings"
            data={toppings}
            max={3}
            checkboxSelection={setSelectedToppings}
          />{" "}
          <br />
          <RadioComponent
            title="bases"
            data={bases}
            radioButtonSelection={setSelectedBase}
          />{" "}
          <br />
          <button type="submit"> Submit </button>
        </fieldset>
      </form>
      <h1>You have selected following toppings: </h1>
      {selectedToppings.length > 0 ? (
        selectedToppings.map((top) => <li key={top}>{top.toUpperCase()}</li>)
      ) : (
        <h3>You have not selected any toppings yet.</h3>
      )}
      <br />
      <h1>You have selected following base: </h1>
      {selectedToppings.length !== "" ? (
        <h5>{selectedBase}</h5>
      ) : (
        <h3>You have not selected a base.</h3>
      )}
    </>
  );
};

export default MakePizza;
