class CustomerOrder {
  constructor(orderID, customerName, orderAmount) {
    this.orderID = orderID;
    this.customerName = customerName;
    this.orderAmount = orderAmount;
  }

  inputOrder() {
    return `${this.orderID}``${this.customerName}``${this.orderAmount}`;
  }

  static calculateTotal(orders) {
    const total = orders.reduce((sum, order) => sum + order.orderAmount, 0);
    console.log(`Total Order Amount: ${total}`);
    return total;
  }
}

const order1 = new CustomerOrder(1, "Avishek", 223);
const order2 = new CustomerOrder(2, "Ripon", 676);
const order3 = new CustomerOrder(3, "Kajol", 343);
const order4 = new CustomerOrder(4, "Babor", 623);

console.log(order1);
console.log(order2);
console.log(order3);
console.log(order4);

CustomerOrder.calculateTotal([order1, order2, order3, order4]);
