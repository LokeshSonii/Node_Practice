const fs = require('fs');
const path = require('path');
const dir = __dirname;
const folderPath = path.join(dir, 'textFiles');
const filePath = path.join(folderPath, 'Sample5.txt');

// This method reads the contents of a file asynchronously
// The callback function is called once the file has been read
// fs.readFile(filePath, 'utf-8', (err, data) => {
//     if (err) {
//         console.error('❌ Error reading file:', err.message);
//         return;
//     }
//     console.log(data);
// });

// This method reads the contents of a file synchronously
// It blocks the execution until the file is read
// const data = fs.readFileSync(filePath, 'utf-8');
// console.log(data);


// READ MULTIPLE FILES IN A FOLDER
fs.readdir(folderPath, (err, files)=>{
    if(err){
        console.error('❌ Error reading directory:', err.message);
        return;
    }

    files.forEach(file=>{
        const filePath = path.join(folderPath, file);
        fs.readFile(filePath, 'utf-8', (err, data)=>{
            if(err){
                console.error('❌ Error reading file:', err.message);
                return;
            }
            console.log(`📄 ${file} content:\n${data}\n`);

            })
        })
});