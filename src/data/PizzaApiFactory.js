import { pizzaOptionsBase, pizzaOptionsTopping, pizzaOrderStatus } from '../constants';
import fetchBackEndData from '../services/FetchBackendData';

/** 
 * @name Pizza Api Factory
 * @requires Fetch Backend Data
 * @returns Fetch Pizza Toppings, Fetch Pizza Base, Fetch Order Status
 */

export const fetchPizzaToppings = async () => {
        const res = await fetchBackEndData(pizzaOptionsTopping);
        if(Array.isArray(res)) {
            return res;
        } else {
            return [];
        }
    };

export const fetchPizzaBases = async () => {
        const res = await fetchBackEndData(pizzaOptionsBase);
        if(Array.isArray(res)) {
            return res;
        } else {
            return [];
        }
};

export const fetchOrderStatus = async () => {
    const res = await fetchBackEndData(pizzaOrderStatus);
    if(Array.isArray(res)) {
        return res;
    } else {
        return [];
    }
};