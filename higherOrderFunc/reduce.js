// reduce
// reduce(): reduce method takes a callback function. The callback function takes accumular, current element, and optional initialValue as parameters and returns a single value(totalamount as value). It is a good practice to define an initial value for the accumulator value. If we do not specify this parameters, by default accumulator will get the first number as value. If our array is an empty array, then JavaScript will throw an error.

/*
arr.reduce((acc, cur) => {
    // some operations goes here before returning a value
    return
},initialValue)
*/

const numbers = [1, 2, 3, 4, 5]
const sum = numbers.reduce((acc, cur) => acc + cur, 0) // here for acc-> acc = 0, acc +=cur, acc = 0 + 1,
console.log(sum); // 15

const anotherNumbers = [1, 2, 3, 4, 5, 6]
const anotherSum = anotherNumbers.reduce((acc, cur) => acc + cur) // by default, acc = 1
console.log(anotherSum); // 21
