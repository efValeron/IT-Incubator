//  1. В массиве найти максимальное число

const maxInArray = (array) => {
  if (!array.length) return 0  // returns 0 if the array is empty

  let max = array[0]
  for (let i = 1; i < array.length; i++) {
    const num = array[i]
    if (num > max) max = num
  }
  return max
}


const { expect } = require('chai')

describe('maxInArray', () => {
  it('returns the maximum number in the array', () => {
    expect(maxInArray([1, 2, 3])).to.equal(3)
    expect(maxInArray([-1, -2, -3])).to.equal(-1)
    expect(maxInArray([5, 10, 2, 8])).to.equal(10)
  })

  it('returns 0 if the array is empty', () => {
    expect(maxInArray([])).to.equal(0)
  })

  it('returns the only number in the array if it contains only one number', () => {
    expect(maxInArray([7])).to.equal(7)
  })

  it('returns the maximum negative number in the array', () => {
    expect(maxInArray([-5, -10, -2, -8])).to.equal(-2)
  })

  it('returns the maximum number if there are duplicates', () => {
    expect(maxInArray([1, 2, 2, 3])).to.equal(3)
  })
})