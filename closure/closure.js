// Closure
// JavaScript allows writing inner functions inside of an outer function. We can write as many inner functions as we want. If inner functions access the the variables of outer function, it is called closure.

function outerFunction() {
  let count = 0;
  function innerFunction() {
    count = count + 1; // count++
    return count;
  }
  return innerFunction;
}

const innerFunc = outerFunction();

console.log(innerFunc()); // 1
console.log(innerFunc()); // 2
console.log(innerFunc()); // 3

function outerFunctionAgain() {
  let count = 0;
  function innerFuncPlusOne() {
    count++; // count = count + 1;
    return count;
  }
  function innerFuncMinusOne() {
    count--; // count = count - 1;
    return count;
  }
  return {
    plusOne: innerFuncPlusOne(),
    minusOne: innerFuncMinusOne(),
  };
}

const innerFuncPlusMinus = outerFunctionAgain();
console.log(innerFuncPlusMinus.plusOne); // 1
console.log(innerFuncPlusMinus.minusOne); // 0
