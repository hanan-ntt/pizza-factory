import { pizzaOptionsBase, pizzaOptionsTopping } from '../constants';
import pizzaApiFactory from './PizzaApiFactory';


export const fetchPizzaToppings = async () => {
        const res = await pizzaApiFactory(pizzaOptionsTopping);
        if(Array.isArray(res)) {
            return res;
        } else {
            return [];
        }
    };

export const fetchPizzaBases = async () => {
        const res = await pizzaApiFactory(pizzaOptionsBase);
        if(Array.isArray(res)) {
            return res;
        } else {
            return [];
        }
};
