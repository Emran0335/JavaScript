//startsWith(): It takes a substring as an argument and it checks if the string starts with that specified substring. It returns a boolean(true ar false).

// string.startsWith(substring)

let string = "Love is the best doctor in the world."

console.log(string.startsWith("Love")); //true
console.log(string.startsWith("love")); //false as it starts with Love
console.log(string.startsWith("Love")); //true
console.log(string.startsWith("doctor")); //false! doctor starts at the beginning.
console.log(string.startsWith("world")); //false! world starts at the beginning.