//  4. map, filter, reduce

const array = [ -5, -4, -3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7 ]

const mapped = array.map(x => x * 3)
console.log(mapped)

const filtered = array.filter(x => x % 3 === 0)
console.log(filtered)

const reduced = array.reduce((count, curr) => count + (curr > 0 ? 1 : 0), 0)
console.log(reduced)
