const fa = n => n > 2 ? n * fa(n - 1) : 2

console.log(fa(5))