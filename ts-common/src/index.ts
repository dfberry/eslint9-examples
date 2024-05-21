const fs = require("fs").promises;
const path = require("path");

const myDir = path.json(__dirname, "my-dir");
console.log(myDir)

class MathFunctions {
  add(a, b) {
    return a + b;
  }

  subtract(a, b) {
    return a - b;
  }

  multiply(a, b) {
    return a * b;
  }

  divide(a, b) {
    if (b === 0) {
      throw new Error("Cannot divide by zero");
    }
    return a / b;
  }
}

// Create an instance of the class
const mathFunctions = new MathFunctions();

// Call the methods and log the results
console.log(mathFunctions.add(5, 3)); // Outputs: 8
console.log(mathFunctions.subtract(5, 3)); // Outputs: 2
console.log(mathFunctions.multiply(5, 3)); // Outputs: 15
console.log(mathFunctions.divide(6, 3)); // Outputs: 2

// Introduct error ESLint typically catches
// let x = 5;
// if (x == "5") {
//   console.log(
//     "This is an error because we're using == instead of === for comparison.",
//   );
// }
