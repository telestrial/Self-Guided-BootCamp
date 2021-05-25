// fs.somethingSYNC means synchronous. Without it, things will run asynchronously.

const fs = require('fs');
const folderName = process.argv[2] || 'Project';

try {
    fs.mkdirSync(folderName);
    fs.writeFileSync(`${folderName}/index.html`, '.')
    fs.writeFileSync(`${folderName}/app.js`, '.')
    fs.writeFileSync(`${folderName}/app.css`, '.')
} catch (e) {
    console.log('Something went wrong!');
    console.log(e);
}


// Think it may just be a version difference, but Colt's implementation  of
// writeFileSync did not put '.' in each file. Apparently, it's required. 
// Complains quite a bit if you don't.