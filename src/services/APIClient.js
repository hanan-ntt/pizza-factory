import axios from 'axios';

export function getToppings () {
    return axios.get('https://run.mocky.io/v3/71f5fd01-aad6-4593-9a18-d81f36530319');
}

export function getBases () {
    return axios.get('https://run.mocky.io/v3/82566527-cf08-46a2-9930-4bb520fe74a1');
}