function openOrSenior(data){
  let result = []
  data.forEach(person => result.push(person[0] >= 55 && person[1] > 7 ? 'Senior' : 'Open'))
  return result
}

console.log(openOrSenior([[45, 12],[55,21],[19, -2],[104, 20]]))