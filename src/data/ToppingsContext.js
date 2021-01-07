import React, {useState, createContext, useEffect} from 'react';
import Toppings from './RequesHelper';

export const ToppingsContext = createContext();


export const ToppingsProvider = (props) => {
    const [toppingsList, setToppingsList] = useState([])
    useEffect(() => {
        
        const toppingsCall = async () => {
            try {
                const res = await Toppings('https://run.mocky.io/v3/71f5fd01-aad6-4593-9a18-d81f36530319');
                console.log("Context API Test", res.data)
                return setToppingsList(res.data)
            } catch (err) {
                return "Oh no! Something went wrong."
            }
        };
    }, [toppingsList])
    return (
        <ToppingsContext.Provider value={[toppingsList, setToppingsList]}>
            {props.children}
        </ToppingsContext.Provider>
    )

}
