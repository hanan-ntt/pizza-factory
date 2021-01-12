import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { checkOrderStatus } from "../data/OrderStatus";
import { PizzaContext } from "../data/PizzaContext";
import calculatePizzaDuration from "../services/CalculatePizzaDuration";

const ViewOrder = () => {
  const pizzaOrder =  useContext(PizzaContext.pizzaOrder);
  let duration = calculatePizzaDuration();
  let { orderID } = useParams();
  const pizzaStatus = checkOrderStatus(orderID);
  return (
    <div>
      <h1> Your order number is: {pizzaOrder.orderID} </h1>
      <p>It will take {duration} minutes</p>
      {pizzaStatus}
    </div>
  );
};

export default ViewOrder;
