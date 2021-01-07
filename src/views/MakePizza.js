import {React, useEffect, useState} from 'react';
import Toppings from '../data/RequesHelper';
import CheckboxComponent from '../components/CheckboxComponent';
import RadioComponent from '../components/RadioComponent';
import pizzaOrders from '../data/OrderStatus';
import calculatePizzaDuration from '../services/CalculatePizzaDuration';
import {useHistory} from 'react-router-dom';

const MakePizza = () => {
    const history = useHistory();
    console.log("History, ", history);
    const [toppingsData, setToppingsData] = useState([]); 
    const [basesData, setBasesData] = useState([]);

    const [toppingChoice, setToppingChoice] = useState([]);
    const [baseChoice, setBaseChoice] = useState('');

    const fetchData = async () => {
        const data1 = await Toppings('https://run.mocky.io/v3/71f5fd01-aad6-4593-9a18-d81f36530319');
        const data2 = await Toppings('https://run.mocky.io/v3/82566527-cf08-46a2-9930-4bb520fe74a1');
        setToppingsData(data1);
        setBasesData(data2);
        console.log("data1: ", data1);
        console.log("data2: ", data2);
        console.log("toppings data (in api call): ", toppingsData);
        console.log("bases data (in api call): ", basesData);
      };
      useEffect(() => {
        fetchData();
      }, []);

    const handleRadioInput = (chosenBase) =>{
        setBaseChoice(chosenBase);
    }
    

    const handleCheckboxInput = (chosenToppings) =>{
        setToppingChoice(chosenToppings);
        // setToppingChoice(prevToopingChoice => [...prevToopingChoice, {chosenToppings}]);
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        if (toppingChoice.length > 3) alert("Up to 3 toppings allowed! Please amend.");
        if (baseChoice === "") alert("Please choose a base!");

        let orderID = Math.floor(Math.random() * Math.floor(100))
        if (toppingChoice.length <=3 && baseChoice !== "") {
            pizzaOrders.push({
                id: orderID,
                duration: calculatePizzaDuration(baseChoice, toppingChoice.length)
            });

            console.log(pizzaOrders);
            history.push(`/order/${orderID}`);

        }
    }
    
    return(
        <div>
            <h1>Welcome to NTT Pizza Palace</h1>
            <h3>Customise your Pizza! </h3>
            <form method="POST" action="/order" onSubmit={handleSubmit}>
                <CheckboxComponent type="toppings" data={toppingsData} input={handleCheckboxInput} /> <br/>
                <RadioComponent type="base" data={basesData} input={handleRadioInput} /> <br/>
                <button type="submit"> Submit </button>
            </form>
        </div>
    );
}

export default MakePizza;