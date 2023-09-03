function matrixAddition(a, b) {
  if (a.length !== b.length || a[0].length !== b[0].length) {
    throw new Error('Matrices must have the same dimensions')
  }

  return a.map((row, r) => row.map((cell, c) => cell + b[r][c]))
}


console.log(matrixAddition([[1, 2], [1, 2]], [[2, 3], [2, 3]]))