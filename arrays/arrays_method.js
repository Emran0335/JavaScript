// Arrays

// In contrast to vaiables, an array can store multiple values. Each value in an array has an index. And each index has a reference in a memory address. Each value can be accessed  by using their index. The index of an array starts from zero, and the index  of the last element of the  array is array.length - 1 i.e. the last element of the array less by one from the length of the array.

// An array is a collection of different data types which are ordered and changeable(modifiable). An array allows storing duplicate elements and different data types. An array can be empty, or it may have different data type values.

// In JavaScript, we can create an array in different ways. It is  common to use const instead of let to declare an array variable. If we are using const it means we cant not use that variable name again.

const arr = Array()
console.log(typeof arr) //object

//The most recommended way to create an empty list/array
const empty_arr = []
console.log(empty_arr)
console.log(empty_arr.length) //0

//Array with initial values. We  use length property to find the length of an array.

const numbers_arr = [0, 3.14, 9.81, 37, 98.6, 100]; //array of numbers
const fruits = ['banana', 'orange', 'mango', 'lemon'] //array of strings


// Print the array and its length

console.log("Array of Numbers:", numbers_arr);
console.log("Array of Numbers:", numbers_arr.length);//6

// Array can have  items/elements of different data types.
const diff_data_arr = [
    'Emran',
    250,
    true,
    {country: 'Bangladesh', city: 'Dhaka'},
    {skill: ['HTML', 'CSS', 'JS', 'Reactjs', 'Python']}
]
console.log(diff_data_arr);


//Creating an array using split
// As we have seen in the earlier section, we can split a string at different positions, and we can change to an array. Let us see the examples below.

//There are different methods to manipulate an array. These are some of the available methods to deal with
// Array, concat, indexOf, slice, splice, join, toString, includes, lastIndexOf, isArray, fill, push, pop,shift, unshift


// Accessing array items using index
// We access each element in an array using their index. An array index starts from 0. The picture below clearly shows the index of each element in the array.

// Array Constructor
//Array: to create an array

const arrCreate = Array()
console.log(arrCreate);

const eigthEmptyValues = Array(8) // it creates  eight empty values.

// Create static values with fill method

// fill: fill all the array elements with a static value

const arrayCreatFill = Array() // create an empty array.
console.log(arrayCreatFill);

const eightXvalues = Array(8).fill("X") // as Array is a constructor
console.log(eightXvalues)

const eight0values = Array(8).fill(0)
console.log(eight0values);

const four4values = Array(4).fill(4)
console.log(four4values);


// Concatenating array using concat

const firstList = [1,2,3]
const secondList = [4,5,6]

const thirdList = firstList.concat(secondList)
console.log(thirdList); // [1,2,3,4,5,6]

const arrFruits = ['banana', 'orange', 'mango', 'lemon']
const arrVegies = ['Tomato', 'Potato', 'Cabbage', 'Onion', 'Carrot']
const arrFruitsVegies = arrFruits.concat(arrVegies);
console.log(arrFruitsVegies);
// So, concat() method can concatenate two arrays.

// indexOf(): to check if an item exist in an array. If it exists  it returns the index else it returns (-1)

const arrNumbers = [1,2,3,4,5,6]
console.log(arrNumbers.indexOf(9)); //-1
console.log(arrNumbers.indexOf(6)); //index = 5
console.log(arrNumbers.indexOf(1)); //index =  0;
console.log(undefined == undefined); //true
console.log(undefined === undefined); //true

let arrIndex = arrNumbers.indexOf(1) // 0
if(arrIndex === 0) {
    console.log("This number is in the arrNumbers.");
} else {
    console.log('This number is not in the arrNumbers.');
}

let arrIndexIsnotFound = arrNumbers.indexOf(7) //-1

if(arrIndexIsnotFound === -1) {
    console.log('7 is not in the array.');
} else {
    console.log('7 is in the  array.');
}

// Let us check if banana exist in the array.
const fruitsOfArray = ['banana', 'orange', 'mango', 'lemon']
let indexOfBanana = fruitsOfArray.indexOf('banana')
console.log(indexOfBanana) // 0
if(indexOfBanana === -1) {
    console.log("This fruit does not exist in the array.");
} else {
    console.log("This fruit does exist in the array.");
}

// We can use also ternary here
indexOfBanana === -1 ? console.log("banana does not exist.") : console.log("banana does exist.");

// let us check if an avocado exist in the array.
let indexOfAvocado =  fruitsOfArray.indexOf("avocado")
console.log(indexOfAvocado); // -1

if (indexOfAvocado === -1) {
    console.log("this fruit does not exist in the array.");
} else {
    console.log("this fruit does exist in the array.");
}

// Getting last index of an element in array
// lastIndexOf(): It gives the position(index) of the last item in the given array. If  it exists, it returns the index else it returns -1.
const numbersOfArray = [1,2,3,4,5,3,1,2,4]
console.log(numbersOfArray.lastIndexOf(3)); // 5
console.log(numbersOfArray.lastIndexOf(4)); // 8
console.log(numbersOfArray.lastIndexOf(2)); // 7
console.log(numbersOfArray.lastIndexOf(1)); // 6

// includes(): to check if an item exists in the given array. It it exists, it returns the true else it return false.

const numArrayOfIncludes = [1,2,3,4,5]
console.log(numArrayOfIncludes.includes(5)); // true
console.log(numArrayOfIncludes.includes(0)); // false
console.log(numArrayOfIncludes.includes(1)); // true
console.log(numArrayOfIncludes.includes(6)); // false

const weTechs = [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Redux',
    'Node',
    'MongoDB'
] // list of web technologies
console.log(weTechs.includes('Node')); // true
console.log(weTechs.includes('C')); // false

