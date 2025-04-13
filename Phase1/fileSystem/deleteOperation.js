const fs = require('fs');
const path = require('path');
const dir = __dirname;
const folderPath = path.join(dir, 'textFiles');

// This method deletes a file
// fs.unlinkSync(path.join(folderPath, 'Sample3.txt'));

fs.unlink(path.join(folderPath, 'Sample3.txt'), (err) => {
    if (err) {
        console.error('❌ Error deleting file:', err.message);
        return;
    }
    console.log('File deleted successfully!');
}); 