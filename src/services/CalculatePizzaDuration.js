import OrderStatus from '../data/GetAPIData';
let base = '';
let numbOfToppings = [];

const calculatePizzaDuration = () => {
    orderDestails();
    let duration = 0; 
    if (base === "stuffed crust") duration += 600; // 10 mins = 600 seconds
    else if (base === "thin crust") duration += 480; // 8 mins = 480 seconds
    else duration += 900; // 15 mins = 900 seconds
    
    if (numbOfToppings === 1) duration += 30; // 30 seconds extra for 1 topping
    else if (numbOfToppings === 2) duration += 45; // 45 seconds exrta for 2 toppings
    else duration += 60; // 60 seconds extra for 3 toppings
    
    return duration / 60;
}


const orderDestails = async () => {
    const orderStatus = await OrderStatus('https://run.mocky.io/v3/495af456-7cf6-4132-9c4f-558af777cf6d');
    base = orderStatus.base;
    numbOfToppings = orderStatus.toppings;
}
export default calculatePizzaDuration;