// match(): it takes a substring or regular expression pattern as an argument and it returns an array if there is match, if not it returns null. Let us see how a regular expression pattern looks like. It starts with (/) sign and ends with (/) sign.

let string = "love"
// let patternOne = /love/  //(without any flag)
// let patternTwo = /love/gi //(g-means to search in the whole text, i-case insensitive)

console.log(string.match("love"));
let another_string = "I love JavaScript. It you do not love JavaScript what else do you love?"

console.log(another_string.match("love"))
console.log(another_string.match(/love/))
console.log(another_string.match(/love/g))
console.log(another_string.match(/love/gi))
console.log(another_string.match(/love/gi))

let txt = "In 2019, I run 30 Days of Python. Now, in 2020 I super exited to start this challenge."
console.log(txt.match(/\d/g)); //it is called regular expression (/\d/g)
console.log(txt.match(/\d+/g)); //it is called regular expression (/\d/g)


//d with escape character means d is not normal instead it acts as digit.
//+ means one or more digit numbers.
// if there is g after that it means global, search everywhere.