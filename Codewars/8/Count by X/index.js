const countBy = (x, n) => Array.from({ length: n }, (_, i) => x * (i + 1))

console.log(countBy(2,5))