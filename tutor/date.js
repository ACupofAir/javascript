// get right now
const now = new Date();
console.log(now);// UTC

// set a specific date and time
// month counting starts with zero
const randomDate = new Date(2015, 3, 12, 6, 25, 58);
console.log(randomDate);//4-12

// set a specific date - time set to midnight
const win95Launch = new Date(1995, 7, 24);
console.log(win95Launch);

// setting values
now.setFullYear(2014);
now.setMonth(3);// April
now.setDate(4);

now.setHours(4);// 24 Hours Clock
now.setMinutes(24);
now.setSeconds(46);
console.log(now);

// getting values
console.log(now.getMonth());
console.log(now.getTime());// milliseconds since 1970-1-1
console.log(now.getDay());// day of the week (Sunday = 0)