//Logical Operators
//The following sumbols are the common logical operators: &&(ampersand - and operator), ||(double pipe-or operator). The && operator gets true only if the two operands are true. The || operator gets true either of the operand is true. The !(exclamation note) negates(convert) true to false and false to true.

//&& ampersand operator example

const check = 4 > 3 && 10 > 5   //true && true ->true
console.log(check); //true

const checkTwo = 4 > 3 && 10 < 5    //true && false -> false
console.log(checkTwo); //false

const checkThree = 4 < 3 && 10 < 5  //false && false ->false
console.log(checkThree); //false


// || pipe, or operator example

const oneCheck = 4 > 3 || 10 > 5    //true || true ->true
console.log(oneCheck); //true

const twoCheck = 4 > 3 || 10 < 5    //true || false -> true
console.log(twoCheck); //true

const threeCheck = 4 < 3 || 10 < 5  //false || false -> false
console.log(threeCheck); //false

// ! Negation examples

let legalOne = 4 > 3
console.log(legalOne); //true

let negateOne = !(4 > 3)
console.log(negateOne); //false
let isLightOn = true
let isLightOff = !isLightOn
console.log(isLightOff); //false
let isMarried = !false
console.log(isMarried); //true