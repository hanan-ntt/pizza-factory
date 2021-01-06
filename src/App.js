import React, {useState, useEffect} from 'react';
import PizzaView from './Pages/PizzaView';
import {getBases, getToppings} from './services/APIClient';
const App = () => {
    const [toppingsList, setToppingsList] = useState([]);
    const [basesList, setbasesList] = useState([])
    useEffect(() => {
        let componentMounted = true;
        getToppings().then(response => {
            if(componentMounted) {
               setToppingsList(response.data)
            }
          });
          getBases().then(response => {
              if(componentMounted) {
                setbasesList(response.data)
              }
          })
        return () => componentMounted = false;
      }, [])
    return (
        <>
            <PizzaView toppings={toppingsList} bases={basesList} />
        </>
    )
};

export default App;
