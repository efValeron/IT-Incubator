function generateHashtag (str) {
  str = str.replace(/(\s+)/g, ' ')
  if(!str || str === ' ') return false
  if(str[0] !== ' ') {
    str = str.split('')
    str.unshift(' ')
    str = str.join('')
  }
  str = str.replace(/\s(.)/g, (_, c) => c.toUpperCase()).split('')
  str.unshift('#')
  str = str.join('')
  if(!str || str.length > 140) return false
  return str
}

console.log(generateHashtag("                                                                                                                                                                                                       "))