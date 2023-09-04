class Quark {
  constructor(color, flavor) {
    this.color = color
    this.flavor = flavor
    this.baryon_number = 1 / 3
  }

  interact(anotherQuark) {
    [this.color, anotherQuark.color] = [anotherQuark.color, this.color]
  }
}

let q1 = new Quark("red", "up")
let q2 = new Quark("blue", "strange")

console.log(q1.color)
console.log(q2.color)
q1.interact(q2)
console.log(q1.color)
console.log(q2.color)