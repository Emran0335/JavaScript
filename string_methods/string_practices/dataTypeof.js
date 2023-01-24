//Checking Data Types and Casting

//typeof(): This method is used to check the data type.

let firstName = "Emran" //string data type
let lastName = "Hossain" //string data type
let country = "Bangladesh" //string data type
let city = "Munshiganj" //string data type
let age = 34 // integer data type
let job   //undefined, as value is not assigned


console.log(typeof("Emran")); //string
console.log(typeof(firstName)); // string
console.log(typeof(age)); //number
console.log(typeof(3.14)); //number
console.log(typeof(true)); // boolean
console.log(typeof(false)); // boolean
console.log(typeof(NaN)); // number
console.log(typeof(job)); // undefined
console.log(typeof(undefined)); // undefined
console.log(typeof (null)); // object
console.log(typeof "Hossain"); //string


function okay() {
    const get = function anohter() {
      return null
    }
    return get
  }
  
console.log(typeof okay()); // function


var car = {
    make: "Toyota",
    model: "Camry",
    print: function () {
        console.log(this.make + " " + this.model);
    }
};
// const getTypeof = car[print]
console.log(typeof car.print); // function
console.log(typeof car["print"]); // function

for (var prop in car) {
    if (typeof car[prop] !== "function") {
        console.log(prop);         // => make, and model
    }
}




