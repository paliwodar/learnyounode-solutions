var fs = require('fs')
var path = require('path')

var fileExtension = '.' + process.argv[3]
var directory = process.argv[2]


fs.readdir(directory, function callback(err, list) {
    var files = list.filter(f => path.extname(f) === fileExtension)
                    .forEach(f => console.log(f));
})





