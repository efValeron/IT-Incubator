// const f = (k, n) => {
//   if (n < 0) throw new Error("n < 0")
//   if (n === 0) return 1
//   let sum = 0
//   for (let i = 0; i <= n; i++) {
//     sum += f(k, Math.floor(i / k))
//   }
//   return sum
// }

const memo = new Map();
const f = (k, n) => {
  if (n < 0) throw new Error("n < 0");
  if (n === 0) return 1;

  const key = `${k},${n}`;
  if (memo.has(key)) {
    return memo.get(key);
  }

  let sum = 0;
  for (let i = 0; i <= n; i++) {
    sum += f(k, Math.floor(i / k));
  }

  memo.set(key, sum);
  return sum;
}


const {assert} = require("chai")

describe("Tests", () => {
  it("test", () => {
    assert.equal(f(2, 3), 6);
    assert.equal(f(2, 200), 7389572);
    assert.equal(f(2, 1000), 264830889564);
    assert.equal(f(7, 500), 74845);
    assert.equal(f(100, 0), 1);
    assert.equal(f(100, 500000), 21469002551);
  })
})