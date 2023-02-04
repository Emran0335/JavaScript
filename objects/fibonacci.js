function getFibonacci(num) {
    if(num < 2) {
        return num;
    }
    return getFibonacci(num - 1) + getFibonacci(num - 2) // 1,
}

console.log(getFibonacci(6));

/*
1. fib(5) {
    return fib(4) + fib(3);
2.   fib(4) {
      return fib(3) + fib(2);
3.     fib(3) {
        return fib(2) + fib(1);
4.       fib(2) {
A=        return 1;
         };
5.       fib(1) {
B=        return 1;
         };
C=      return 2; // (1 + 1)
       };
6.     fib(2) {
D=      return 1;
       };
E=    return 3; // (2 + 1)
     };
7.   fib(3) {
      return fib(2) + fib(1);
8.     fib(2) {
F=      return 1;
       };
9.     fib(1) {
G=      return 1;
       };
H=    return 2; // (1 + 1)
     };
I=  return 5; // (3 + 2)
};
*/


let arr = [];
arr[5] = 5
console.log(Boolean(arr[5]));  // false
console.log(arr[5]);  // 5


function fib(num) {
    let cache = [];
    let closureFib = function(value) {
        if(value < 2) {
            return value;
        } 
        if(cache[value]) {   //cache[value] = number it is true. otherwise, false, will never run
            return cache[value];
        }
        cache[value] = (closureFib(value - 1) + closureFib(value - 2));
        return cache[value];
    }
    return closureFib(num)
}

console.log(fib(7));

