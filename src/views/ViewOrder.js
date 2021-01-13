import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { checkOrderStatus } from "../data/OrderStatus";
import { PizzaContext } from "../data/PizzaContext";
import calculatePizzaDuration from "../services/CalculatePizzaDuration";

/** 
 * @name View Order Page
 * @requires Pizza Order objects, accessed through Context API store
 * @returns A page for the user to view their order details
 */

const ViewOrder = () => {
  const {pizzaOrder} =  useContext(PizzaContext);
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
