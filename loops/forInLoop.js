// for in loop in object....



const skills = {
  html: false,
  css: false,
  javascript: false,
};

const formatted = [];
for (const key in skills) {
  console.log(key.toUpperCase()); //HTML CSS JAVASCRIPT;
  formatted.push(key.toUpperCase());
}

console.log(formatted); // [ 'HTML', 'CSS', 'JAVASCRIPT' ]


const person = { "name": "Emran", "age": 34 }
for (property in person) {
    console.log(person[property]); // Emran 34
    console.log(property); // name age
    console.log(property, person[property]); // name Emran age 34
}