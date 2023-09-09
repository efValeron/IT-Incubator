function isSolved(board) {
  let possible = false

  // check left top to right bottom diagonal
  const topLToBottomR = [board[0][0], board[1][1], board[2][2]]
  if (topLToBottomR.every(n => n === 1)) return 1
  else if (topLToBottomR.every(n => n === 2)) return 2
  else if (
    topLToBottomR.includes(1) && !topLToBottomR.includes(2) ||
    topLToBottomR.includes(2) && !topLToBottomR.includes(1)
  ) possible = true

  // check right top to left bottom diagonal
  const topRToBottomL = [board[0][2], board[1][1], board[2][0]]
  if (topRToBottomL.every(n => n === 1)) return 1
  else if (topRToBottomL.every(n => n === 2)) return 2
  else if (
    topRToBottomL.includes(1) && !topRToBottomL.includes(2) ||
    topRToBottomL.includes(2) && !topRToBottomL.includes(1)
  ) possible = true

  // check rows
  for (let r = 0; r < 3; r++) {
    if (board[r].every(n => n === 1)) return 1
    else if (board[r].every(n => n === 2)) return 2
    else if (
      board[r].includes(1) && !board[r].includes(2) ||
      board[r].includes(2) && !board[r].includes(1)
    ) possible = true
  }

  // check columns
  for (let c = 0; c < 3; c++) {
    const column = [board[0][c], board[1][c], board[2][c]]
    if (column.every(n => n === 1)) return 1
    else if (column.every(n => n === 2)) return 2
    else if (
      column.includes(1) && !column.includes(2) ||
      column.includes(2) && !column.includes(1)
    ) possible = true
  }

  if (possible) return -1
  return 0
}

console.log(isSolved([
  [2, 1, 1],
  [0, 1, 1],
  [2, 2, 2]
]))