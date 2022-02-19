const fs = require('fs')
const texts = fs.readFileSync(process.argv[2], "utf8");
console.log(texts.split("\n").length - 1);