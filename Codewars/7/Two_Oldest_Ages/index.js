function twoOldestAges(ages) {
  const sortedAges = [...ages].sort((a, b) => b - a)
  return [sortedAges[1], sortedAges[0]]
}

console.log(twoOldestAges([1, 2, 10, 8]))
console.log(twoOldestAges([2, 1, 10, 11, 8, 8]))