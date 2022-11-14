//In JavaScript, the Math Object provides a lots of methods to work with numbers.

const PI = Math.PI;
console.log(PI);

//Rounding to the closest number
//If above 0.5 up if less 0.5 down rounding

console.log(Math.round(PI)) //3

let gravity = 9.81;

console.log(Math.round(gravity)); //10

// floor(): rounding down
let number_floor = 3.567;
console.log(Math.floor(gravity)); // 9
console.log(Math.floor(PI)); // 3
console.log(Math.floor(number_floor)); // 3


//ceil(): rounding up

console.log(Math.ceil(number_floor)); //4
console.log(Math.ceil(gravity)); //10

//min(): it returns the minimum value
console.log(Math.min(-5,3,20,9,10,-30)); //-30

//max(): it returns the maximum value
console.log(Math.max(-5,3,20,9,10,-30)); //20

//random(): this method create random numbers between 0 to 0.999999
console.log(Math.random()); //any numbers between 0 to 0.999999

//let's create a random number and floor it 
let random_floor_number = Math.floor(Math.random() * 11) 
console.log(random_floor_number); // 0 to 10


