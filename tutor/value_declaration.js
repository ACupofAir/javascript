// Three statement

// var
// Function scoped(state in line 10, using in line 1)
// Can be changed in scope

// let
// Block scoped
// Can be changed in scope
// Only available after declaration

// const 
// Block scoped, like let
// Only be assigned, cannot be reassigned


// Using tips
// const by default
// let in loops
// no need using var, it is outstyle

// Example

var hello = "hello";
console.log(hello);

hello = "hello world";
console.log(hello);

if (true) {
  let world = "hello world";
  console.log(worlnamed);
}

const myName = "air";
console.log(myName);