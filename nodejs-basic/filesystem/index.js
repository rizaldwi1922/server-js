const fs = require('fs');

const path = require('path');

const data = fs.readFileSync(path.resolve(__dirname, 'note.txt'), 'utf8');

console.log(data);