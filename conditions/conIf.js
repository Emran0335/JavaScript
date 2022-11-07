//Conditional statements are used for making decisions based on different conditions. By default, statements in JavaScript are executed sequentially from top to bottom. If the processing logic requires so, the sequential flow of execution can be altered in two ways:

// 1. Conditional execution: a block of one or more statements will be exectuted if a certain expression is true.

// 2. Repetitve execution: a block of one or more statements will be repetitively executed as long as a certain expression is true. In this section, we will cover if, else, else if statement. The comparison and logical operators we learned in the previous sections will be useful in here.

// conditions can be implemented using the following ways:

//1. if
//2. if else
//3. if else if else
//4. switch
//5. teranry operator

//If
//In JavaScript and other programming languages the key word (if) is used to check if a condition is true and to execute the block of code. To create an if condition, we need if(keyword), condition inside a parenthesis() and block of code inside a curly bracket{}.

//syntax
// if (condition) {
//     this part of code runs for truthy condition
// }

let num = 3;
if (num > 0) {
  console.log(`${num} is greater than 0 and it is a positive number.`);
}

//If the condition is false, the block of code will not be executed and we do not see any output. In order to see the result of a falsy condition, we should have another block, which is going to be (else)

//If else
//If the condition is true, the first block of code will be executed, if not the else condition will be executed.

let num_one = -3;
if (num_one > 0) {
  console.log(`${num_one} is a positive number.`);
} else {
  console.log(`${num_one} is a negative number.`);
}

//The last condition is false, therefore the else block of code was executed.

//What if we have more than two conditions? In that case, we would use else if conditions
//If else if condition
// On our daily life, we make decisions on daily basis. We make decisions not by checking one or two conditions instead we make decisions based on multiple conditions. As similar to our daily life, programming is also full of conditions. We use else if when we have multiple conditions.

let a = 0;
if (a > 0) {
  console.log(`${a} is a positive number.`);
} else if (a < 0) {
  console.log(`${a} is a negative number.`);
} else if (a == 0) {
  console.log(`${a} is only zero.`);
} else {
  console.log(`${a} is not a number.`);
}

//Switch condition
// Switch is an altenative for (if else if else else) condition. The switch statement starts with a switch keyword followed by a parenthesis and code block with curly bracker.

let weather = "cloudy";
switch (weather) {
  case "rainy":
    console.log("You need a rain coat.");
    break;
  case "cloudy":
    console.log("It may be cold, you need a jacket.");
    break;
  case "sunny":
    console.log("You do not need a rain coat and jacket.");
  default:
    break;
}

//more example of switch case condition

let dayUserInput = prompt("What is the day?"); //sunday
let day = dayUserInput.toLowerCase();

switch (day) {
  case "sunday":
    console.log("Today is sunday."); // Today is sunday.
    break;
  case "monday":
    console.log("Today is monday.");
    break;
  case "tuesday":
    console.log("Today is tuesday.");
    break;
  case "wednesday":
    console.log("Today is wednesday.");
    break;
  case "thursday":
    console.log("Today is thursday.");
    break;
  case "friday":
    console.log("Today is friday.");
    break;
  case "saturday":
    console.log("Today is saturday.");
    break;
  default:
    break;
}

// Another example of switch condition

let num_enter = prompt("Enter a number.."); //50
switch (true) {
  case num_enter > 0:
    console.log(`${num_enter} is positive.`);
    break;
  case num_enter < 0:
    console.log(`${num_enter} is negative.`);
    break;
  case num_enter == 0:
    console.log(`${num_enter} is zero.`);
    break;
  default:
    break;
}
