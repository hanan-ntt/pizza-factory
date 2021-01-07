import React from 'react';
import { useParams
} from "react-router-dom";
import {checkOrderStatus} from '../data/OrderStatus';
import calculatePizzaDuration from '../services/CalculatePizzaDuration';

const ViewOrder = () => {
    let duration = calculatePizzaDuration();
    let { orderID } = useParams();
    const pizzaStatus = checkOrderStatus(orderID)
    return(
        <div>
            <h1> Your order number is: {orderID} </h1>
            <p>It will take {duration} minutes</p>
            {pizzaStatus}
        </div>
    )
}

export default ViewOrder;