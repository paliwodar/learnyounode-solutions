var fs = require('fs')

var fileContent = fs.readFileSync(process.argv[2]).toString()

console.log(fileContent.split("\n").length - 1)

