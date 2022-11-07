// for of loop

// We use for of loop for arrays. It is very handy to iterate through an array if we are not interested in the index of the each elements of the given arrays.

// for (const element fo array) {
//     code goes here
// }


const numbers = [1, 2, 3, 4, 5]
for (const element of numbers) {
    console.log(element);
}

for (const element of numbers) {
  //1*1 = 1, 2*2 = 4, 3*3 = 9.....
  console.log(element * element); //1,4,9,16,25
}

//adding all the numbers in the array
let sum = 0
for (const element of numbers) {
    sum = sum + element
    //sum +=element
}
console.log(sum); // 15


const webTechs = [
    'HTHL',
    'CSS',
    'JavaScript',
    'React',
    'Redux',
    'Node',
    'MongoDB'
]

for (const tech of webTechs) { //it works without using variable const
    console.log(tech.toUpperCase());
}

//to get only the first letter of each tech element of the webTechs
for (const tech of webTechs) {
    console.log(tech[0].toLowerCase());
}

