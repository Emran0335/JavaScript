// Function with default parameters
// function decalaration need function keyword but in arrow function we use let, const. Function keyword does not need any more.
// Sometimes we pass default values to parameters. When we invoke the function if we do not pass an argument, the default value will be used. Both function declaration and arrow function can have a default values or value.


// function declaration with default value or values

function greetings(name = 'Peter') {
    let message = `${name}, welcome to 30 Days of JavaScript!`

    return message;
}

console.log(greetings());
console.log(greetings("Emran"));



function generateFullName(firstName = "Emran", lastName = "Hossain") {
    let space = " "
    let fullName = firstName + space + lastName

    return fullName;
}

console.log(generateFullName());
console.log(generateFullName("Nusaiba", "Sadifa"));


function calculateAge(birthYear, currentYear = 2022) {
    let age = currentYear - birthYear

    return age;
}

console.log("Age: ", calculateAge(1988));



function weightOfObject(mass, gravity = 9.81) {
    let weight = mass * gravity + "N" //the value has to be changed to string first

    return weight
}

console.log("Weight of an object in Newton: ", weightOfObject(70)); //on earth
console.log("Weight of an object in Newton: ", weightOfObject(70, 1.62)); // on moon


//Let us see how we write the above functions with arrow functions
const arrow_greetings = (name = "Farjana") => {
    let message = name + ", welcome to 30 Days of JavaScript!"

    return message
}
console.log(arrow_greetings());
console.log(arrow_greetings("Emran"));

const arrow_generateFullName = (firstName = "Emran", lastName = "Hossain") => {
    let space = " "
    let fullName = `${firstName}${space}${lastName}`

    return fullName
}
console.log(arrow_generateFullName());
console.log(arrow_generateFullName("Farjana", "Maya"));

const arrow_calculateAge = (birthYear, currentYear = 2022) => currentYear - birthYear
console.log("My Age: ", arrow_calculateAge(1988));

const arrowWeightOfObject = (mass, gravity = 9.81) => mass * gravity + "N"
console.log("Weight of an object in Newton: ", arrowWeightOfObject(70)); // 9.81 gravity on the surface of the earth.
console.log("Weight of an object in Newton: ", arrowWeightOfObject(70, 1.62)); // 1.62 gravity on the surface of the moon.