// Simple Type System
/*
* Number(float)
* String
* Boolean
* Date
* Function
* Array 
* Object
*/

// Special Types
/*
* NaN
* null
* undefined
*/

//Checking Type
/*
* typeof operator 
* return a string of the data type primitive 
*
* instanceof operator
* return a Boolean of if a value matches the data type
*/

const people = ["Air", "Wind", "Squid"];
const one = 1;
const str = "Hello World";
const b = true;
const person = {
  firstName: "Air",
  lastName: "Keith"
};

function sayHello(person) {
  console.log("Hello " + person.firstName);
}

console.log("-- typeof --");
console.log(typeof people);
// array is a special object
console.log(typeof one);
console.log(typeof str);
console.log(typeof b);
console.log(typeof person);
console.log(typeof sayHello);

console.log("-- instanceof --");
console.log(people instanceof Array);//true
console.log(one instanceof Number);//false, it depends on the constructor, we need `const one = new Number(1);` It will be true, but it typeof is object
console.log(str instanceof String);
console.log(b instanceof Boolean);
console.log(person instanceof Object);
console.log(sayHello instanceof Function);