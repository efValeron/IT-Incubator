function Cylon(model) {
  this.model = model
}

Cylon.prototype.attack = function () {
  return "Destroy all humans!"
}


function HumanSkin(model) {
  Cylon.call(this, model)
}

HumanSkin.prototype = Object.create(Cylon.prototype)
HumanSkin.prototype.constructor = HumanSkin

HumanSkin.prototype.infiltrate = function () {
  return "Infiltrate the colonies"
}

const cylon = new Cylon("raider")

console.log(cylon.attack() === "Destroy all humans!")

const caprica = new HumanSkin(6)

console.log(caprica.infiltrate() === "Infiltrate the colonies")
console.log(caprica.attack() === "Destroy all humans!")