var fs = require('fs')

function getNumberOfLines(fileContent) {
    return fileContent.toString().split("\n").length - 1
}

fs.readFile(process.argv[2], function callback(err, data) {
    console.log(getNumberOfLines(data))
})





