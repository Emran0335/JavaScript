//Comparison Operators
//In programming, We compare values. We use comparison operators to compare two values. We check if a value is greater or less or equal to other value.

// ==, equal in value only(equivalent), x == y
// ===, equal in value and data type(exactly equl), x === y
// !=, not equal, x != y
// >, greater than, x > y
// <, less than, x < y
// >=, greater than or equal to, x >= y
// <=, less than or equal to, x <= y

console.log(3 > 2); //true, 3 is greater than 2
console.log(3 >= 2); //true, 3 is greater than 2
console.log(3 < 2); //false, 3 is greater than 2
console.log(2 < 3); //true, 2 is less than 3
console.log(2 <= 3); //true, 2 is less than 3
console.log(3 == 2); //false,
console.log(3 === 2); //false
console.log(3 != 2); //true,
console.log(3 == "3"); //true, data type is different but value is same
console.log(3 === "3"); //false, data type is different
console.log(3 !== "3"); //true, data type is not same
console.log(0 == false); //true, equivalent
console.log(0 === false); //false, data type is different
console.log(0 == ""); //true, equivalent
console.log(0 == "     "); //true, equivalent
console.log(0 === ""); //false, data type is different
console.log(1 == true); //true, equivalent
console.log(1 === true); //false, data type is different
console.log(undefined == null); //true, equivalent
console.log(undefined === null); //false, data type is different
console.log(NaN == NaN); //false, both may be different number
console.log(NaN === NaN); //false, both may be different numbers but values are same.


//Try to understand the above comparisons with some logic. Remembering without any logic might be difficult. JavaScript is somehow a wired kind of programming language. JavaScript code may run and give the result but it may not the desired result unless we are good at it.

//As rule of thumb, if a value in not true with ==, it will not be equal with ===. Using === is safer than using ==. 