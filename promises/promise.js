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


// Fetch API
// The Fetch API provides an interface for fetching resources (including across the network). It will seem familiar to anyone who has used XMLHttpRequest, but the new API provides a more powerful and flexible feature set. In this challenge, we will use fetch() to request url and APIs. In addition to that, let us see demonstrate use case of promises in accessing network resources using tha fetch API

const URL = 'https://restcountries.com/v2/all' // countries api
fetch(URL)
    .then(response => response.json()) // accessing the API data as JSON
    .then(data => {
        console.log(data); // data will appear in browser console
    })
    .catch(error => console.log(error.message));


// Async and Await
// Async and await is an elegant way to handle promises. It is easy to understand and clean to write.

const square = async function (n) {
    return n * n;
}
// square(2), the result is Promise{<resolved>: 4}
console.log(square(2)) // Promise {<fulfilled>: 4} is shown in browser console.

// The word async in front of a function means that function will return a promise. The above sequare function instead of a value it returns a promise.

// How do we access the value from the promise? To access the value from the promise, we will use the keyword await.

const squareWithAwait = async function (n) {
    return n * n
}
const value = await squareWithAwait(3); // it does not work as await is used inside async function.
console.log(value)

// Now, as we can see from the above example writing async in front of a function create a promise and to get the value from a promise we use await. Async and await go together, one can not exist without the other.

// Let us fetch API data using both promise method and async and await method.

// promise
const url = 'https://restcountries.com/v2/all'
fetch(url)
  .then(response => response.json())
  .then(data => {
    console.log(data)
  })
  .catch(error => console.error(error))
// async and await
const fetchData = async () => {
  try {
    const response = await fetch(url)
    const countries = await response.json()
    console.log(countries)
  } catch (err) {
    console.error(err)
  }
}
console.log('===== async and await')
fetchData()