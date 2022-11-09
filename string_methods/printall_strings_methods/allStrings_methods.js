//concatenating: Using Addition Operator
// Concatenating using the addtiton operator is and old way. This way of concatenating is tedious and error-prone. It is good to know how to concatenating this way, but I strongly suggest to use the ES^ template strings(``)

let space = " ";
let firstName = "Emran";
let lastName = "Hossain";
let country = "Bangladesh";
let city = "Munshiganj";
let language = "JavaScript";
let job = "teacher";
let age = 34;

let fullName = firstName + space + lastName;
console.log(fullName); // Emran Hossain

let personalInfo =
  "My name is " +
  fullName +
  ". I am " +
  age +
  ". I live in " +
  country +
  ". My city is " +
  city +
  ".";

console.log(personalInfo);

//Long Literal Strings
// A string could be a single character or paragraph or a page. If the string length is too big, it does not fit in one line. We can use the backslash(\) at the end of each line to indicate that the string will continue on the nest line. Example:

const paragraph =
  "My name is Emran Hossain. I live in Bangladesh.\
I am a teacher and I love teaching.I teach English.\
But I want to learn programming language to enrich my knowledge about \
computer science.";

console.log(paragraph);

//Escape Sequences in strings
// In JavaScript and other programming languages \ followed by some characters is an escape sequence.Let's see the most common escape characters:

//1. \n: new line
//2. \t: Tab, means  8 spaces
//3. \\: Back slash
//4. \': Single quote(')
//5. \": Double quote(")

console.log(
  "I hope everyone is enjoying the 30 Days Of JavaScript Challenge.\nDo you?"
);

console.log("Days\tTopics\tExercises");
console.log('The saying "Seeing is Believing" isn\'t correct in 2202.');

//Template Literals(Template Strings)

//To create a template strings, we use two back-ticks. We can inject data as expressions inside a template string. To inject data, we enclose the expression with a curly bracket({}) preceded by a $ sign. See the syntax below.

//Syntax -> 1. `String Literal Text`, 2. `String Literal Text ${expression}`

console.log(`The sum of 2 and 3 is 5`); // statically wrinting the data
let a = 2;
let b = 3;
console.log(`The sum of ${a} and ${b} is ${a + b}`); //injecting the data dynamically

let first_name = "Emran";
let last_name = "Hossain";
let nameOfCountry = "Bangaldesh";
let nameOfCity = "Munshiganj";
let myLanguage = "JavaScript";
let myJob = "teacher";
let myAge = 34;
let my_fullName = first_name + " " + last_name;

let my_personalInfo = `I am ${my_fullName}. I am ${myAge}. I live in ${nameOfCountry} and my city is ${nameOfCity}. I am a ${myJob}. I teach ${myLanguage}.`;

console.log(my_personalInfo);
//Using a string template or string interpolation method, we can add expressions, which could be a value, or some operations(comparison, arithmetic operations, ternary operation).

let x = 2;
let y = 3;
console.log(`${a} is greater than ${b}: ${a > b}`); //2 is greater than 3: false

//Stiing Methods and Properties
// Everything in JavaScript is an object. A string is a primitive data type that means we can not modify it once it is created. The string object has many string methods and properties. There are different string methods that can help us to work with strings.

let js = "JavaScript";
console.log(js.length); //10

//Accessing characters in a string: We can access each character in a string using its index. In programming, counting starts from 0. The first index of the string is zero, and the last index is the length of the string minus one i.e.(stirng.length - 1)




//Changing Data Type(Casting)

// Casting: Converting one data type to another data type is called Type Casting. We use parseInt(), parseFloat(), Number(), + sign, str() methods. When we do arithmetic operations, string numbers(i.e "10") should  be first converted to integer or float if not it returns an error.


// String ot Int(Integer)
// We can convert string number to a number. Any number inside a qoute is a string number. An example of string number: "10", "5", etc. We can convert string to number using the following methods.

