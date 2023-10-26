class Student {
  constructor(name, fives, tens, twenties) {
    this.name = name
    this.fives = fives
    this.tens = tens
    this.twenties = twenties
  }
}

const andy = new Student("Andy", 0, 0, 2)
const stephen = new Student("Stephen", 0, 4, 0)
const eric = new Student("Eric", 8, 1, 0)
const david = new Student("David", 2, 0, 1)
const phil = new Student("Phil", 0, 2, 1)
const cam = new Student("Cameron", 2, 2, 0)
const geoff = new Student("Geoff", 0, 3, 0)



function mostMoney(students) {
  if (students.length === 1) {
    return students[0].name
  }

  const calcSum = (student) => student.fives * 5 + student.tens * 10 + student.twenties * 20

  const highestMoney = Math.max(...students.map(student => calcSum(student)))
  const mostStudents = students.filter(student => calcSum(student) === highestMoney)

  return mostStudents.length > 1 ? "all" : mostStudents[0].name
}


console.log(mostMoney([cam, geoff, andy, stephen, eric, david, phil]) === "Eric")
console.log(mostMoney([cam, geoff]) === "all")