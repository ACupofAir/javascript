// Example1
let weather = 'cloudy'
switch (weather) {
  case 'rainy':
    console.log('You need a rain coat')
    break
  case 'cloudy':
    console.log('You need a jacket')
    break
  case 'sunny':
    console.log('Go out freely')
    break
  default:
    console.log('No need for rain coat')
}

// Example2 using conditions in the cases
let num = 2
switch (true) {
  case num > 0:
    console.log('Number is positive')
    break;
  case num < 0:
    console.log('Number is negative')
    break;
  case num === 0:
    console.log('Number is zero')
    break;
  console.log('Enter value was not a number')
}