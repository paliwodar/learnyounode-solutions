var http = require('http')
var url = require('url')

var server = http.createServer(function (req, res) {
    var parsedUrl = url.parse(req.url, true)
    var iso = parsedUrl.query.iso

    if (parsedUrl.pathname == "/api/parsetime") {
        res.writeHead(200, {'Content-Type': 'application/json'})
        var date = new Date(iso);
        res.end(JSON.stringify({'hour': date.getHours(), 'minute': date.getMinutes(), 'second': date.getSeconds()}))
    } else if (parsedUrl.pathname == "/api/unixtime") {
        res.writeHead(200, {'Content-Type': 'application/json'})
        res.end(JSON.stringify({'unixtime': new Number(Date.parse(iso).toString())}))
    } else {
        res.writeHead(404)
        res.end()
    }
})

server.listen(process.argv[2])