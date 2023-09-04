function sumIntervals(intervals) {
  let intervalsSet = new Set()
  intervals.forEach(interval => {
    for(let i = interval[0]; i <= interval[1]; i++) {
      intervalsSet.add(i)
    }
  })
  console.log(intervalsSet)

  let intervalsArr = Array.from(intervalsSet).sort((a, b) => a - b)
  let splicedArr = intervalsArr.filter(num => {
    let indexOfNum = intervalsArr.indexOf(num)
    if(![0, intervalsArr.length - 1].includes(indexOfNum)) {
      if(intervalsArr[indexOfNum - 1] !== num - 1 || intervalsArr[indexOfNum + 1] !== num + 1) {
        return num
      }
    } else return num
  }).reverse()
  console.log(splicedArr)

  let sum = 0
  for (let i = 0; i < splicedArr.length - 1; i += 2) {
    sum += splicedArr[i] - splicedArr[i + 1]
  }
  
  return sum
}

console.log(sumIntervals([[1,5],[6,10]]))