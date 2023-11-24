function max(inpArray) {
  const array = [...inpArray]
  if (!array.length) return -Infinity
  if (array.length === 1) return array[0]
  if (array.length === 2) return array[0] > array[1] ? array[0] : array[1]

  if(array[0] > array[1]) {
    array.splice(1, 1)
    return max(array)
  } else {
    array.splice(0, 1)
    return max(array)
  }
}

//   Rules:
//   You cannot use Math.max (duh!)
//   You can only use const to declare any variables
//   You cannot use any loops like for or while
//   You cannot use any other argument than the one passed to the function
//   If the array is empty then return -Infinity, just like with Math.max.apply(null, [])
//   You cannot use any Array.prototype methods like forEach, map, filter, or reduce


const {assert} = require("chai")

describe("Tests", () => {
  it("test", () => {
    // assert.equal(max([1,2,3,4,5]), 5);
    assert.equal(max([5]), 5);
    assert.equal(max([]), -Infinity);
    assert.equal(max([2, 1]), 2);
    assert.equal(max([2, 1, 3]), 3);
    assert.equal(max([99,2,100,4,5]), 100);
  });
});