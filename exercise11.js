var fs = require('fs')
var http = require('http')

var fileLocation = process.argv[3]

var server = http.createServer(function (req, res) {
    fs.createReadStream(fileLocation).pipe(res)
})

server.listen(process.argv[2])