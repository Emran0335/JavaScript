// endsWith: it takes a substring as an argument and it checks if the string starts with that specified substring. It returns a boolean(true or false). If the string ends with the substring, it is true. Otherwise it is false.
// string.endsWith(substring)


let string = "Love is the best way to conquer anything in the world"
console.log(string.endsWith("world")); //true
console.log(string.endsWith("in the world")); //true
console.log(string.endsWith("the best way to conquer")); //false


let country = "Bangladesh"
console.log(country.endsWith("desh")); //true
console.log(country.endsWith("Bangla")); //false
console.log(country.endsWith("h")); //true