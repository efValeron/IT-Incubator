function duplicateEncode(word) {
  let str = word.toLowerCase();
  let encodedStr = '';
  for (let i = 0; i < str.length; i++) {
    let currentChar = str[i];
    if (str.lastIndexOf(currentChar) === str.indexOf(currentChar)) {
      encodedStr += '(';
    } else {
      encodedStr += ')';
    }
  }
  return encodedStr;
}

console.log(duplicateEncode(' ( ( )'));
