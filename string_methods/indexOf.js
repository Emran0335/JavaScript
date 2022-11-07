//indexOf(): Takes a substring and if the substring exists in a string it returns the first position of the substring if the substring does not exist, it returns -1


//string.indexOf(substring)

let string = "30 Days Of JavaScript"

console.log(string.indexOf("D")); // index = 3
console.log(string.indexOf("Days")); // index = 3 as it starts with D and its index is 3
console.log(string.indexOf("days")) // if it does not exist, it returns negative 1(-1)
console.log(string.indexOf("a")) // 4
console.log(string.indexOf("Script")); //15