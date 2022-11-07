//concatenating: Using Addition Operator
// Concatenating using the addtiton operator is and old way. This way of concatenating is tedious and error-prone. It is good to know how to concatenating this way, but I strongly suggest to use the ES^ template strings(``)


let space = " "
let firstName = "Emran"
let lastName = "Hossain"
let country = "Bangladesh"
let city = "Munshiganj"
let language = "JavaScript"
let job = "teacher"
let age = 34


let fullName = firstName + space + lastName
console.log(fullName); // Emran Hossain

let personalInfo = "My name is " + fullName + ". I am " + age + ". I live in " + country + ". My city is " + city+ "."

console.log(personalInfo);


//Long Literal Strings
// A string could be a single character or paragraph or a page. If the string length is too big, it does not fit in one line. We can use the backslash(\) at the end of each line to indicate that the string will continue on the nest line. Example:

const paragraph = "My name is Emran Hossain. I live in Bangladesh.\
I am a teacher and I love teaching.I teach English.\
But I want to learn programming language to enrich my knowledge about \
computer science."

console.log(paragraph);

//Escape Sequences in strings
// In JavaScript and other programming languages \ followed by some characters is an escape sequence.Let's see the most common escape characters:

//1. \n: new line
//2. \t: Tab, means  8 spaces
//3. \\: Back slash
//4. \': Single quote(')
//5. \": Double quote(")

console.log("I hope everyone is enjoying the 30 Days Of JavaScript Challenge.\nDo you?");

console.log("Days\tTopics\tExercises");
console.log("The saying \"Seeing is Believing\" isn\'t correct in 2202.");



//Template Literals(Template Strings)

//To create a template strings, we use two back-ticks. We can inject data as expressions inside a template string. To inject data, we enclose the expression with a curly bracket({}) preceded by a $ sign. See the syntax below.

//Syntax -> 1. `String Literal Text`, 2. `String Literal Text ${expression}`

console.log(`The sum of 2 and 3 is 5`); // statically wrinting the data
let a = 2;
let b = 3;
console.log(`The sum of ${a} and ${b} is ${a + b}`); //injecting the data dynamically

let first_name = "Emran"
let last_name = "Hossain"
let nameOfCountry = "Bangaldesh"
let nameOfCity = "Munshiganj"
let myLanguage = "JavaScript"
let myJob = "teacher"
let myAge = 34
let my_fullName = first_name + " " + last_name

let my_personalInfo = `I am ${my_fullName}. I am ${myAge}. I live in ${nameOfCountry} and my city is ${nameOfCity}. I am a ${myJob}. I teach ${myLanguage}.`

console.log(my_personalInfo);
//Using a string template or string interpolation method, we can add expressions, which could be a value, or some operations(comparison, arithmetic operations, ternary operation).

let x = 2
let y = 3
console.log(`${a} is greater than ${b}: ${a > b}`) //2 is greater than 3: false

//Stiing Methods and Properties
// Everything in JavaScript is an object. A string is a primitive data type that means we can not modify it once it is created. The string object has many string methods and properties. There are different string methods that can help us to work with strings.


let js = "JavaScript"
console.log(js.length); //10

//Accessing characters in a string: We can access each character in a string using its index. In programming, counting starts from 0. The first index of the string is zero, and the last index is the length of the string minus one i.e.(stirng.length - 1)

