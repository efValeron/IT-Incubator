//  6. Наследование, пример на class\extends

class Animal {
  constructor(name) {
    this.name = name
  }
  walk() {
    console.log('I walk: ' + this.name)
  }
  eat() {
    console.log('I can eat')
  }
}


class Rabbit extends Animal {
  walk() {
    super.walk()
    console.log('...and jump!')
  }
}


const rabbit = new Rabbit('Bunny')
rabbit.walk()
rabbit.eat()