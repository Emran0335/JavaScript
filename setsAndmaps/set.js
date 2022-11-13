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