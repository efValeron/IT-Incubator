function validateBattlefield(field) {
  const fieldSize = field.length
  for (let r = 0; r < fieldSize; r++) {
    let rowShipLength = 1
    for (let c = 0; c < fieldSize; c++) {
      const current = field[r][c]
      if (current === 1){
        if (c !== fieldSize && field[r][c + 1] === 1) {
          console.log(r, c, "to right")
          rowShipLength += 1
        }
        // if (r !== fieldSize && field[r + 1][c] === 1) console.log(r, c, "to bottom")
      }
    }
    console.log(rowShipLength)
  }
  return true
}

console.log(validateBattlefield([
  [1, 0, 0, 0, 0, 1, 1, 0, 0, 0],
  [1, 0, 1, 0, 0, 0, 0, 0, 0, 1],
  [1, 0, 1, 0, 1, 1, 1, 0, 0, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 1, 0],
  [0, 0, 0, 0, 1, 1, 1, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 1, 0],
  [0, 0, 0, 1, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 1, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
]))