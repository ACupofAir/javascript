// Normal function
function sumTwoNums(num1, num2) {
  let sum = num1 + num2;
  return sum;
}
console.log(sumTwoNums(1,2));

// Arrow function
const addTwoNums = (num1, num2) => {
  return num1 + num2;
}
console.log(addTwoNums(1, 3));

// Anonymous function
const anonymousFun = function () {
  console.log(
    `I am an anonymous function and my value is stored in anonymousFun`
  );
}