//  3. Call, apply, bind

const person1 = {
  name: "John", age: 30, greet: function () {
    console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`)
  }
}

const person2 = {
  name: "Jane", age: 25, writeCode: function (framework) {
    console.log(`I'm ${this.name} and I write code in ${framework}.`)
  }
}

//  Call
console.log("\nCall:")

person1.greet()
person1.greet.call(person2)

person2.writeCode("Vue")
person2.writeCode.call(person1, "React")

//  Apply
console.log("\nApply:")

person2.writeCode("Vue")
person2.writeCode.apply(person1, ["React"]) // args must be an array

//  Bind
console.log("\nBind:")

const person2Greet = person1.greet.bind(person2)
const person1WriteCode = person2.writeCode.bind(person1)
const person1WriteCodeReact = person2.writeCode.bind(person1, "React")

person2Greet()
person1WriteCode("Vue") // need to pass args
person1WriteCodeReact() // no need of args, we passed React already on line 29