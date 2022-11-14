// map
// map(): it iterates an array elements and modify the array elements. It takes a callback function with elments, index, array parameter and return a new array.

/*
const modifiedArray = arr.map(function (element, index, arr) {
    return element
})

or
// arrow function and explicit return(without return keyword).
const modifiedArray = arr.map((element, index)=> element)
*/
// Example
const numbers = [1, 2, 3, 4, 5]
const numbersSquareMap = numbers.map(num => num * num)
console.log(numbersSquareMap); // new array, [1,4,9,16,25]


const names = ['Emran', 'Hossain', 'Nusaiba', 'Sadifa']
const namesToUpperCase = names.map(name => name.toUpperCase())
console.log(namesToUpperCase); // [ 'EMRAN', 'HOSSAIN', 'NUSAIBA', 'SADIFA' ]

const countries = ['Bangladesh', 'India', 'Pakistan', 'Nepal', 'Maldives', 'Bhutan', 'Afganistan', 'Sri Lanka']
const countriesToUpperCase = countries.map(country => country.toUpperCase())
console.log(countriesToUpperCase);
/*
[
  'BANGLADESH',
  'INDIA',
  'PAKISTAN',
  'NEPAL',
  'MALDIVES',
  'BHUTAN',
  'AFGANISTAN',
  'SRI LANKA'
]
*/
const countriesFirstThreeLetters = countries.map(country => country.toUpperCase().slice(0, 4))
console.log(countriesFirstThreeLetters);
/*[
  'BANG', 'INDI',
  'PAKI', 'NEPA',
  'MALD', 'BHUT',
  'AFGA', 'SRI '
]
*/

