// sort
// sort(): the sort methods arranges the array elements either ascending or descending order. By default, the sort() method sorts values as strings and sorts in ascending order. This works well for string array items but not for numbers. If number values are sorted as strings and it gives us wrong result. Sort method modify the original array. It is recommended to copy the original data before we start using sort method.

// sorting string values
const products = ['Milk', 'Tea', 'Sugar', 'Honey', 'Apple', 'Carrot']
console.log(products); // [ 'Milk', 'Tea', 'Sugar', 'Honey', 'Apple', 'Carrot' ]
console.log(products.sort()); // [ 'Apple', 'Carrot', 'Honey', 'Milk', 'Sugar', 'Tea' ], note that the original array is also sorted.
console.log(products); // [ 'Apple', 'Carrot', 'Honey', 'Milk', 'Sugar', 'Tea' ]


// sorting numberic values
// as we can see in the example below, 100 came first after sorted in ascending order. Sort converts items to string, since '100' and other numbers compared. By default, sort method converts everthing into string '100'. Here 1 is the smallest than the other numbers in the given array. Example is given below. To avoid this, we use a compare callback function inside the sort method which returns a negative, zero or positive.

const numbers = [9.81, 3.14, 100, 37]
// using sort method to sort number items of the given array will provide a wrong result, see below.
console.log(numbers.sort()); // [ 100, 3.14, 37, 9.81 ]

// fix this problem, we will use a callback function.
numbers.sort(function (a, b) {
    return a - b;
})
console.log(numbers); // [ 3.14, 9.81, 37, 100 ]

numbers.sort((a, b) => b - a)
console.log(numbers); // [ 100, 37, 9.81, 3.14 ]


// sorting objects of an array.
// whenever we sort objects in an array, we use the object key to compare. Let us see the example below.

// Function used to determine the order of the elements. It is expected to return a negative value  if the first argument is less than the second argument(a.age < b.age), zero if they're equal(a.age === b.age), and a positive value(if a.age > b.age) otherwise. If omitted, the elements are sorted in ascending, ASCII character order.

// As sort() sorts the array in its palce automatically according to the unicode sign from a to z(a to z), it is needed to pass compareFunc as parameter to get exact or expected result of the array of numbers. If compareFunc takes (a and b) as parameters and returns positive one(e.i. a-b = positive number), b will be sorted first before a. If the function returns negative(e.i. a-b = negative number), a will be sorted first before b. It it returns zero, it will be sorted originally by default.

/*
objArr.sort(function(a, b) {
    if (a.key < b.key) return -1 //if true, a will be sorted first.
    if (a.key > b.key) return 1 // if true, b will be sorted first.
    return 0 // sorted as usual.
})

or,

objArr.sort(function(a, b) {
    if (a['key'] < b['key']) return -1 //if true, a will be sorted first.
    if (a['key'] > b['key']) return 1 // if true, b will be sorted first.
    return 0 // sorted as usual.
})

or

objArr.sort((a, b) => {
    if(a.keyValue < b.keyValue) {
    return -1  //if true, a will be sorted first.
    } else if(a.keyValue > b.keyValue) {
    return 1   // if true, b will be sorted first.
    } else {
    return 0   // sorted as usual.
    }
})
*/

const users = [
    {name: 'Emran', age: 34},
    {name: 'Hossain', age: 30},
    {name: 'Rony', age: 35},
    {name: 'Ruhul', age: 38},
]

// If we want to use compare function, we have to maintain the following form.
/*
users.sort((a, b) => {
    if (a.age < b.age) return -1
    if (a.age > b.age) return 1  // it will run, and b will sorted first than a.
    return 0
})
console.log(users);
[
  { name: "Hossain", age: 30 },
  { name: "Emran", age: 34 },
  { name: "Rony", age: 35 },
  { name: "Ruhul", age: 38 },
];
*/

