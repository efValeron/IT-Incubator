function rowSumOddNumbers(n) {
  const firstNum = n * (n - 1) + 1
  const lastNum = n * (n - 1) - 1 + n * 2
  let sum = 0
  for (let i = firstNum; i <= lastNum; i += 2) {
    sum += i
  }
  return sum
}

// function rowSumOddNumbers(n) {
//   /* The rows' start numbers are Hogben's centered polygonal numbers:
//      1, 3, 7, 13, 21, 31, 43 = b[n] = n^2 - n + 1.
//      <https://oeis.org/A002061>
//
//      The sum of one row is given by:
//      s[n] = n^2 + n(b[n] - 1).
//      <https://www.quora.com/What-is-the-sum-of-n-consecutive-odd-integers/answer/Xavier-Dectot>
//
//      Inline b[n]:
//      s[n] = n^2 + n(n^2 - n + 1 - 1)
//           = n^2 + n(n^2 - n)
//           = n^2 + n^3 - n^2
//           = n^3
//      ... oh. */
//   return n * n * n;
// }

console.log(rowSumOddNumbers(1))
console.log(rowSumOddNumbers(42))