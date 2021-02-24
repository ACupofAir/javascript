// Function in object cannot be arrow function, for this of arrow function refers to the windows instead of the object itself
const person = {
  firstName: 'Air',
  lastName: 'Keith',
  getFullName: function() {
    return `${this.firstName}${this.lastName}`;
  },
}

// Two ways access the object's properties
console.log(person.firstName);
console.log(person['lastName']);

console.log(person.getFullName());
// Add properties to an object 
person.isMarried = true;
person.sayHello = function () {
  if (person.isMarried === true) {
    console.log('Hello, I\'m married');
  }
  else {
    console.log('Hello, I\'m single');
  }
}

person.sayHello();