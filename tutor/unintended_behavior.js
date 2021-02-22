/*
* [ try...catch...finally ]
* 
* [ try ] 
* Block of code that may throw an exception
* [ catch ] 
* Block of code that will run if an exception is thrown
* [ finally ]
* It will run everytime no matter whether there is an exception, control the flow of code
*/

function criticalCode() {
  throw "throwing an exception";
}

function logError(theException) {
  console.log(theException);
}

//Throwing Exceptions
console.log("\n************Throwing Exceptions************\n");

throw 'myException';
// throw true;// It will not run

//Try...Catch
console.log("\n************Try...Catch************\n");

try {
  criticalCode();
} catch (ex) {
  console.log("Got an error");
  logError(ex);
}

//Throwing in Try...Catch
console.log("\n************Throwing in Try...Catch************\n");
try {
  throw "An exception that is thrown every time";
} catch (ex) {
  console.log("Got an error");
  logError(ex);
}