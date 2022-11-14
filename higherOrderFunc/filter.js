// filter
// filter(): it filters out items which fulfill filtering conditions and returns a new array.

// filter countries conaining (land)
const countries = ['England', 'Ireland', 'Iceland', 'Germany', 'Finland', 'Hungary', 'Spain', 'Frace']
const fiterCountriesWithLand = countries.filter((country => country.includes("land")))
console.log(fiterCountriesWithLand); //[ 'England', 'Ireland', 'Iceland', 'Finland' ]
console.log(fiterCountriesWithLand.toString().toUpperCase()); //ENGLAND,IRELAND,ICELAND,FINLAND