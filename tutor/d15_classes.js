class Person {
  constructor(firstName, lastName, age, country, city) {
    this.firstName = firstName
    this.lastName = lastName
    this.age = age
    this.city = city
    this.skills = []
    this.score = 0
  }
  getFullName() {
    const fullName = this.firstName + ' ' + this.lastName
    return fullName
  }
  get getScore() {
    return this.score
  }
  set setScore(score) {
    this.score += score
  }
}

const person1 = new Person('Air', 'Keith', 18, 'NicePlace', 'NiceCity')
person1.setScore = 1

console.log(person1.score)
console.log(person1.getScore)
console.log(person1.getFullName())