users.sort((a, b) => {
    if (a.age < b.age) { // 34 < 30 is false, so it will not run.
        return -1
    } else {
        return 0 // this zero works and
    }
})

console.log(users);
/*
[
  { name: 'Hossain', age: 30 },
  { name: 'Emran', age: 34 },
  { name: 'Rony', age: 35 },
  { name: 'Ruhul', age: 38 }
]
*/

users.sort((a, b) => {
    if (a.age > b.age) {
        return -1
    } else {
        return 0
    }
})


const constantsValueArrayObj = [
    {name: 'Boiling Point', point: 100},
    {name: 'Gravity', point: 9.81},
    {name: 'PI', point: 3.14},
    {name: 'Body Temperature', point: 37},
]
constantsValueArrayObj.sort()
console.log(constantsValueArrayObj);
/*
sort originally
[
  { name: 'Boiling Poin', point: 100 },
  { name: 'Gravity', point: 9.81 },
  { name: 'PI', point: 3.14 },
  { name: 'Body Temperature', point: 37 }
]
*/

// constantsValueArrayObj.sort((a, b) => {
//     return a.point - b.point
// })
console.log(constantsValueArrayObj);
/*
sorted acsending
[
  { name: 'PI', point: 3.14 },
  { name: 'Gravity', point: 9.81 },
  { name: 'Body Temperature', point: 37 },
  { name: 'Boiling Point', point: 100 }
]
*/

constantsValueArrayObj.sort((a, b) => {
    if (a.point < b.point) {
        return -1 // a will be sorted first(as 3.14 < 9.81 is true.)
    } else if(a.point > b.point) {
        return 1 // b will be sorted first
    } else {
        return 0
    }
})
console.log(constantsValueArrayObj);
/*[
  { name: 'PI', point: 3.14 },
  { name: 'Gravity', point: 9.81 },
  { name: 'Body Temperature', point: 37 },
  { name: 'Boiling Point', point: 100 }
]*/
console.log(Boolean(-1) == true); // true
console.log(Boolean(0) == true); // false

// another example:
const arrayObjAscending = [
    { name: 'Gravity', point: 9.81 },
    { name: 'Boiling Point', point: 100 },
    { name: 'Body Temperature', point: 37 },
    { name: 'PI', point: 3.14 },
]
console.log(arrayObjAscending.sort());
arrayObjAscending.sort((a, b) => {
    if (a.point > b.point) {
        return 1 // here 1 is positive value, so b will be storted first. 3.14<9.81 is false.
    } else if (a.point < b.point) { // as it is true
        return -1 // this code will run and a will be sorted first
    } else {
        return 0
    }
})
console.log(arrayObjAscending);
/*[
  { name: 'PI', point: 3.14 },
  { name: 'Gravity', point: 9.81 },
  { name: 'Body Temperature', point: 37 },
  { name: 'Boiling Point', point: 100 }
]*/

const arrayObjDescending =[
    { name: "Body Temperature", point: 37 },
    { name: "PI", point: 3.14 },
    { name: "Boiling Point", point: 100 },
    { name: "Gravity", point: 9.81 },
]
arrayObjDescending.sort((a, b) => {
    if (a.point < b.point) { // 37 and 3.14 are compared, a is bigger than b. So, I want to sort a first than b. But the condition is not true and code will not run. That is why I put return value 1. So, the code will work on b as the return value is positive.
        return 1
    } else if (a.point > b.point) { // 37 and 3.14 are compared, a is bigger than b. So, I want to sort a first and the condition is true. So, the code will run. That is why I put return value is -1(negative) so that a will be sorted first.
        return -1
    } else {
        return 0
    }
})
console.log(arrayObjDescending);
/*[
  { name: 'Boiling Point', point: 100 },
  { name: 'Body Temperature', point: 37 },
  { name: 'Gravity', point: 9.81 },
  { name: 'PI', point: 3.14 }
]*/