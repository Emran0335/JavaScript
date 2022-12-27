// //In JavaScript, the Math Object provides a lots of methods to work with numbers.

// const PI = Math.PI;
// console.log(PI);

// //Rounding to the closest number
// //If above 0.5 up if less 0.5 down rounding

// console.log(Math.round(PI)) //3

// let gravity = 9.81;

// console.log(Math.round(gravity)); //10

// // floor(): rounding down
// let number_floor = 3.567;
// console.log(Math.floor(gravity)); // 9
// console.log(Math.floor(PI)); // 3
// console.log(Math.floor(number_floor)); // 3


// //ceil(): rounding up

// console.log(Math.ceil(number_floor)); //4
// console.log(Math.ceil(gravity)); //10

// //min(): it returns the minimum value
// console.log(Math.min(-5,3,20,9,10,-30)); //-30

// //max(): it returns the maximum value
// console.log(Math.max(-5,3,20,9,10,-30)); //20

// //random(): this method create random numbers between 0 to 0.999999
// console.log(Math.random()); //any numbers between 0 to 0.999999

// //let's create a random number and floor it
// let random_floor_number = Math.floor(Math.random() * 11)
// console.log(random_floor_number); // 0 to 10



// declare variable

// var, let , const

const a = '10';
const b = 14;

//console.log(a == b); // true
const d = 10
//console.log( d === b ? "true" : "false");

const firstName = "Emran";
const lastName = "Hossain";

//console.log(`I am ${firstName} ${lastName}`);


function nullValue() {
    let nothing;
    //console.log("WithoutValue: ", nothing); // this will be printed first
    const anything = "I am something."
    nothing = anything
   // console.log("withValue: ", nothing); // this will be printed later
    return nothing;
}

nullValue()


const nullVal = {};
//console.log(typeof nullVal);

let myVar;
if (myVar == null) { // value compare
  console.log("myVar is null"); // it will be printed
}


//value and datatype compare
if (myVar === undefined) { // myVar is now undefined, it is going to be compared with another datatype undefined
  console.log("myVar is undefined"); // it will be printed
}


//value and datatype compare
if (myVar === null) {
  console.log("myVar is compared"); // it will not printed
}

