// findIndex
// findIndex(): it returns the position(index) of the first element which satisfies the condition is true, otherwise it returns -1.

const names = ['Emran', 'Hossain', 'Rony', 'Ruhul']
const ages = [24, 22, 25, 32, 35, 18]

const resultOne = names.findIndex((name) => name.length > 4) // 0, as Emran is in the index = 0.
const resultTwo = names.findIndex((name) => name.length > 8) // -1, as it did not return true.
console.log(resultOne) // 0
console.log(resultTwo) // -1

const ageOne = ages.findIndex((age) => age < 20) // 5, as 18 is in the index 5 of the array.
const ageTwo = ages.findIndex((age) => age > 25) // 3, as 32 is the first matched value and its index is 3
console.log(ageOne); // 5
console.log(ageTwo); // 3



