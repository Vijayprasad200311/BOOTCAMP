const fs = require('fs');
const path = require('path');

function getFileInfo(filePath) {
    if (!fs.existsSync(filePath)) {
        console.log(`Error: File '${filePath}' does not exist.`);
        return;
    }
    
    const stats = fs.statSync(filePath);
    console.log(`File: ${filePath}`);
    console.log(`Size: ${stats.size} bytes`);
    console.log(`Created: ${new Date(stats.birthtime).toLocaleString()}`);
    console.log(`Last Modified: ${new Date(stats.mtime).toLocaleString()}`);
}

if (process.argv.length !== 3) {
    console.log("Usage: node script.js <file_path>");
} else {
    getFileInfo(process.argv[2]);
}
