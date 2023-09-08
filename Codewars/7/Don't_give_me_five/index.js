function dontGiveMeFive(start, end) {
  const result = []
  for (let i = start; i <= end; i++) {
    if (!i.toString().includes("5")) result.push(i)
  }
  return result.length;
}

console.log(dontGiveMeFive(-9,-1))
console.log(dontGiveMeFive(4,17))