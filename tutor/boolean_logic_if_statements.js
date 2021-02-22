/*
* ==  != checks for equality regardless of data type
* === !== checks for equal values and data types
* tips: always use === !==
*/

// Ternary
const status = 200;
const message = (status === 200) ? 'ok' : 'error';// message = 'ok'