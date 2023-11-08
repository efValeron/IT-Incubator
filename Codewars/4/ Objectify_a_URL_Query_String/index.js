// Converts a URL Query String into an object map
function convertQueryToMap(query) {
  if (!query) return {}

  const map = {}

  query.split("&").forEach(param => {
    const [key, value] = param.split("=")
    key.split(".").reduce((obj, key, index, arr) => index === arr.length - 1 ? obj[key] = decodeURIComponent(value) : obj[key] = obj[key] || {}, map)
  })

  return map
}


const {assert} = require("chai")

describe("Tests", () => {
  it("test", () => {
    let q = "user.name.firstname=Bob&user.name.lastname=Smith&user.favoritecolor=Light%20Blue", out = {
      "user": {
        "name": {
          "firstname": "Bob", "lastname": "Smith"
        }, "favoritecolor": "Light Blue"
      }
    }
    assert.deepEqual(convertQueryToMap(q), out)
  })
})
