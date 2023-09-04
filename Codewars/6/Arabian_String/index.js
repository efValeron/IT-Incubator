function camelize(input) {
  return input.split(/[^a-zA-Z0-9]+/).filter(Boolean).map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()).join('');
}

console.log(camelize("uP6.'TU9N0SCRn!a,TYBK2")) // "Up6Tu9n0scrnATybk2"