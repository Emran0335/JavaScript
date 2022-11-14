// Setting time

// In JavaScript, we can execute some activites  in a certain interval of time or we can schedule(wait) for some time to execute some activities

// 1. setInterval()
// 2. setTimeout()


// Setting Interval using a setInterval function
// In JavaScript, we use setInterval higher order function to do some activity continuously with in some interval of time. The setInterval global method take a callback function and a duration as a parameter. The duration is in milliseconds and the callback will be always called in that interval of time.

// function callback() {
//     code goes here
// }
// setInterval(callback, duration)

function sayHello() {
    console.log("Hello");
}
setInterval(sayHello, 1000) // It prints hello in every second, 1000ms is 1 second.The browser console will print the result.



// Setting a time using a setTimeout().
// In JavaScript, we use setTimeout higher order function to execute some action at some time  in the future. The setTimeout global mathod take a callback function and a duration as a parameter. The duration is in milliseconds and the callback wait for that amount of time.

// Syntax
// function callback() {
//     code goes here
// }
// setTimeout(callback, duration) // duration in milliseconds

function sayHelloAgain() {
    console.log("Hello")
}
setTimeout(sayHelloAgain, 2000) // It prints hello after it waits for 2 seconds and it will do so once.


