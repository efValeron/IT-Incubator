function arrayDiff(a, b) {
  b.forEach(be => {
    a = a.filter(ae => {
      return ae !== be
    })
  })
  return a
}

console.log(arrayDiff([1,2,3], [1,2])) // [3]