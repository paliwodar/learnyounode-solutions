var fs = require('fs')
var path = require('path')

module.exports = function(directory, extension, callback) {
    var fileExtension = '.' + extension
    fs.readdir(directory, function(err, list) {
        if (err) {
            return callback(err)
        } else {
            var files = list.filter(f => path.extname(f) === fileExtension)
            return callback(null, files)
        }
    })
}
