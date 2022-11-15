// every
// every(): it checks if all the elements are similar in one aspect or not. It returns boolean. It also takes a callback function in it with parameter to check the condition.

const names = ['Hossain', 'Emran', 'Nusaiba', 'Farjana']
const type = names.every(name => console.log(typeof name)); // result is = string
const areAllNameString = names.every((name) => typeof(name) === 'string') // as typeof(name) or typeof name is string, so it can be compared string === string
console.log(areAllNameString); // true


const allBooleans = [true, true, true, true]
const areAllBooleanTrue = allBooleans.every((t) => t === true)
console.log(areAllBooleanTrue); // true


const allBooleansTrueAndFalse = [true, false, true, false]
const areAllTrue = allBooleansTrueAndFalse.every((t) => t === true)
console.log(areAllTrue); // false
console.log(!areAllTrue); // true

const areAllFalse = allBooleansTrueAndFalse.every((f) => f === false)
console.log(areAllFalse); // false
console.log(!areAllFalse); // true
