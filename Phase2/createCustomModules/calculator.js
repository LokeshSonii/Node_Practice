const math = require('./mathUtil');

// console.log(math.Sum(10, 5)); // 15
// console.log(math.Subtract(10, 5)); // 5
// console.log(math.Multiply(10, 5)); // 50
// console.log(math.Divide(10, 5)); // 2


console.log(math.Sum(10, 15)); // 25
console.log(math.Subtract(10, 15)); // -5
console.log(math.Multiply(10, 15)); // 150
console.log(math.Divide(10, 15)); // 0.6666666666666666
console.log(Math.round(40 / 15)); // 3  // if the round figure is equal or greater than 0.5, it will be rounded to 1, otherwise it will be rounded to 0.
console.log(Math.floor(40 / 15)); // 2 // it will always round down to the nearest integer
