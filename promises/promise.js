// Promise
// We, human beings, give or receive a promise to do some activity at some point in time. If we keep the promise, we make others happy. But if we don't keep the promise, it may lead to discontentment. Promise in JavaScript has something in common with the above examples.

// A Promise is a way to handle asynchronous operations in JavaScript. It allows handlers with an asynchronous action's eventual success value or failure reason. This lets asychronous methods return values like synchronous methods instead of immediately returning the final value. The asychronous method returns a promise to supply the value at some point in the future.

// A Promise is in one of the these states:
// 1. pending: initial state, neither fulfiled nor rejected.
// 2. fulfiled: meaning that the operation completed successfully.
// 3. rejected: meaning that the operation failed.

// A pending promise can either be fulfiled with a value or be rejected with a reason(error). When either of these options hanppens, the associated handlers queued up by a promise's and then methods are called. (If the promise has already been fulfilled or rejected when a corresponding handler is attached, the handler will be called, so there is no race condition between an asychronous operation completing and its handlers being attached.)

// As the Promise.prototype.then() and Promise.prototype.catch() methods return promises, they can be chained.

// Callbacks
// To understand Promise very well, let us understand calllback first. Let us see the following callbacks. From the following code blocks, we wil notice the difference between callback and promises.

// *** callback lets us see a callback function which can take two parameters. The first parameter is error and the second is result. If the err(error) parameter is false, there will not be error, rather, it will return an error message.

// In this case the err has ->callback("It did not go well", skills) a value("It did not go well") and it will return the err block

// Callback
const doSomething = (callback) => {
  setTimeout(() => {
    const skills = ["HTML", "CSS", "JS"];
    callback("It did not go well", skills);
  }, 2000);
};

const callback = (err, result) => {
  if (err) {
    // err is true ("It did not go well")
    return console.log(err); //
  }
  return console.log(result);
};

doSomething(callback); // It did not go well.

// In this case the err is false(nothing will be found) and it will return the else blcok which is the result
const doSomethingWithoutErr = (callbackAgain) => {
  setTimeout(() => {
    const skills = ["HTML", "CSS", "JS"];
    callbackAgain(false, skills);
  }, 2000);
};

const callbackAgain = (err, result) => {
  if (err) {
    // this time, err is false. So, this block of code will not run.
    return console.log(err);
  } else {
    return console.log(result);
  }
};

doSomethingWithoutErr(callbackAgain); // [ 'HTML', 'CSS', 'JS' ]

// Promise Constructor
// We can create a promise using the Promise Constructor. We can create a new promise using the keyword new followed by the word Promise and followed by a name and parenthesis. Inside the parenthesis, it takes a callback function. The promise callback function has two parameters which are the resolve and reject functions.

// Syntax
/*
const promise = new Promise((resolve, reject) => {
    resolve('success')
    reject('failure')
})
*/
// Promise
const doPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    const skills = ["HTML", "CSS", "JS"];
    if (skills.length > 0) {
      resolve(skills); // [ 'HTML', 'CSS', 'JS' ]
    } else {
      reject("Something wrong has happened!");
    }
  }, 2000);
});
doPromise
  .then((result) => {
    console.log(result);
  })
  .catch((error) => console.log(error));

// The above promise has been settled with resolve. Let us see another example below when the promise is settled with rejected.

// Promise
const doPromiseWithReject = new Promise((resolve, reject) => {
    setTimeout(() => {
        const skills = ["HTML", "CSS", "JS"]
        if (skills.includes('Node')) {
            resolve("fullStack developer!")
        } else {
            reject('Something wrong has happened!') // this block of code will run.
        }
    }, 2000)
})

doPromiseWithReject
    .then(result => console.log(result))
    .catch(error => console.log(error))
