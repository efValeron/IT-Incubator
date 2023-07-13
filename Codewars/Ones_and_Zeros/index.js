const binaryArrayToNumber = arr => { return parseInt(arr.join(''), 10) }

console.log(binaryArrayToNumber([0,0,1,0,0])) // 4