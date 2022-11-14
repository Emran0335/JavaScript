// Higer Order Function are functions which take other functions as a parameter or returns a function as a value. The function passed as a parameter is called callback.

// A callback is a function which can be passed as parameter to other function. See the example below.

// a callback function, the name of the function could be any name.
const callback = (n) => {
    return n ** 2 // 3 ** 2 or 3x3 = 9
}

// Function that takes other function as a callback.
function cubeTakeCallback(callback, n) {// cube takes a funciton and a datatype integer as parameter. The datatype integer(n) also goes to the callback function as parameter.
    return callback(n) * n // callback return = 9, i.e.callback(3) * 3. So 9x3 = 27
}
console.log(cubeTakeCallback(callback, 3)); //27


// Higher Order Functions return function as a value.
// Higher order function returning an another function

const higherOrderReturn = n => {
    const doSomething = m => {
        const doWhatEver = t => {
            return 2 * n + 3 * m + t
        }
        return doWhatEver
    }
    return doSomething
}

console.log(higherOrderReturn(2)(3)(10)); // 2*2 + 3*3 + 10 = 23

// Let us use callback functions
// forEach(): 
const forEachNumbers = [1,2,3,4,5]
const sumOfnumbers = arr => {
    let sum = 0
    const callback = function(element) {
        sum +=element
    }
    arr.forEach(callback)
    return sum
}
console.log(sumOfnumbers(forEachNumbers)) // 15

const numbersArrayAnother = [1,2,3,4,5]
const sumOfArray = arr => {
    let sum = 0
    arr.forEach(function(element) {
        sum +=element
    })

    return sum
}
console.log(sumOfArray(numbersArrayAnother)) // 15

// Setting time
// In JavaScript, we can execute some activities in a certain interval of time or we can schedule(wait) for time to execute some activities.
//1. setInterval
//2. setTimeout

// Setting Interval using a seInterval function
// In JavaScript, we use setInterval higher order function to do some activity continuously with in some interval of time. The setInterval global method take a callback function and a duration as a parameter. The duration is in milliseconds and the callback will be always called in that interval of time.

/*
Syntax
function callback() {
    code goes here
}
setInterval(callback, duration)
*/






