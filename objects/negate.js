
function negate(f) {
    return function(i) {
        return !f(i)    // it will change the result to true or false.
    }                   // !false is true
}

let isPrime = function(number) {
    let divisor = parseInt(number / 2, 10) // 10 based number
    let prime = true;
    
    while(divisor > 1) {
        if(number % divisor === 0) {
            prime = false;
            divisor = 0; // it must be 0 otherwise condition is true
        } else {
            divisor -= 1; // divisor will be 4-1 = 3 and the code will run again
        }
    }
    return prime === true;          // !false is true
}

console.log(isPrime(4)); // 1,2,3,5,7,11

let isComposite = negate(isPrime)
console.log(isComposite(9));    // 4,6,8,9,10,12,14,15
