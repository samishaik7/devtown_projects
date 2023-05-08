const fs = require('fs');
const text = 'this is a test and this was written with node js'

fs.writeFileSync('temp.txt',text)