const stringUtils = require('./stringUtil');

console.log(stringUtils.ToUpper('hello world')); // Output: HELLO WORLD
console.log(stringUtils.Reverse('hello world')); // Output: dlrow olleh
console.log(stringUtils.CountWords('hello world')); // Output: 2

console.log(stringUtils.CountWords(' hello world ')); // Output: 4
// This method does not count the extra white spaces, its better approach
console.log(stringUtils.AccuratelyCountWords(' hello world ')); // Output: 2