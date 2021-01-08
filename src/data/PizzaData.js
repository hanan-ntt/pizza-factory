import getAPIData from './GetAPIData';

export const fetchPizzaToppings = async () => {
    try {
        const res = await getAPIData('https://run.mocky.io/v3/71f5fd01-aad6-4593-9a18-d81f36530319');
        return res;
    } catch (error) {
        if(error){
            return [];
        }
    }
};

export const fetchPizzaBases = async () => {
    try {
        const res = await getAPIData('https://run.mocky.io/v3/82566527-cf08-46a2-9930-4bb520fe74a1');
        return res;
    } catch (error) {
        if(error) {
            return [];
        }
        
    }
}