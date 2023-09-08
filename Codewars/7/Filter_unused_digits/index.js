function unusedDigits(...nums) {
  const allNums = "0123456789"
  const flatNums = nums.map(n => n.toString().split("")).flat()
  let result = ""
  for (const n of allNums) {
    if (!flatNums.includes(n)) result += n
  }
  return result
}

console.log(unusedDigits(12, 34, 56, 78))