// single quotes
console.log('hello world');

// double quotes 
const greeting = "hello";
const place = "world";
console.log("%s %s", greeting, place);

// template literals
console.log(`${greeting}, ${place}`);

// string concatenation
let str1 = 'Hello ';
let str2 = 'world!';

console.log(str1 + str2);
console.log(str1 + "big " + str2);

let num1 = 1;
let num2 = "1";
console.log(num1 + num2);
console.log(num1 + 1); 

// template literals
let tstr1 = "JavaScript";
let tstr2 = "fun";

console.log(`I am writing code in ${tstr1}`);
console.log(`Formatting in ${tstr1} is ${tstr2}!`);

let bool1 = true;
console.log(`1 + 1 is ${1 + 1}`);
console.log(`The opposite of true is ${!bool1}`);