function Dictionary(words) {
  this.words = words;
}

// Dictionary.prototype.getMatchingWords = function (pattern) {
//   const result = []
//   pattern = new RegExp(`^${pattern.replace(/\?/g, ".")}$`)
//   for (const word of this.words) {
//     if (pattern.test(word)) result.push(word)
//   }
//   return result
// }

Dictionary.prototype.getMatchingWords = function (pattern) {
  pattern = new RegExp(`^${pattern.replace(/\?/g, ".")}$`)
  return this.words.filter(w => pattern.test(w))
}


const fruits = new Dictionary(['papaya',
  'orange',
  'apple',
  'banana',
  'blackberry',
  'lime',
  'lemon',
  'strawberry',
  'pineapple',
  'cherry',
  'raspberry',
  'melon'])
console.log(fruits.getMatchingWords('??????'))