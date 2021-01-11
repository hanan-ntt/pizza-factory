const PizzaOrders = [];

const checkOrderStatus = (pizzaId) => {
  for (var i = 0; i < PizzaOrders.length; i++) {
    if (PizzaOrders[i].id === pizzaId) return "Pizza still being cooked!";
  }
  return "Uh oh! Looks like we made a spaghetti of your order!";
};

export default PizzaOrders;
export { checkOrderStatus };
