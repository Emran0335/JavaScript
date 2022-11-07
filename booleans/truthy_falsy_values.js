//Truthy Values

//All numbers(positive and negative) are trythy values and only zero is falsy value
//All strings are truthy and only empty string("") is falsy value.
//The boolean true is also truthy value.


//Falsy Values
//null, NaN, 0, undefined, the boolean false, empty string("", '', ``), on, etc.



//Undefined
//If we declare a variable and if we do not assign a value, the value will be undefined. In addition to this, if a function is not returning the value, it will be undefined.
let undefined_var;
console.log(undefined_var); //undefined


//Null
//When a variable is declared but value is not given, it is called null or falsy value.
let null_var = null //value is empty as it is null.
console.log(null_var); //null

//Operators

//Assignment operators
// An equal sign in JavaScript is an assignment operator. It uses to assign a value to a variable. Actually it assign value from right to the left variable.

let firstName = "Emran"      //equal sign assigns value from right to left variable
let country = "Bangladesh" //equal sign assigns value from right to left variable

// =, x = y, x = y, y is stored in x
// +=, x+= y, x = x + y, (x + y) is stored in x
// -=, x-= y, x = x - y, (x - y) is stored in x
// *=, x*= y, x = x * y, (x * y) is stored in x
// /=, x/= y, x = x / y, (x / y) is stored in x
// %=, x%= y, x = x % y, (x % y) is stored in x
// **=, x**= y, x = x ** y, (x ** y) is stored in x, **exponential(**) = a**b means a square b.


//Arithmetic Operators
//Arithmetic operators are mathematical operators.

//1. Addition(+)-> a + b
//2. Subtraction(-)-> a - b
//3. Multiplication(*)-> a * b
//4. Division(/)-> a / b
//5. Modulus(%)-> a % b
//6. Exponential(**)-> a ** b or a square b.(powerOf)

let numOne = 4
let numTwo = 3
let sum = numOne + numTwo
let subtra = numOne - numTwo
let mult = numOne * numTwo
let div = numOne / numTwo
let remainder = numOne % numTwo
let powerOf = numOne ** numTwo

console.log(sum, subtra, mult, div, remainder, powerOf); // 7,1,12,1,333333, 1, 64

const PI = 3.14;
let radius = 100;
//let us calculate the araa of a cirlcle
const area_of_circle = PI * radius ** 2 //PI * radius * radius
console.log(area_of_circle); //31400

const gravity = 9.81
let mass = 70
//let us calculate weigth of an object
const weigth = mass * gravity
console.log(weigth); //686.7 N(Newton)

