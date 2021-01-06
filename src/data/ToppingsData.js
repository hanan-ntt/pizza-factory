import {MakeApiCall} from '../services/HttpClient';

const Toppings = async (props) => { 
    const response = await MakeApiCall(props);
    const payload = await response;
    return payload;
};

const Bases = async (props) => {
    const response = await MakeApiCall(props);
    const payload = await response;
    return payload;
};

export default (Toppings, Bases);