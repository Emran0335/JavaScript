const days = ["sunday", "monday"]

days[2] = "Tuesday"
console.log(days);


const cars = ["Toyota"]
cars["tires"] = 4
console.log(cars);              // [ 'Toyota', tires: 4 ]
console.log(cars.tires);        // 4


const buses = [];
buses[1] = "Honda"
buses[3] = "Fiat"
console.log(buses);             //[ <1 empty item>, 'Honda', <1 empty item>, 'Fiat' ]
console.log(buses.length);      // 4
/*
const arrayOfIgnoringLength = [];
arrayOfIgnoringLength[1] = "Emran"
arrayOfIgnoringLength[3] = "Hossain"

arrayOfIgnoringLength["six"] = "Volkswagen"   // key value pair in the array

console.log(arrayOfIgnoringLength); 

there are five elements 
[
  <1 empty item>,
  'Emran',
  <1 empty item>,
  'Hossain',
  six: 'Volkswagen'
]
*/

//console.log(arrayOfIgnoringLength.length);   // 4 but shows only four
// this example shows that array is dynamically sizex such as 0,1,2,3,4.....


const arrayOfIgnoringLength = [];
arrayOfIgnoringLength[1] = "Emran"
arrayOfIgnoringLength[3] = "Hossain"

arrayOfIgnoringLength["six"] = "Volkswagen"   // key value pair in the array

arrayOfIgnoringLength[6] = "Nusaiba"

console.log(arrayOfIgnoringLength); 

/*
[
  <1 empty item>,   // 0
  'Emran',          // 1
  <1 empty item>,   // 2
  'Hossain',        // 3
  <2 empty items>, // 4,5
  'Nusaiba',        // 6
  six: 'Volkswagen' // it will not be added in length property range
]
*/

console.log(arrayOfIgnoringLength.length);  // 7  6t5
