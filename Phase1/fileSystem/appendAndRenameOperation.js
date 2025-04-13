const fs = require('fs');
const path = require('path');
const dir = __dirname;
const folderPath = path.join(dir, 'textFiles');

// This method Appends data to a file
fs.appendFileSync(path.join(folderPath, 'Sample5.txt'), ' append this text to the file!');

// This method Renames a file
fs.renameSync(path.join(folderPath, 'Sample4.txt'), path.join(folderPath, 'Sample6.txt'));