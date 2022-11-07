//Funcion Declaration

//Let us see how to declare a function and how to call a function


//declaring a function without a parameter
// function functionName() {
//     code goes here
// }
//functionName() //calling function by its name and with parentheses


//function without a parameter and return
//function can be declared without a parameter

// function without parameter, a function which make a number square
function square() {
    let num = 2
    let sq = num * num
    console.log(sq);
}
square()


function addTwoNumbers() {
    let num1 = 10
    let num2 = 20
    let sum = num1 + num2
    console.log(`Sum: ${sum}`);
}

addTwoNumbers()


function printFullName() {
    let firstName = "Emran"
    let lastName = "Hossain"
    let space = ' '
    let fullName = firstName + space + lastName
    console.log(`My full Name is: ${fullName}`);
}

printFullName()


//Function returning value
//Function can also return values, if a function does not return values, the value of the function is undefined. Let's write the above functions with return keyword. From now on, we return value to a function instead of printing it.

function returnFullName() {
    let firstName = "Emran"
    let lastName = "Hossain"
    let space = " "
    let fullName = firstName + space + lastName

    return fullName // without return, it would be undefined
}

console.log(returnFullName());


function returnAddTwoNumbers() {
    let num1 = 10
    let num2 = 10
    let total = num1 + num2

    return total
}

console.log(returnAddTwoNumbers());


//Function with a parameter
//In a function, we can pass different data types(number, string, boolean, object, function) as a parameter.


//function with one parameter
// function onePara_func(parm1) {
//     code goes here
// }
// onePara_func(argument) // ducring calling or invoking, one argument is needed

function areaOfCircle(r) {
    let area = Math.PI * r * r

    return area
}

console.log(areaOfCircle(10)); //10 is called argument here


//Function with two parameters
function sumTwoNumbers(numOne, numTwo) {
    let sum = numOne + numTwo
    console.log(sum);
}

sumTwoNumbers(10, 20) //10, 20 are arguments


function fullNameWithParm(firstName, lastName) {
    return `${firstName} ${lastName}`
}

console.log(fullNameWithParm("Emran", "Hossain")); //emran, hossain are arguments



//Function with many parameters

//This function takes array aa a parameter and sum up the numbers in the array.

function sumArrayValues(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i]
    }

    return sum;
}

const numbers = [1, 2, 3, 4, 5]
console.log(sumArrayValues(numbers)) // 15




// Function with unlimited number of parameters

// Sometimes we do not know how many arguments the user going to pass. Therefore, we should know how to write a function which can take unlimited number of arguments. The way we do it has a significant difference between a function declaration(regular function) and an arrow function. Let us see examples both in function declaration and arrow function.



//Unlimited number of parameters in function declaration(regular function)
// A function declaration provides a function with scoped arguments array like object. Any thing we pass as argument in the declaration function can be accessed from arguments object inside the function. Let us see an example.

// acess the arguments object

// Takes arguments as array like objects
function sumAllNums() {
    console.log(arguments);
}
sumAllNums(1, 2, 3, 4, 5) // Arguments(4) [1,2,3,4, callee: f, Symbol(Sumbol.iterator): f]


//function declaration

function sumAll_In_Declaration() {
    let sum = 0;
    for (i = 0; i < arguments.length; i++) {
        sum +=arguments[i]
    }

    return sum
}

console.log(sumAll_In_Declaration(1,2,3,4)) //10
console.log(sumAll_In_Declaration(1,2,3,4,5)) //15
console.log(sumAll_In_Declaration(1,2,3,4,6)) //16
console.log(sumAll_In_Declaration(1,2,3,4,7)) //17