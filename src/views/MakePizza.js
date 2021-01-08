import React, { useState, useContext, useEffect} from 'react';
import {fetchPizzaBases, fetchPizzaToppings, toppingsData} from '../data/PizzaData';
import CheckboxComponent from '../components/CheckboxComponent';
import RadioComponent from '../components/RadioComponent';
import pizzaOrders from '../data/OrderStatus';
import calculatePizzaDuration from '../services/CalculatePizzaDuration';
import {useHistory} from 'react-router-dom';
//import { ToppingsContext } from '../data/ToppingsContext';

const MakePizza = () => {
    const history = useHistory();
    const [pizzaOptions, setPizzaOptions] = useState([]);
    useEffect(() => {
        const initialisePizzaOptions = async () => {
            const [toppings, bases] = await Promise.all(
                [fetchPizzaToppings(), fetchPizzaBases()]
            );
            return setPizzaOptions({
                toppings,
                bases
            });
        };
        initialisePizzaOptions();
    }, [])
    const {toppings, bases} = pizzaOptions;
    const [toppingChoice, setToppingChoice] = useState([]);
    // const handleRadioInput = (chosenBase) =>{
    //     setBaseChoice(chosenBase);
    // }
    const handleCheckboxInput = (chosenToppings) =>{
        setToppingChoice(chosenToppings);
    }

    // const handleSubmit = (event) => {
    //     event.preventDefault()
    //     if (toppingChoice.length > 3) alert("Up to 3 toppings allowed! Please amend.");
    //     if (baseChoice === "") alert("Please choose a base!");

    //     let orderID = Math.floor(Math.random() * Math.floor(100))
    //     if (toppingChoice.length <=3 && baseChoice !== "") {
    //         pizzaOrders.push({
    //             id: orderID,
    //             duration: calculatePizzaDuration(baseChoice, toppingChoice.length)
    //         });

    //         console.log(pizzaOrders);
    //         history.push(`/order/${orderID}`);

    //     }
    // }
    
    return(
        // <div>
        //     <h1>Welcome to NTT Pizza Palace</h1>
        //     <h3>Customise your Pizza! </h3>
        //     <form method="POST" action="/order" onSubmit={handleSubmit}>
        //         <CheckboxComponent type="toppings" data={toppingsData} input={handleCheckboxInput} /> <br/>
        //         <RadioComponent type="base" data={basesData} input={handleRadioInput} /> <br/>
        //         <button type="submit"> Submit </button>
        //     </form>
        // </div>
        <div>
            <h1>Welcome to NTT Pizza Palace</h1>
            <h3>Customise your Pizza! </h3>
            <form method="POST" action="/order">
                <CheckboxComponent type="toppings" data={toppings} input={handleCheckboxInput} /> <br/>
                <button type="submit"> Submit </button>
            </form>
            {bases}
        </div>
    );
}

export default MakePizza;