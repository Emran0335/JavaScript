//includes(): it takes a substring as argument and it checks if the subsring argument exists in the string. includes() returs a boolean. It checks if a substring exists in the given string and it returns true. Otherwise it returns false.


let string = "30 Days Of JavaScript"

console.log(string.includes("Days")); //true
console.log(string.includes("days")); //false
console.log(string.includes("Script")); //true
console.log(string.includes("script")); //false
console.log(string.includes("Java")); //false
console.log(string.includes("java")); //false


let country = "Bangladesh"

console.log(country.includes("Bangla")); //true
console.log(country.includes("bangla")); //false
console.log(country.includes("desh")); // true
console.log(country.includes("Desh")); // false
