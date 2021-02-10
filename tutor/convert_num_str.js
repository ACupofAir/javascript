/*
* str->num: parseInt()  parseFloat() 
* num->str: toString()
*/

let num1 = '150';

console.log(parseInt('100'));
console.log(parseInt(num1));
console.log(parseInt('ABC'));
console.log(parseInt('0xF'));

let flo1 = '1.50';

console.log(parseFloat('1.00'));
console.log(parseFloat(flo1));
console.log(parseFloat('ABC'));

console.log(parseInt('1.5'));
console.log(parseInt('1 + 1'));//get 1, for anything after a special character gets ignored

console.log(parseInt(`${1 + 1}`));//get 2, first figure out template string, then using the function to convert

console.log(num1.toString());
console.log(flo1.toString());
console.log((100).toString());