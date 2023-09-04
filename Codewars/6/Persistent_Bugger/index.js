function persistence(num) {
  return String(num).length > 1 ? 1 + persistence(Array.from(String(num)).reduce((a, b) => a * b, 1)) : 0;
}


console.log(persistence(39))