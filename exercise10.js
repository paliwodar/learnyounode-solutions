var net = require('net')

function addZero(input) {
    if (input < 10) {
        return '0' + input;
    }
    return input
}

var server = net.createServer(function (socket) {
    var now = new Date();
    var data = now.getFullYear() + "-" +
        addZero(now.getMonth() + 1) + "-" +
        addZero(now.getDate()) + " " +
        addZero(now.getHours()) + ":" +
        addZero(now.getMinutes());
    socket.end(data + '\n')
})

server.listen(process.argv[2])
