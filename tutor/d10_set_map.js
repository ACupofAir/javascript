/*
 * Set 
 * * only contains unique elements 
 * * iterable
 */

 // unique
const languages = [
  'English',
  'Finnish',
  'English',
  'French',
  'Spanish',
  'English',
  'French',
]

// Unique only four elements
const setOfLanguages = new Set(languages)
console.log(setOfLanguages) 

// Iterable
for (const language of setOfLanguages) {
  console.log(language)
}

/*
 * Map
 */

// Create from array
const countries = [
  ['Finland', 'Helsinki'],
  ['Sweden', 'Stockholm'],
  ['Norway', 'Oslo'],
]
const map = new Map(countries)
console.log(map)
console.log(map.size)

// Iterable
for (const country of map) {
  console.log(country)
}