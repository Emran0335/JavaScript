//lastIndexOf(): Takes a substring and if the substring exists in a string the last position of the same substring's index will return.


let string = "I love JavaScript"
console.log(string.lastIndexOf("love")) //2
console.log(string.lastIndexOf("I")) //0

let anotherString = "I love JavaScript. If you do not love JavaScript what else do you love."
console.log(anotherString.lastIndexOf("love"));//66(last love's l index(66))
console.log(anotherString.lastIndexOf("l"));//66