// return masked string
function maskify(cc) {
  strs = cc.split('')
  if(cc.length <= 4) return cc
  for(let i = 0; i < cc.length - 4; i++) strs[i] = '#'
  return strs.join('')
}

console.log(maskify("4556364607935616")) // "############5616"