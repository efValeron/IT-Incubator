function realNumbers(n){
  let count = 0
  for (let i = 1; i < n; i++) {
    console.log(i, i % 2, i % 3, i % 5)
    if (Math.floor(i % 2) === 1 && Math.floor(i % 3) === 1 && Math.floor(i % 5) === 1) count++
  }
  return count
}

console.log(realNumbers(10))