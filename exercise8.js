var http = require('http')

var allData = []

http.get(process.argv[2], function (response) {
    response.on('data', function (data) {
        allData.push(data.toString())
    }).on('end', function () {
        var dataJoined = allData.join('');
        console.log(dataJoined.length)
        console.log(dataJoined)
    })
})