//1. parseInt()
//2. Number()
//3. Plus sign(+)

let num_string = "10"
let num_of_string_one = parseInt(num_string);
let num_of_string_two = Number(num_string);
let num_of_string_three = +num_string
console.log(num_of_string_one); //10
console.log(num_of_string_two); //10
console.log(num_of_string_three); //10

//String to Float(floating number(10.00))
// We can convert string float number to a float number. Any float number inside a qoute is a string float number. An example of a string float number: "9.81", "3.14", "1.44", etc. We can convert string float to number using the following methods:

//1. parseFloat()
//1. Number()
//1. Plus sign(+)


let num_str = "9.81"
let num_float_one = parseFloat(num_str)
let num_float_two = Number(num_str)
let num_float_three = +num_str
console.log(num_float_one); //9.81
console.log(num_float_two); //9.81
console.log(num_float_three); //9.81

// Float to Int
//We can convert float numbers to integers. We use the following method to convert float to int:

//parseInt()

let numFloat = 9.81
let numInt = parseInt(numFloat);
console.log(numInt); //9


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




//charAt() takes index(number) and it returns the value at that index

// String.charAt(index)

let string = "30 Days of JavaScript"

console.log(string.charAt(0)); //3
console.log(string.charAt(2)); // empty space

let lastIndex = string.length - 1

console.log(string.charAt(lastIndex)); //t



// charCodeAt() takes index(number) and it returns char code (ASCII number) of the value at that index


// string.charCodeAt(index)

let string = "30 Days of JavaScript"

console.log(string.charCodeAt(3)); //D ASCII number is 51

let lastIndex = string.length - 1

console.log(string.charCodeAt(lastIndex)); //ASCII t = 116



//concat() => it takes many substrings and creates concatenation.
//string.concat(substring, substring, substring). it adds the string at the end.


let string = "30"

console.log(string.concat("Days", "Of", "JavaScript"));

let country = "Ban"
console.log(country.concat("gladesh"));




// endsWith: it takes a substring as an argument and it checks if the string starts with that specified substring. It returns a boolean(true or false). If the string ends with the substring, it is true. Otherwise it is false.
// string.endsWith(substring)


let string = "Love is the best way to conquer anything in the world"
console.log(string.endsWith("world")); //true
console.log(string.endsWith("in the world")); //true
console.log(string.endsWith("the best way to conquer")); //false


let country = "Bangladesh"
console.log(country.endsWith("desh")); //true
console.log(country.endsWith("Bangla")); //false
console.log(country.endsWith("h")); //true



//includes(): it takes a substring as argument and it checks if the subsring argument exists in the string. includes() returs a boolean. It checks if a substring exists in the given string and it returns true. Otherwise it returns false.


let string = "30 Days Of JavaScript"

console.log(string.includes("Days")); //true
console.log(string.includes("days")); //false
console.log(string.includes("Script")); //true
console.log(string.includes("script")); //false
console.log(string.includes("Java")); //false
console.log(string.includes("java")); //false


let country = "Bangladesh"

console.log(country.includes("Bangla")); //true
console.log(country.includes("bangla")); //false
console.log(country.includes("desh")); // true
console.log(country.includes("Desh")); // false



//indexOf(): Takes a substring and if the substring exists in a string it returns the first position of the substring if the substring does not exist, it returns -1


//string.indexOf(substring)

let string = "30 Days Of JavaScript"

console.log(string.indexOf("D")); // index = 3
console.log(string.indexOf("Days")); // index = 3 as it starts with D and its index is 3
console.log(string.indexOf("days")) // if it does not exist, it returns negative 1(-1)
console.log(string.indexOf("a")) // 4
console.log(string.indexOf("Script")); //15



//lastIndexOf(): Takes a substring and if the substring exists in a string the last position of the same substring's index will return.


let string = "I love JavaScript"
console.log(string.lastIndexOf("love")) //2
console.log(string.lastIndexOf("I")) //0

