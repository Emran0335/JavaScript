// Error Handling
// JavaScript is a loosely-typed language. Sometimes we will get a runtime error when we try to access an undefined variable or call undefined function etc.

// JavaScript is similar to Python or Java which provides an error handling mechanism to catch runtime errors using try-catch-finally block.

// try {
//     code that may throw an error
// } catch (error) {
//     code to be executed if an error occurs
// } finally {
//     code to be executed regardless of an error occurs or not
// }


// try: wrap suspicious code that may throw an error in try block. The try statement allows us to define a block of code to be tested for errors while it is being executed.
// catch: write code to do something in catch block when an error occurs. The catch block can have parameters that will give us error information. Catch block is used to log an error or display specific messages to the user.
// finally: finally block will always be executed regardless of the occurrence of an error. The finally block can be used to complete the remaining task or reset variables that might have changed before error occurred in try block.
/*
try {
    let lastName = "Hossain"
    let fullName = firstName + " " + lastName
} catch (error) {
    console.log(error)
}
*/
/*
ReferenceError: firstName is not defined
    at <anonymous> errorTypes.js:21:20
*/
/*
try {
  let lastName = "Hossain";
  let fullName = firstName + " " + lastName;
} catch (error) {
  console.error(error); // we can use console.log(error) or console.error(error)
} finally {
    console.log("In any case I will be executed"); // It will be consoled anyhow.
}
ReferenceError: firstName is not defined
    at <anonymous> errorTypes.js:35:34
In any case it will be executed
*/


// The catch block take a parameter. It is common to pass (e, err or error) as a parameter to the catch block. This parameter is an object and it has name and message keys. Let's use the name and message.


try {
    let lastName = "Emran"
    let fullName = firstName + " " + lastName
} catch (error) {
    console.log("Name of the error", error.name); // error.name = ReferenceError
    console.log("Error message", error.message); // error.message = firstName is not defined
} finally {
    console.log("In any case I will be executed!"); // In any case I will be executed

}

// Throw: the throw statement allows us to create a custom error. We can throw a string, number, boolean or an object. We also use the throw statement to throw an exception. When we throw an exception, expression specifies the value of the exception. Each of the following throws an exception.
/*
throw "Error2" // generates an exception with a string value.
throw 42 // generates an exception with a number(integer) value.
throw true // generates an exception with a boolean value.
throw new Error("Required") // generates an error object with the message of Required.
*/

const throwErrorExampleFun = () => {
    let message
    let x = prompt("Enter a number: ")
    try {
        if (x == "") throw 'empty'
        if (isNaN(x)) throw 'not a number'
        x = Number(x)
        if (x < 5) throw 'too low'
        if(x > 10) throw 'too high'
    } catch (error) {
        console.log(error);
    }
}
throwErrorExampleFun()


// Error Types
// 1. ReferenceError
// 2. SyntaxError
// 3. TypeError

// 1. ReferenceError
let firstName = "Emran"
let fullName = firstName + " " + lastName // is not defined
console.log(fullName);
// Uncaught ReferenceError: lastName is not definced
//      at <anonymous>:90:89

// 2. SyntaxError
// let square = 2 X 2 // x is not the sign of multiplication
console.log(square);
// Uncaught SyntaxError: Unexpected identifier

// 3. TypeError
let num = 10
console.log(num.toLowerCase()); // toLowerCase() is a method used for string datatype.
// Uncaught TypeError: num.toLowerCase is not a function
// at <anonymous>:102:101