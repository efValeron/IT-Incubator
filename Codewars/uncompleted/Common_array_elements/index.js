// const common = (a, b, c) => a.filter(n => b.includes(n) && c.includes(n)).reduce((a, b) => a + b, 0)

// const common = (a, b, c) => {
//   console.log(a)
//   let result = 0
//
//   for (let i = 0; i < a.length - 1; i++) {
//     const [f, s] = [a[i], a[i + 1]]
//     if (b.includes(f) && c.includes(f) && b.includes(s) && c.includes(s)) result += f + s
//   }
//
//   return result
// }

console.log(common([1, 2, 3], [5, 3, 2], [7, 3, 2]))
console.log(common([1, 2, 2, 3], [5, 3, 2, 2], [7, 3, 2, 2]))
