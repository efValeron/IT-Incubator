const REGEXP = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z\d]{6,}$/

console.log(REGEXP.test('djI38D55')) // true
console.log(REGEXP.test('DHSJdhjsU')) // false