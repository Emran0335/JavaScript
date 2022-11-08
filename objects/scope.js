// Scope

// Variable is the fundamental part in programming. We declare variable to store different data types. To declare a variable we use the key word(var, let, const). A variable can be declared at different scope. In this section, we will see the scope variables such as scope of variables when we use var or let. Variables scopes can be:

//1. Global
//2. Local

// Variable can be declared globally or locally scope. We will see both global and local scope. Anything declared without let, var or const is scoped at global level.

// Global scoped variable belongs to window global object

// Window Global Object.
// Without using consoloe.log(), open the browser and check. We will see the value of a and b if we write a or b on the browser console. That means a and b are already available in the window.

a = "JavaScript" // declare a variable without let or const, make it available in window object and this will be found anywhere in this file, scope.js.
b = 10 // this is a global scope variable and found in the window object

function letsLearnScope() {
    console.log("Function Scoped: ", a, b) // function scope
    if (true) {
        console.log("Block Scoped: ", a, b) // block scope
    }
}
letsLearnScope()
console.log("Global or Window Scoped: ", a, b) // global scope or window scope


//Global Scoped
// A globally declared variable can be accessed everywhere in the same file(scope.js). But the term global is relative. It can be global to the file or it can be global relative to some block of codes.

let x = "JavaScript" // is a global scope, it will be found anywhere in this file.
let y = 100
function learnScoped() {
    console.log(x, y) // JavaScript 10, accessible
    if (true) {
        let c = "Python"
        let d = 100
        console.log(x, y); // accessible i.e. x and y are  accessible as they are declared with let or var or const but globally.
        console.log(c, d); //Python 100
    }
    console.log(x, y); // accessible as global varible
    // console.log(c, d) not accessible
}
learnScoped()
console.log(x, y); // JavaScript 10, accessible
// console.log(c, d); not accessible