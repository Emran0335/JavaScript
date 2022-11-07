// Most of the acitivities we do in our life full of repetitions. Imagine if we ask ourselves to print out from 0 to 100 using console.log(). To implement this simple task, it may take us 2 to 5 minutes. Such kind of tedius and repetitive task can be done or carried out using loop.

//In programming languages to carry out repetitive task, we use different kinds of loops. The following one is very commonly used is foor loop.

//For Loop

//For loop structure
// for (initialization, condition, increment / decrement) {
//     code goes here
// }

for (let i = 0; i <= 5; i++) {
    console.log(i); //0 1 2 3 4 5
}

for (let i = 5; i >= 0; i--) {
    console.log(i); //5 4 3 2 1 0
}

for (let i = 0; i <= 5; i++) {
    console.log(`${i} * ${i} = ${i * i}`);
}
// 0 * 0 = 0
// 1 * 1 = 1
// 2 * 2 = 4
// 3 * 3 = 9
// 4 * 4 = 16
// 5 * 5 = 25


//Pushing array elements into empty array.
const countries = ['Finland', 'Sweden', 'Denmark', 'Norway', 'Iceland']
const newArr = []
for (let i = 0; i <countries.length; i++) {
    newArr.push(countries[i].toUpperCase())
}
console.log(newArr);

//Adding all elements in the given array

const numbers = [1, 2, 3, 4, 5]
let sum = 0
for (let i = 0; i < numbers.length; i++) {
    sum = sum + numbers[i]
}
console.log(sum)

//Creating a new array based on the exiting array

const numbers_one = [1, 2, 3, 4, 5]
const newArr_one = []
for (let i = 0; i < numbers_one.length; i++) {
    newArr_one.push(numbers_one[i] ** 2)
}
console.log(newArr_one);