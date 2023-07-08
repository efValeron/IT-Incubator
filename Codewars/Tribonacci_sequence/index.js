function tribonacci(signature,n) {
  if(n === 0) return []
  let arr = []
  for(let i = 0; i < n; i++) {
    if(i < 3) arr.push(signature[i])
    else {
      arr.push(arr[i - 1] + arr[i - 2] + arr[i - 3])
    }
  }
  return arr
}

console.log(tribonacci([1,1,1], 10))