// Operator Precedence
// Operator precedence determines how operators are parsed concerning each other. Operators with higher precedence become the operands(come first) of operators with lower precedence(come next).

console.log(3 + 4 * 5); //23, 3 + 20, first multiplication and then addition

console.log(4 * 3 ** 2) //36, 4 * 9, first exponential and then multiplication


//Assignment operators are right-associative(right-to-left), so we can write:
let a;
let b;
console.log(a = b = 5) //result 5, i.e b = 5,  first b = 5 and then a = 5



//Precedence and Associativity
// Consider an expression describable by the representation below, where both OP1(operator i.e. +,-,*,/,**) and OP2(operator i.e. +,-,*,/,**) are fill-in-the blanks for operators.
// a OP1 b OP2 c
//The combination above has two possible interpretations:
// 1. (a OP1 b) OP2 c  i.e. (a + b) * c
// 2. a OP1 (b OP2 c)   i.e. a * (b + c)
// whick one the language decides to adopt first depends on the identity of OP1 and OP2

// If OP1 and OP2 have different precedence levels, the operator wiht the higher precedence goes first and associativity does not matter. Multiplication has higher precedence than addition and executed firstt, even though addition is written first in the code.

console.log(3 + 10 * 2); //23
console.log(3 + (10 * 2)); // 23, parentheses here are superfluous(no need).
console.log((3 + 10) * 2); //26, here patentheses have higher precedence.



// As another example, the unique exponentiation operator has right-associativity(right-to-left), whereas other arithmetic operators have left-to-right asscoaitivity.

const expo_a = 4 ** 3 ** 2 // same as 4 ** (3 ** 2).
console.log(expo_a) // 262144
const div_a = 4 / 3 / 2  // same as 4 / (3 / 2).
console.log(div_a); //0.6666666666666....
//when mixing division and exponentiation, the exponentiation always comes before the division. for example, 2 ** 3 / 3 ** 2 wille be like this (2 ** 3) / (3 ** 2)



//For prefix unary operators(not birnary operators), has higher precedence than birnary operators.

const num_a = 1
const num_b = 2
let unary_first = typeof num_a + num_b  //equivalent ot (typeof a) + b.
console.log(unary_first) //number2
// If the unary operator is on the second operand, the binary operator OP2 mush have lower precedence than the unary operator OP1 and it will be OP2 (OP1 b).


// If we have two unary operantor(i.e. typeof), the unary operator closer to the operand, OP2. for example OP1 (OP2 a)

async function* foo() {
    //await yield 1;  //(await yield) 1
}