let anotherString = "I love JavaScript. If you do not love JavaScript what else do you love."
console.log(anotherString.lastIndexOf("love"));//66(last love's l index(66))
console.log(anotherString.lastIndexOf("l"));//66




//length: This length property returns the number of characters in a string even with empty space

let js = "JavaScript"

console.log(js.length); //10

let anotherString = "I love JavaScript"

console.log(anotherString.length); ////with empty space and characters are 17

let myFirstName = "Emran"
console.log(myFirstName.length); //5


// match(): it takes a substring or regular expression pattern as an argument and it returns an array if there is match, if not it returns null. Let us see how a regular expression pattern looks like. It starts with (/) sign and ends with (/) sign.

let string = "love"
// let patternOne = /love/  //(without any flag)
// let patternTwo = /love/gi //(g-means to search in the whole text, i-case insensitive)

console.log(string.match("love"));
let another_string = "I love JavaScript. It you do not love JavaScript what else do you love?"

console.log(another_string.match("love"))
console.log(another_string.match(/love/))
console.log(another_string.match(/love/g))
console.log(another_string.match(/love/gi))
console.log(another_string.match(/love/gi))

let txt = "In 2019, I run 30 Days of Python. Now, in 2020 I super exited to start this challenge."
console.log(txt.match(/\d/g)); //it is called regular expression (/\d/g)
console.log(txt.match(/\d+/g)); //it is called regular expression (/\d/g)


//d with escape character means d is not normal instead it acts as digit.
//+ means one or more digit numbers.
// if there is g after that it means global, search everywhere.


// repeat(): It takes a number argument and it returns the repeated version of the string.

//string.repeat(n)

let string = "love"
console.log(string.repeat(10));



// repeat(): It takes a number argument and it returns the repeated version of the string.

//string.repeat(n)

let string = "love"
console.log(string.repeat(10));


//search(): It takes a substring as an argument and it returns the index of the first match.
//string.search("substring")


let string = "I love JavaScript. It you do not love JavaScript what else do you love?"

console.log(string.search("love")); // frist love and index of l is 2


// split(): The split method splits a string at a specified place and returns an array.

let string = "30 Days Of JavaScript"

console.log(string.split());
console.log(string.split(" "));

let firstName = "Emran"
console.log(firstName.split(''));

let countries = "Finland, Sweden, Norway, Denmark, and Iceland"
console.log(countries.split(","));



//startsWith(): It takes a substring as an argument and it checks if the string starts with that specified substring. It returns a boolean(true ar false).

// string.startsWith(substring)

let string = "Love is the best doctor in the world."

console.log(string.startsWith("Love")); //true
console.log(string.startsWith("love")); //false as it starts with Love
console.log(string.startsWith("Love")); //true
console.log(string.startsWith("doctor")); //false! doctor starts at the beginning.
console.log(string.startsWith("world")); //false! world starts at the beginning.



//substring(): It takes two arguments,the starting index and the stopping index but it does not include the index

let string = "JavaScript"
console.log(string.substring(0, 10)); //JavaScript


let country = "Bangladesh"
console.log(country.substring(0, 6)); //Bangla


//toLowerCase(): This method will changes the string to lowercase letters

let string = "JavaScript"
console.log(string.toLocaleLowerCase()); //javascript

let firstName = "EMRAN"
console.log(firstName.toLocaleLowerCase()); //emran

let country = "Bangladesh" //bangladesh
console.log(country.toLocaleLowerCase())



//toUpperCase(): This method changes the string to uppercase letters


let string = "JavaScript"

console.log(string.toUpperCase()); //JAVASCRIPT

let firstName = "Emran"
console.log(firstName.toUpperCase()); //EMRAN


let country = "Bangladesh"
console.log(country.toUpperCase()); //BANGLADESH




//trim(): This method removes trailing space (empty space of before and after the given string) in the beginning or the end of a string

let string = "          30 Days Of JavaScript.           "
console.log(string);
console.log(string.trim());
console.log(string.trim(" "));