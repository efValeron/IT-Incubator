const isDivisible = (num, ...divisors) => divisors.every(divisor => num % divisor === 0)


console.log(isDivisible(3, 3, 4))
console.log(isDivisible(12, 3, 4))
console.log(isDivisible(8, 3, 4, 2, 5))