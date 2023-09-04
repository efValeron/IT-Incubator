function printerError(s) {
  al = 'abcdefghijklmnopqrstuvwxyz'.split('')
  mIndex = al.indexOf('m')
  errors = 0
  s.split('').forEach(e => {
    if(al.indexOf(e) > mIndex) errors++
  })
  return `${errors}/${s.length}`
}

console.log(printerError("aaaxbbbbyyhwawiwjjjwwm"))