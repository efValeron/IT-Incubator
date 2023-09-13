function charConcat(string){
  let result = ""
  for (let i = 0; i < Math.floor(string.length / 2); i++) {
    result += `${string[i]}${string[string.length - i - 1]}${i + 1}`
  }
  return result
}

console.log(charConcat("abc def"))