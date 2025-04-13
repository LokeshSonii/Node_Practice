function Sum(a, b) {
    return a + b;
}

// This method is used when arguments are passed as a string and we want to convert them to numbers before adding them
// function Sum(a, b) {
//     return Number(a) + Number(b);
// };


function Subtract(a, b) {
    return a - b;
}

function Multiply(a, b) {
    return a * b;
}

function Divide(a, b) {
    return a / b;
}

module.exports = {
    Sum,
    Subtract,
    Multiply,
    Divide
}