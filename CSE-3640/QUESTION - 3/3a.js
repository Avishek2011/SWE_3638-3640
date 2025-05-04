const fs = require("fs");

function writeFile(orders, filePath) {
  const data = orders
    .map(
      (order) =>
        `Order ID: ${order.orderID}, Customer Name: ${order.customerName}, Order Amount: ${order.orderAmount}`
    )
    .join("\n");

  fs.writeFile(filePath, data, (err) => {
    if (err) {
      console.error("Error writing to file:", err);
    } else {
      console.log("Orders written to file successfully.");
    }
  });
}

const orders = [
  { orderID: 1, customerName: "Avishek", orderAmount: 223 },
  { orderID: 2, customerName: "Ripon", orderAmount: 676 },
  { orderID: 3, customerName: "Kajol", orderAmount: 343 },
  { orderID: 4, customerName: "Babor", orderAmount: 623 },
];

writeFile(orders, "orders.txt");
