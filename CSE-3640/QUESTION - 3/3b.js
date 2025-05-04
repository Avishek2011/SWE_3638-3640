const fs = require("fs");

function readFile(filePath) {
  fs.readFile(filePath, "utf8", (err, data) => {
    if (err) {
      console.error("Error reading from file:", err);
    } else {
      console.log("Orders read from file:");
      console.log(data);
    }
  });
}

readFile("orders.txt");
