const fs = require('fs');
const path = require('path');
const dir = __dirname;
const dirPath = path.join(__dirname, 'textFiles');

// mkdirSync creates a directory if it does not exist
//fs.mkdirSync(path.join(dir, 'practice'));

// CASE 1:
//This is will create the file directly on the root directory of the project
// fs.writeFileSync('Sample1.txt', 'Hello World 1!');

// CASE 2:
//This is will create the file inside the current directory (fileSystem)
// fs.writeFileSync(path.join(dir, 'Sample2.txt'), 'Hello World 2!');

// CASE 3:
//This is will create the file inside the specified directory folder(textFiles)
// fs.writeFileSync(path.join(dirPath, 'Sample3.txt'), 'Hello World !');


// CASE 4:
// This is will create the file inside the specified directory folder(textFiles) and check if the folder exists or not before writing the file,
// if not it will create the folder first and then write the file inside it

// try {
//   // Make sure the folder exists before writing
//   if (!fs.existsSync(dirPath)) {
//     fs.mkdirSync(dirPath);
//   }

//   fs.writeFileSync(path.join(dirPath, 'Sample5.txt'), 'Hello World 55555!');
//   console.log('File created successfully!');
// } catch (err) {
//   console.error('❌ Error writing file:', err.message);
// }


// WRITE MULTIPLE FILES IN A FOLDER
// for (let i = 1; i <= 5; i++) {
//     fs.writeFileSync(path.join(dirPath, `Sample${i}.txt`), `Hello World ${i}!`);    
// }
