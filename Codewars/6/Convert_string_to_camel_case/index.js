function toCamelCase(str){
  let symbols = '-_'
  let strs = str.split('')
  
  strs.forEach((e, i) => {
    if(symbols.split('').includes(e)){
      strs[i] = ''
      strs[i + 1] = strs[i + 1].toUpperCase()
    }
  })
  return strs.join('')
}

// Example
console.log(toCamelCase('convert_me-to_camel-case')) // Output: "convertMeToCamelCase"