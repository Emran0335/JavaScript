// Spread or Rest Operator
// When we destructure an array, we use the spread operator(...) to get the rest elements as array. In addition to that, we use spread operator to spread array elements to another array.

// Spread operator to get the rest of array elements

const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let [num1, num2, num3, ...rest] = nums
console.log(num1, num2, num3); // 1,2,3 but not an array.
console.log(rest); // [4,5,6,7,8,9,10] is returned as array through rest or spread operator.


const countries = ['China', 'Malaysia', 'Korea', 'Mongolia', 'Japan', 'India', 'Pakistan', 'Bangladesh', 'Nepal', 'Butan']

let [chi, mal, kor, mon, jap, ...southAsia] = countries
console.log(chi); // China
console.log(mal); // Malaysia
console.log(kor); // Korea
console.log(mon); // Mongolia
console.log(jap); // Japan
console.log(southAsia); // [ 'India', 'Pakistan', 'Bangladesh', 'Nepal', 'Butan' ]


// Spread Operator to Copy Array.

const evens = [0, 2, 4, 6, 8, 10]
const evenNumbersWithSpread = [...evens]

const odds = [1, 3, 5, 7, 9]
const oddNumbersWithSpread = [...odds]

const wholeNumbersWithSpread = [...evens, ...odds]

console.log(evenNumbersWithSpread); // [ 0, 2, 4, 6, 8, 10 ]
console.log(oddNumbersWithSpread);  // [ 1, 3, 5, 7, 9 ]
console.log(wholeNumbersWithSpread);  // [0,2,4,6,8,10,1,3,5,7,9,], sort method based on this array.
console.log(wholeNumbersWithSpread.sort((a, b) => a - b)); // [0,1,2,3,4,5,6,7,8,9,10]
console.log(wholeNumbersWithSpread.sort((a, b) => {
    if (a < b) {
        return -1
    } else {
        return 0
    }
}));  //  [0,1,2,3,4,5,6,7,8,9,10]


const frontEnd = ['HTML', 'CSS', 'JS', 'React']
const backEnd = ['Node', 'Express', 'MongoDB']
const fullStack = [...frontEnd, ...backEnd]
console.log(fullStack); // [ 'HTML','CSS','JS','React','Node','Express','MongoDB']


// Spread Operator to Copy Object
// We can copy an object using a spread operator
const user = {
    name: 'Emran',
    title: 'Programmer',
    country: 'Bangladesh',
    city: 'Dhaka'
}
const copiedUser = { ...user }
console.log(copiedUser); // { name: 'Emran',title: 'Programmer',country: 'Bangladesh',city: 'Dhaka'}


// Modifying or Changing the Object while Copying

const modifyObjectUserWithSpread = {
    name: 'Emran',
    title: 'Programmer',
    country: 'Bangladesh',
    city: 'Dhaka'
}
const modifiedUser = { ...modifyObjectUserWithSpread, title: 'Teacher' }
console.log(modifiedUser); // {name: 'Emran',title: 'Teacher',country: 'Bangladesh',city: 'Dhaka'}

// Spread Operator wiht Arrow Function
// Whenever we like to write an arrow function which takes unlimited number of arguments, we use a spread operatro. If we use a spread operator as a parameter, the argument passed when we invoke a function will change the array.

const sumAllNums = (...args) => {
    console.log(args);
}

sumAllNums(1, 2, 3, 4) // [1,2,3,4], spread operator returns an array.
// sumAllNums([1,2,3,4]) // [ [ 1, 2, 3, 4 ] ], it returns nested array.

const sumAllNumsWithSpread = (...args) => {
    let sum = 0
    for (const num of args) {
        sum += num
    }
    return sum
}
console.log(sumAllNumsWithSpread(1,2,3,4,5)) // 15