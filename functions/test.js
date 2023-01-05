// function expression
function square(n) {
  //n parameter
  let num = n;
  let sq = num * num * num;
  return sq;
}
//console.log(square(2)); // 8

// array function
const sum = (n) => {
  // n is the parameter
  let a = n;
  let total = n + n + n + n;
  return total;
};

//console.log(sum(2)); // 8

const sumAndAddValue = (sum) => {
  // sum is parameter
  let value = sum;
  let addValue = 8;
  let result = value + addValue;
  return result;
};

//console.log(sumAndAddValue(sum(2))); // 16

const defaultParameter = (n = 8) => {
  let value = n;
  let addValue = 10;
  let result = value + addValue;
  return result;
};
console.log(defaultParameter()); // 18
console.log(defaultParameter(10)); // 10 + 10 = 20
