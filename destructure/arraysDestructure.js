// Destructuring and Spread

// Destructuring is a way to unpack arrays, objects and assigning to a distinct variable.

// Destructuring Arrays

const numbers = [1,2,3]
let [numOne, numTwo, numThree] = numbers;

console.log(numOne, numTwo, numThree) // 1 2 3

const names = ['Emran', 'Hossain', 'Rony', 'Jony']
let [firstPerson, secondPerson, thirdPerson, fourthPerson] = names
console.log(firstPerson, secondPerson, thirdPerson, fourthPerson) // Emran Hossain Rony Jony


const scientifiConstants = [2.72, 3.14, 9.81, 37, 100]
let [e, pi, gravity, bodyTemp, boilingTemp] = scientifiConstants
console.log(e, pi, gravity, bodyTemp, boilingTemp) // 2.72 3.14 9.81 37 100

const fullStack = [
    ['HTML', 'CSS', 'JS', 'React'],
    ['Node', 'Express', 'MongoDB']
]

let [frontEnd, backEnd] = fullStack
console.log(frontEnd) // [ 'HTML', 'CSS', 'JS', 'React' ]
console.log(backEnd) // [ 'Node', 'Express', 'MongoDB' ]


// If we like to skip one of the values in the array, we use additional comma. The comma helps to omit the value at that specific index.

const numbersDestructured = [1,2,3]
let [firstOne, , thirdThree] = numbersDestructured
console.log(firstOne, thirdThree)  // 1 3

const omitNames = ['Emran', 'Hossain', 'Ruhul', 'Amin']
let [, secondNamePerson, , fourthNamePerson] = omitNames // first and third person's names are omitted.
console.log(secondNamePerson, fourthNamePerson) // Hossain Amin

// We can use default value undefined in the array to get the value to  array later in that index.

const enterValueInArray = [undefined, 'Emran', 'Hossain']
let [firstName = 'Mohammad', secondName, thirdName, clainName = 'Prodhan'] = enterValueInArray
console.log(firstName, secondName, thirdName, clainName) // Mohammad Emran Hossain Prodhan


// We can not assign variables to all the elements in the given array. We can destructure few of the first elements of the given array and we can get the rest of the array elements using spread operator(...).

const nums = [1,2,3,4,5,6,7,8,9,10]
let [num1, num2, num3, ...rest] = nums
console.log(num1, num2, num3) // 1 2 3
console.log(rest) // [4, 5, 6, 7, 8, 9, 10]

const countries = [['Bangladesh', 'Dhaka'], ['India', 'New Delhi'], ['Sri Lanka', 'Colombo']]
for(const [country, city] of countries) {
    console.log(country, city)
}
/*
Bangladesh Dhaka
India New Delhi
Sri Lanka Colombo
*/

const fullStackNames = [
    ['HTML', 'CSS', 'JS', 'React'],
    ['Node', 'Express', 'MongoDB']
]

for (const [first, second, third] of fullStackNames) {
    console.log(first, second, third)
}
/*
    console.log(first, second, third) // HTML CSS JS Node Express MongoDB

*/
