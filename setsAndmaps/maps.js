// Map
// Creating an empty Map. Map returns object.

const map = new Map()
console.log(map); // Map(0) {}

// Creating a Map from an array

let countries = [['Bangladesh', 'Dhaka'],['India', 'Delhi'], ['Pakistan', 'Islamabad'], ['Afganistan', 'Kabul'], ['Nepal', 'Kathmandu'], ['Butan', 'Thimphu'],['Maldives', 'Male']]
const countriesMap = new Map(countries)
console.log(countriesMap); /* Map(7) {
  'Bangladesh' => 'Dhaka',
  'India' => 'Delhi',
  'Pakistan' => 'Islamabad',
  'Afganistan' => 'Kabul',
  'Nepal' => 'Kathmandu',
  'Butan' => 'Thimphu',
  'Maldives' => 'Male'
}*/
console.log(countriesMap.size); // 7

// Adding values to the Map
const addCountriesMap = new Map()
console.log(addCountriesMap); // Map(0) {}
console.log(addCountriesMap.size); // 0
addCountriesMap.set('Bangladesh', 'Dhaka')
addCountriesMap.set('India', 'New Delhi')
addCountriesMap.set('Pakistan', 'Islamabad')
console.log(addCountriesMap); /* Map(3) {
  'Bangaldesh' => 'Dhaka',
  'India' => 'New Delhi',
  'Pakistan' => 'Islamabad'
}*/

// Getting a value from Map
console.log(addCountriesMap.get("Bangladesh")); // Dhaka
// Checking key in Map
// Check if a key exists in a map using (has method). It returns true or false.
console.log(addCountriesMap.has('Bangladesh')); // true
//console.log(addCountriesMap.forEach((countries) => console.log(countries)));
for (const country of addCountriesMap) {
  console.log(country); //[ 'Bangladesh', 'Dhaka' ] ["India", "New Delhi"][("Pakistan", "Islamabad")];
}
for (const [country, city] of addCountriesMap) {
    console.log(country, city); // Bangladesh Dhaka India New Delhi Pakistan Islamabad
}
