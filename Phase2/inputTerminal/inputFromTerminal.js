// console.log("process.argv", process.argv); // Output: hello world
// console.log("process.argv[0]", process.argv[0]); // Output: hello world
// console.log("process.argv[1]", process.argv[1]); // Output: hello world

const math = require('../createCustomModules/mathUtil'); // Importing the math module
const args = process.argv.slice(2); // Get command line arguments

// console.log(math.Sum(4,5))
// console.log(math.Sum(args[0], args[1])); // 45 //because args[0] and args[1] are strings, they will be concatenated instead of added
// console.log(math.Sum(Number(args[0]), Number(args[1])));

let operation = args[0]; // The first argument is the operation (e.g., 'add', 'subtract', etc.)
let num1 = Number(args[1]); // The second argument is the first number
let num2 = Number(args[2]); // The third argument is the second number
switch(operation){
    case 'add':
        console.log(math.Sum(num1, num2)); // Call the Sum function from the math module
        break;
    case 'subtract':
        console.log(math.Subtract(num1, num2)); // Call the Subtract function from the math module
        break;
    case 'multiply':
        console.log(math.Multiply(num1, num2)); // Call the Multiply function from the math module
        break;
    case 'divide':
        console.log(math.Divide(num1, num2)); // Call the Divide function from the math module
        break;
    default:
        console.log('Invalid operation. Please use add, subtract, multiply, or divide.');
        break;
}

// We can also call it like Commmand Line Tool (CLT) or Command Line Application (CLA).
// I didn't practice this Command Line Tool much.

// The above methods in which we are taking inputs from command line is also know as CLI (Command Line Interface) method.
// The above code is a simple calculator that takes command line arguments to perform basic arithmetic operations. It uses the `mathUtil` module to perform the calculations. The user can specify the operation (add, subtract, multiply, divide) and the two numbers as command line arguments. The code then performs the specified operation and prints the result to the console.
