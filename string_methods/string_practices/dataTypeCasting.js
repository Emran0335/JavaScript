//Changing Data Type(Casting)

// Casting: Converting one data type to another data type is called Type Casting. We use parseInt(), parseFloat(), Number(), + sign, str() methods. When we do arithmetic operations, string numbers(i.e "10") should  be first converted to integer or float if not it returns an error.


// String ot Int(Integer)
// We can convert string number to a number. Any number inside a qoute is a string number. An example of string number: "10", "5", etc. We can convert string to number using the following methods.

//1. parseInt()
//2. Number()
//3. Plus sign(+)

let num_string = "10"
let num_of_string_one = parseInt(num_string);
let num_of_string_two = Number(num_string);
let num_of_string_three = +num_string
console.log(num_of_string_one); //10
console.log(num_of_string_two); //10
console.log(num_of_string_three); //10

//String to Float(floating number(10.00))
// We can convert string float number to a float number. Any float number inside a qoute is a string float number. An example of a string float number: "9.81", "3.14", "1.44", etc. We can convert string float to number using the following methods:

//1. parseFloat()
//1. Number()
//1. Plus sign(+)


let num_str = "9.81"
let num_float_one = parseFloat(num_str)
let num_float_two = Number(num_str)
let num_float_three = +num_str
console.log(num_float_one); //9.81
console.log(num_float_two); //9.81
console.log(num_float_three); //9.81

// Float to Int
//We can convert float numbers to integers. We use the following method to convert float to int:

//parseInt()

let numFloat = 9.81
let numInt = parseInt(numFloat);
console.log(numInt); //9