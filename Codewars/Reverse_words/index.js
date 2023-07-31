function reverseWords(str) {
  return str.replace(/\S+/g, l => l.split("").reverse().join(""))
}

console.log(reverseWords('double  spaced  words'))