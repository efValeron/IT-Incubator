function getAttendees(peopleInvited, responses) {
  const result = [...peopleInvited]

  for (const response of responses) {
    if (response.response === "declined") result.splice(result.indexOf(response.name), 1)
  }

  return result
}

let people = ['Easter Bunny', 'Tooth Fairy', 'Frosty the Snowman',
  'Jack Frost', 'Cupid', 'Father Time']
let responses = [
  {name: 'Easter Bunny', response: 'declined'},
  {name: 'Jack Frost', response: 'declined'},
  {name: 'Tooth Fairy', response: 'accepted'}
]

console.log(getAttendees(people, responses))