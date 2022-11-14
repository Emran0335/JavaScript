// Functional Programming
// Instead of writing regular loop latest version of JavaScript introduced lots of built in methods which can help us solve complicated problems. All built-in methods take callback function. In this section, we will see forEach(), map(), filter(), reduce(), find(), every(), some(), and sort().

// forEach
// forEach(): it iterates an array elements. We use forEach only with arrays. It takes a callback function with elements, index parameter and array itself. The index and the array optional.

/*
arr.forEach(function(element, index, arr) {
    console.log(element, index, arr)
})
// The above code can be written using arrow function
arr.forEach((element, index, arr)=> {
    console.log(element, index, arr)
})
// The above code can be written using arrow function and explicit return
arr.forEach((element, index, arr)=> console.log(index, element, arr))
*/

let sum = 0;
const numbersForEach = [1, 2, 3, 4, 5];
numbersForEach.forEach(num=>console.log(num)) // 1,2,3,4,5
numbersForEach.forEach((num, index, arr) => console.log(num, index, arr));
/*
Ans:
1 0 [ 1, 2, 3, 4, 5 ]
2 1 [ 1, 2, 3, 4, 5 ]
3 2 [ 1, 2, 3, 4, 5 ]
4 3 [ 1, 2, 3, 4, 5 ]
5 4 [ 1, 2, 3, 4, 5 ]
*/

// Let us see where we use callback functions.

const numbers = [1, 2, 3, 4, 5];
const sumArray = (arr) => {
  let sum = 0;
  const callback = function (element) {
    sum += element;
  };

  arr.forEach(callback);
  return sum;
};
console.log(sumArray(numbers)); // 15

// The above example can be simplified as follows:

const sumArraySimple = (arr) => {
  let sum = 0;
  arr.forEach((element) => {
    sum += element;
  });

  return sum;
};

console.log(sumArraySimple(numbers)); //15
