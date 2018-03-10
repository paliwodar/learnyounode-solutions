var http = require('http')

var allData = [];
var howManyEnded = 0;

[2 , 3 , 4].forEach(function (value) {
    allData[value] = []
    http.get(process.argv[value], function (response) {
        response.on('data', function (data) {
            allData[value].push(data.toString())
        }).on('end', function () {
            if (++howManyEnded == 3) {
                allData.forEach(function (elem) {
                    console.log(elem.join(''))
                })
            }
        })
    })
})


