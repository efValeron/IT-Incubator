//  2. Рекурсия: фибоначчи, факториал, сумма чисел от 0 до N

const fibonacci = (n) => {
  return n <= 1 ? n : fibonacci(n - 1) + fibonacci(n - 2)
}

const factorial = (n) => {
  if (!Number.isInteger(n) || n < 0) return undefined
  return n <= 2 ? n : n * factorial(n - 1)
}

const sumN = (n) => {
  return n <= 1 ? n : n + sumN(n - 1)
}


const { assert } = require("chai")

describe("fibonacci", () => {
  it("should return 0 for n = 0", () => {
    assert.strictEqual(fibonacci(0), 0)
  })

  it("should return 1 for n = 1", () => {
    assert.strictEqual(fibonacci(1), 1)
  })

  it("should return 1 for n = 2", () => {
    assert.strictEqual(fibonacci(2), 1)
  })

  it("should return 5 for n = 5", () => {
    assert.strictEqual(fibonacci(5), 5)
  })

  it("should return 55 for n = 10", () => {
    assert.strictEqual(fibonacci(10), 55)
  })
})

describe("factorial", () => {
  it("should return 0 for n = 0", () => {
    assert.strictEqual(factorial(0), 0)
  })

  it("should return 1 for n = 1", () => {
    assert.strictEqual(factorial(1), 1)
  })

  it("should return 2 for n = 2", () => {
    assert.strictEqual(factorial(2), 2)
  })

  it("should return the correct factorial for n > 2", () => {
    assert.strictEqual(factorial(5), 120)
    assert.strictEqual(factorial(6), 720)
    assert.strictEqual(factorial(10), 3628800)
  })

  it("should return undefined for negative numbers", () => {
    assert.strictEqual(factorial(-5), undefined)
    assert.strictEqual(factorial(-10), undefined)
  })

  it("should return undefined for non-integer numbers", () => {
    assert.strictEqual(factorial(3.5), undefined)
    assert.strictEqual(factorial(1.23), undefined)
  })
})

describe("sumN", () => {
  it("should return 0 when n is 0", () => {
    assert.strictEqual(sumN(0), 0)
  })

  it("should return 1 when n is 1", () => {
    assert.strictEqual(sumN(1), 1)
  })

  it("should return the sum of numbers from 1 to 5", () => {
    assert.strictEqual(sumN(5), 15)
  })

  it("should return the sum of numbers from 1 to 10", () => {
    assert.strictEqual(sumN(10), 55)
  })
})