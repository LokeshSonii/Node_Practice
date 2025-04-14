const fs = require('fs');
const path = require('path'); // Import the path module
const dirPath = path.join(__dirname, '../../Phase1/fileSystem/textFiles', 'Sample5.txt'); // Get the directory path

fs.readFile(dirPath, 'utf8', (err, data) => { // Read the file asynchronously
    if (err) {
        console.error('Error reading file:', err); // Log error if any
        return;
    }
    console.log('File content:', data); // Log the file content
});

console.log('File read initiated...'); // it will be executed before the file read completes
// The above code demonstrates how to read a file asynchronously in Node.js using the fs module. It uses the readFile method to read the contents of a file located at a specified path. The callback function is executed once the file has been read, allowing you to handle the file content or any errors that may occur during the reading process. The console.log statement outside the readFile method shows that the file reading is initiated, and it will be executed before the file read completes due to the asynchronous nature of the operation.


// Practice 2:

// setTimeout(() => {
//     console.log('Third...');
// }, 3000);
// setTimeout(() => {
//     console.log('First...');
// }, 1000);
// setTimeout(() => {
//     console.log('Second...');
// }, 2000);


// // Practice 3:
// console.log('1');

// setTimeout(() => console.log('2'), 0);

// Promise.resolve().then(() => console.log('3'));

// console.log('4');
