function humanReadable(seconds) {
  let secsRem = 0
  let minsRem = 0
  let minutes = Math.floor(seconds / 60)
  secsRem += seconds - (minutes * 60)
  let hours = Math.floor(minutes / 60)
  minsRem += minutes - (hours * 60)
  return [String(hours).padStart(2, '0'), String(minsRem).padStart(2, '0'), String(secsRem).padStart(2, '0')].join(':')
}

console.log(humanReadable(359999)) // "99:59:59"