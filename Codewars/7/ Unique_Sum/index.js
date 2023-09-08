function uniqueSum(lst) {
  return lst.length > 0 ? [...new Set(lst)].reduce((acc, sum) => sum + acc, 0) : null
}

console.log(uniqueSum([1, 1, 1, 1, 1]))