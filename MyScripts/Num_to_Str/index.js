const getNumStr = (num) => {
  const numStr = {
    0: 'zero',
    1: 'one',
    2: 'two',
    3: 'three',
    4: 'four',
    5: 'five',
    6: 'six',
    7: 'seven',
    8: 'eight',
    9: 'nine',
    10: 'ten',
    11: 'eleven',
    12: 'twelve',
    13: 'thirteen',
    14: 'fourteen',
    15: 'fifteen',
    16: 'sixteen',
    17: 'seventeen',
    18: 'eighteen',
    19: 'nineteen',
    20: 'twenty',
    30: 'thirty',
    40: 'forty',
    50: 'fifty',
    60: 'sixty',
    70: 'seventy',
    80: 'eighty',
    90: 'ninety',
    100: 'hundred',
    1000: 'thousand',
    1000000: 'million',
    1000000000: 'billion',
    1000000000000: 'trillion',
    1000000000000000: 'quadrillion',
    1000000000000000000: 'quintillion',
  }
  return numStr[num]
}
const createChunkArray = (num) => {
  const numArray = num.toString().split('').reverse()
  const chunkArray = []

  for (let i = 0; i < numArray.length; i += 3) {
    chunkArray.push(Number(numArray.slice(i, i + 3).reverse().join('')))
  }

  return chunkArray
}

const numToStr = (num) => {
  const numChunks = createChunkArray(num)
  // console.log(numChunks)
  let resultArr = []

  for (let i = 0; i < numChunks.length; i++) {
    const chunk = numChunks[i]
    // console.log(chunk)
    switch (chunk.toString().length) {
      case 1:
        resultArr.unshift(getNumStr(chunk))
        break
      case 2:
        if (getNumStr(chunk) === undefined) { // if num > 9
          resultArr.unshift([getNumStr(Math.floor(chunk / 10) * 10), getNumStr(chunk % 10)])
          break
        }
        resultArr.unshift(getNumStr(chunk))
        break
      case 3:
        const ten = chunk % 100
        const hundred = Math.floor(chunk / 100)
        if (getNumStr(ten) === undefined) { // if num > 9
          resultArr.unshift([getNumStr(hundred), getNumStr(100), getNumStr(Math.floor(ten / 10) * 10), getNumStr(ten % 10)])
          break
        }
        resultArr.unshift([getNumStr(hundred), getNumStr(100), getNumStr(ten)])
        break
    }
    if (i !== numChunks.length - 1) resultArr.unshift('thousand')
  }

  return resultArr.flat().at(-1) === 'zero' && !resultArr.flat().length ? resultArr.flat().splice(0, resultArr.flat().length - 1).join(' ') : resultArr.flat().join(' ')
}

console.log(numToStr(0))
console.log(numToStr(1))
console.log(numToStr(10))
console.log(numToStr(12))
console.log(numToStr(21))
console.log(numToStr(521))
console.log(numToStr(511))
console.log(numToStr(5500))
console.log(numToStr(12345))
console.log(numToStr(123410))