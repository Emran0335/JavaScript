// some
// some(): it checks if some of the elements of the given array are similar in one aspect. It returns boolean.

const names = ['Emran', 'Hossain', 'Rony', 'Ruhul']
const bools = [true, true, true, true]

const areSomeTrue = bools.some(b => b === true)
console.log(areSomeTrue); // true

const areAllStr = names.some((name) => typeof name === 'string')
console.log(areAllStr); // true

const areAllNumbers = names.some((name)=> typeof name === 'number')
console.log(areAllNumbers); // false
