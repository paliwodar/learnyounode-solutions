var functionAdd = function (a, b) {return +a + +b;};

console.log(process.argv.slice(2).reduce(functionAdd, 0))

