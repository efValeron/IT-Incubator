//  7. Промисификация, setInterval, setTimeout

doItAfter(1).then(console.log)


function doItAfter(seconds) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("done")
    }, seconds * 1000)
  })
}
