function towerBuilder(nFloors) {
  const n = nFloors
  const tree = []
  for(let i = n + n - 1; i > 0; i -= 2) {
    tree.unshift(`${' '.repeat((2 * n - 1 - i) / 2)}${'*'.repeat(i)}${' '.repeat((2 * n - 1 - i) / 2)}`)
  }
  return tree
}

console.log(towerBuilder(2)) // [ ' * ', '***' ]