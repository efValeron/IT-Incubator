function rgb(r, g, b){
  return [r, g, b]
    .map(e => e >= 0 && e <= 255 ? e.toString(16).padStart(2, '0').toUpperCase() : e > 255 ? 'FF' : '00')
    .join('')
}

console.log(rgb(173,255,47)) // "ADFF2F"