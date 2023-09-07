const shiftedDiff = (str1, str2) => str1.length === str2.length ? (str2 + str2).indexOf(str1) : -1

console.log(shiftedDiff("eecoff", "coffee"))