// Array.isArray(): to check if the data type is an array.
const numbersOfArrayToCheck = [1,2,3,4,5]
console.log(Array.isArray(numbersOfArrayToCheck)); // true
const numberTypeData = 100
console.log(Array.isArray(numberTypeData)); // false


// Converting array to string

// toString(): it converts an array to string.
const numberTobeString = [1,2,3,4,5]
console.log(numberTobeString.toString()); // 1,2,3,4,5
const arrayTobeString = ['Emran', 'Farjana', 'Nusaiba', 'Hossain', 'Sadifa']
console.log(arrayTobeString.toString()); // Emran, Farjana, Nusaiba, Hossain, Sadifa



// Joining array elements

// join(): It is used to join the elements of the array, the argument we passed in the join method will be joined in the array and return as a string. By default, it joins with a comma, but we can pass different string  parameter which can be joined between the items.
const numberJoin = [1,2,3,4,5]
console.log(numberJoin.join()); // 1,2,3,4,5
const arrayNamesJoin = ['Emran', 'Hossain', 'Sadifa', 'Nusaiba']
console.log(arrayNamesJoin.join()); // Emran,Hossain,Sadifa,Nusaiba
console.log(arrayNamesJoin.join("")); //EmranHossainSadifaNusaiba
console.log(arrayNamesJoin.join(" ")); // Emran Hossain Sadifa Nusaiba
console.log(arrayNamesJoin.join(", "));
console.log(arrayNamesJoin.join(" # "));
// join(",") changes two element of array into -> Inter, sans-serif
const fontFamily = ["Inter", "sans-serif"].join(",");
console.log("FontFamily: ", fontFamily);



// Slice  array elements
// slice(): to cut out a multiple items in range. It takes two parameters-> 01. staring and 02. ending position(it does not include ending position)
const numbersSlice = [1,2,3,4,5]
console.log(numbersSlice.slice()); // it copies all items.
console.log(numbersSlice.slice(0)); // it copies all items. [1,2,3,4,5]
console.log(numbersSlice.slice(0, numbersSlice.length)); // it copies all items.
console.log(numbersSlice.slice(0,3)); // [1,2,3], it doesn't include the ending position

// Splice method in array
// splice(): it takes three parameters -> starting position, number of items to be removed and number of items to be added.

const numberSpliceRemoved = [1,2,3,4,5]
let okay = numberSpliceRemoved.splice()
console.log(okay); //[], it removes all items.

const numbersSpliceOne = [1,2,3,4,5]
numbersSpliceOne.splice(0,1)
console.log(numbersSpliceOne) // [2,3,4,5], it removes the first item from the array.

const numbersSpliceOneAndAddOne = [1,2,3,4,5]
numbersSpliceOneAndAddOne.splice(0,1,6)
console.log(numbersSpliceOneAndAddOne) // [6,2,3,4,5], it removes the first item and add 6 at the removed item.

// Adding item to an array using push method
// push(): adding item at the end of an array. To add item to the end of an existing array, we use the push method.

const arrayPush = ['Emran', 'Hossain']
arrayPush.push("Teacher")
console.log(arrayPush); // ['Emran','Hossain','Teacher']

const numbersPush = [1,2,3,4,5]
numbersPush.push(6)
console.log(numbersPush) // [1,2,3,4,5,6]

// pop(): is an another array method to remove item from the end of the array.
const numbersPop = [1,2,3,4,5,6]
numbersPop.pop()
console.log(numbersPop) //[1,2,3,4,5], it will remove the last item 6 from the array.

// shift(): removing one array element from the beginning of the given array.
const numbersShift = [1,2,3,4,5]
let shiftResult = numbersShift.shift()
console.log(shiftResult) // 1, it has removed the beginning items from the array.

// unshigt(): adding array element at the beginning of the given array.
const numbersUnshift = [1,2,3,4,5]
numbersUnshift.unshift(0)
console.log(numbersUnshift) //[0,1,2,3,4,5], it adds 0 at the beginning of the array.

// Reversing array order
// reverse(): it reverses the order of an array.
const numbersReverse = [1,2,3,4,5]
numbersReverse.reverse()
console.log(numbersReverse) // [5,4,3,2,1]

numbersReverse.reverse()
console.log(numbersReverse) //[1,2,3,4,5]


// Sorting elements in array
// sort(): arrange array elements in ascending order. Sort takes a callback function, we will see how to sort with a callback function in the coming sections.

const webTechs = [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Redux',
    'Node',
    'MongoDB'
]
weTechs.sort()
console.log(weTechs)  // ["CSS", "HTML", "JavaScript", "MongoDB", "Node", "React", "Redux"]
weTechs.reverse()
console.log(weTechs) // ["Redux", "React", "Node", "MongoDB", "JavaScript", "HTML", "CSS"]


// Array of arrays
// Array can store different data types including an array itself. Let us create an array of arrays.

const firstNumbersArray = [1,2,3]
const secondNumbersArray = [4,5,6]
const arrayOfArrays = [[...firstList],[...secondNumbersArray]]
console.log(arrayOfArrays) // [ [ 1, 2, 3 ], [ 4, 5, 6 ] ]

const frontEnd = ['HTML','CSS','JS','React','Redux']
const backEnd = ['Node', 'Express','MongoDB']
const fullStack = [frontEnd, backEnd]
console.log(fullStack) // [[ 'HTML', 'CSS', 'JS','React', 'Redux' ], [ 'Node', 'Express', 'MongoDB' ]]
console.log(fullStack.length) // 2, it has two arrays inside of it.
console.log(fullStack[0]) // [ 'HTML', 'CSS', 'JS', 'React', 'Redux' ],
console.log(fullStack[1]) // [ 'Node', 'Express', 'MongoDB' ]
