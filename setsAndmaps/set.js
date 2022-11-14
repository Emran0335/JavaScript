// Set
// Set is a collection of elements. Set can only contains unique elements. Let us see how to create a set in the section below.

// Creating an empty set
const companies = new Set()
console.log(companies); // Set(0) {}

// Creating set from array
const languages = [
    'English',
    'Finnish',
    'English',
    'Bangla',
    'Spanish',
    'French',
    'English',
    'French'
]
const setOfLanguages = new Set(languages)
console.log(setOfLanguages); // Set(5) {'Englush', 'Finnish', 'Bangla', 'Spanish', 'French'}

// Set is an iterable object and we can iterate through each elements.
for (const language of setOfLanguages) {
    console.log(language); // English Finnish Bangla Spanish French
}

// Adding an element to a set.
// add() of set: takes parameter which will be the element of set.
console.log(companies.size); // size is property of set and the result is 0.
// Now add element to the companies set.
companies.add('Google') // appends new element with specified value to the end of the set.
companies.add("Facebook")
companies.add("Amazon")
companies.add("Oracle")
companies.add("Microsoft")
console.log(companies.size); // 5 elements in the set
console.log(companies); // Set(5) {'Google','Facebook','Amazon','Oracle','Microsoft'}


// We can also use loop to add element to a set.
const arrayOfCompanies = ['Google', 'Facebook', 'Amazon', 'Oracle', 'Microsoft']
let setOfCompanies = new Set()
for (const company of arrayOfCompanies) {
    setOfCompanies.add(company)
}
console.log(setOfCompanies); // Set(5) {'Google','Facebook','Amazon','Oracle','Microsoft'}

// Deleting an element of a set
// We can delete an element from a set using a delete method.
console.log(setOfCompanies.delete('Google')); // true as Google has been deleted
console.log(setOfCompanies.size); // 4 elements left in the set.

// Checking an element in the set.
// The (has method) can help to know if a certain element exists in a set.
console.log(setOfCompanies.has('Apple')); // false as it is not in the set
console.log(setOfCompanies.has('Facebook')); // true as it is in the set.

// Clearing the set.
// It removes all the elements from a set.
// the (clear method): it clears all the elements from a set.
setOfCompanies.clear()
console.log(setOfCompanies); // Set(0) {}


// See the examples  below to learn how to use set.
const arrayLanguages = [
  "English",
  "Finnish",
  "English",
  "Bangla",
  "Spanish",
  "French",
  "English",
  "French",
];

const langSet = new Set(arrayLanguages)
console.log(langSet); // set(5) {'Englush', 'Finnish', 'Bangla', 'Spanish', 'French'}
console.log(langSet.size); // 5

const counts =[]
for (const language of langSet) {
    const filteredLang = arrayLanguages.filter((lng) => lng === language)
    console.log(filteredLang); // ["English", "English", "English"] ["Finnish"] ["Bangla"] ["Spanish"] ["French", "French"]
    counts.push({lang: language, count:filteredLang.length})
}
console.log(counts);

// other use case of set. For instance to count unique item in an array.

const numbersRandom = [5, 3, 2, 5, 5, 9, 4, 5]
const setOfnumbersRandom = new Set(numbersRandom)
console.log(setOfnumbersRandom); // Set(5) {5,3,2,9,4}


// Union of sets
// A union of two sets can be achieved using spread operator(...spread operator). Let us find the union of set A and set B (AUB)

let a = [1, 2, 3, 4, 5]
let b = [3, 4, 5, 6]
let c = [...a, ...b]
console.log(c); // [1,2,3,4,5,6]
let A = new Set(a)
let B = new Set(b)
let C = new Set(c)
console.log(A); // object, Set(5) {1,2,3,4,5}
console.log(B); // object, Set(4) {3,4,5,6}
console.log(C); // object, Set(6) {1,2,3,4,5,6}


// Intersection of sets ->D∩E
// an intersetion of two sets can be achieved using filter. Let us find the intersection of set D and set E (D∩E)

let d = [1, 2, 3, 4, 5]
let e = [3, 4, 5, 6]

let D = new Set(a)
let E = new Set(e)

let intersection = d.filter((num) => E.has(num)) // filter is an array method whereas has is a set method. As E set has 3,4,5 which are same in the d array. So, it will return [3,4,5,].
console.log(intersection); // [3,4,5]
let intersectionSet = new Set(intersection) // here, array is changed into set.
console.log(intersectionSet);


// Difference of sets
// the difference between two sets can be achieved using filter method of array. Let's find the difference of set A and set B (A\B) or (A-B).

let x = [1, 2, 3, 4, 5]
let y = [3, 4, 5, 6]

let X = new Set(x)
let Y = new Set(y)

let differenceOfArray = x.filter((num) => !Y.has(num)) //has method of set returns false. So, it will return 1,2 as they are not in the set Y.
let differenceOfSet = new Set(differenceOfArray)
console.log(differenceOfSet); // Set(2) {1,2}

