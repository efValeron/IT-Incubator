function spinWords(string){
  let words = string.split(' ')
  let convertedWords = []

  for(word of words) {
    if(word.length >= 5) convertedWords.push(word.split('').reverse().join(''))
    else convertedWords.push(word)
  }
  
  return convertedWords.join(' ')
}

console.log(spinWords("Just kidding there is still one more")) // "Just gniddik there is still one more"