// filter
// filter(): it filters out items which fulfill filtering conditions and returns a new array.

// filter countries conaining (land)
const countries = ['England', 'Ireland', 'Iceland', 'Germany', 'Finland', 'Hungary', 'Spain', 'Frace']
const fiterCountriesWithLand = countries.filter((country => country.includes("land")))
console.log(fiterCountriesWithLand); //[ 'England', 'Ireland', 'Iceland', 'Finland' ]
console.log(fiterCountriesWithLand.toString().toUpperCase()); //ENGLAND,IRELAND,ICELAND,FINLAND
const countriesHaveFiveCharacters = countries.filter(country => country.length === 5)
console.log(countriesHaveFiveCharacters); // ['Spain', 'France']
const scores = [
    {name: "Emran", score: 95},
    {name: "Hossain", score: 98},
    {name: "Nusaiba", score: 80},
    {name: "Farjana", score: 50},
    {name: "Sadifa", score: 85},
    {name: "Nahiyan", score: 100},
]
const scoresGreaterEighty = scores.filter(eachObject => eachObject.score > 80)
console.log(scoresGreaterEighty);
/*
[
  { name: 'Emran', score: 95 },
  { name: 'Hossain', score: 98 },
  { name: 'Sadifa', score: 85 },
  { name: 'Nahiyan', score: 100 }
]
*/