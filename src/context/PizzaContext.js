import React, { createContext, useState } from 'react';
import toppingsData from '../common/data';

export const ToppingsContext = createContext({toppings: toppingsData});

const ToppingProvider = (props) => {
    const [toppingsList, setToppingsList] = useState(toppingsData)
    return (
        <ToppingsContext.Provider value={{toppings: toppingsList}}>
            {props.children}
        </ToppingsContext.Provider>
    )
}

export default ToppingProvider;