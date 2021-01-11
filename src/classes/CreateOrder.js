class CreateOrder {
  constructor(base, selectedToppings) {
    this.base = base;
    this.selectedToppings = selectedToppings;
  }
  createOrderID() {
    return Math.floor(Math.random() * 1000);
  }

  get orderDetails() {
    return {
      base: this.base,
      selectedToppings: this.selectedToppings,
      orderID: this.createOrderID,
    };
  }
}

export default CreateOrder;
