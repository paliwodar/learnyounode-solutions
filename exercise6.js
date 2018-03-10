var filterFiles = require('./fileListingModule')

filterFiles(process.argv[2], process.argv[3], function (err, files) {
    if (err) {
        console.error(err)
    } else {
        files.forEach(f => console.log(f))
    }
})

