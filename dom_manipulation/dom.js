// ** The most used Concept of JavaScript **//
/*
Functional programming is a paradigm that has gained popularity in recent years due to its ability to write more modular, reusable, and maintainable code. JavaScript, being a versatile programming language, is also well-suited for functional programming. In this article, we will explore essential concepts in functional programming with JavaScript and how they can help you write better code:

Functions as First-Class Citizens
Higher-Order Functions
Pure Functions
Immutability
Recursion
✓ Functions as First-Class Citizens
In functional programming, functions are treated as first-class citizens, which means that they can be assigned to variables, passed as arguments to other functions, and returned as values. This concept is crucial in functional programming, as it allows us to write more modular and reusable code.

Here are some examples of how functions are treated as first-class citizens in JavaScript:

Assigning Functions to Variables:
In JavaScript, you can assign a function to a variable just like you would assign any other value. For example:

const add = function(x, y) {
  return x + y;
}
Here, we are assigning a function that adds two numbers to the variable add. We can then call this function by invoking the variable add.

2. Passing Functions as Arguments:

Functions can also be passed as arguments to other functions. This allows for a more modular approach to programming, as it allows us to reuse the same function with different input and output. For example:

function greet(name, callback) {
  const message = "Hello, " + name + "!";
  callback(message);
}

function logMessage(message) {
  console.log(message);
}

greet("Sumit", logMessage); // Logs "Hello, Sumit!"
Here, we are defining a function greet that takes a name and a callback function as arguments. The callback function is then called with the message "Hello, Sumit!" as its argument. We are passing the logMessage function as the callback, which logs the message to the console.

3. Returning Functions as Values:

Functions can also be returned as values from other functions. This allows for more advanced techniques like closures and currying. For example:

function add(x) {
  return function(y) {
    return x + y;
  };
}

const addFive = add(5);
console.log(addFive(3)); // Logs 8
Here, we are defining a function add that takes a number x and returns another function that takes a number y and adds it to x. We then assign the result of calling add(5) to the variable addFive, which is a function that adds 5 to its argument. Finally, we call addFive(3) which logs the result of adding 5 and 3, which is 8.

✓ Higher-Order Functions
Higher-order functions are functions that take other functions as arguments or return functions as values. They allow us to write more abstract and general-purpose code that can be applied to different use cases. Some common higher-order functions in JavaScript are map(), filter(), and reduce().

Here are some examples of higher-order functions in JavaScript:

Array.prototype.map():
The map() method is a higher-order function that takes a callback function as an argument and returns a new array with the results of applying the callback to each element of the original array. For example:

const numbers = [1, 2, 3, 4];
const doubled = numbers.map(function(num) {
  return num * 2;
});
console.log(doubled); // Logs [2, 4, 6, 8]
Here, we are using map() to create a new array doubled that contains each element of numbers multiplied by 2.

2. Array.prototype.filter():

The filter() method is another higher-order function that takes a callback function as an argument and returns a new array with only the elements that pass the test specified in the callback. For example:

const numbers = [1, 2, 3, 4];
const even = numbers.filter(function(num) {
  return num % 2 === 0;
});
console.log(even); // Logs [2, 4]
Here, we are using filter() to create a new array even that contains only the even numbers from numbers.

3. Function.prototype.bind():

The bind() method is a higher-order function that returns a new function with a specific this value and initial arguments. It is often used to create a new function with a specific context or to create a partially applied function. For example:

const person = {
  firstName: "Sumit",
  lastName: "Saha",
  fullName: function() {
    return this.firstName + " " + this.lastName;
  }
};

const logName = function(greeting) {
  console.log(greeting + " " + this.fullName());
};

const boundLogName = logName.bind(person, "Hello");
boundLogName(); // Logs "Hello Sumit Saha"
Here, we are using bind() to create a new function boundLogName that has the context of the person object and an initial argument of "Hello". When we call boundLogName(), it logs "Hello Sumit Saha" to the console.

These are just a few examples of the many higher-order functions available in JavaScript. By using higher-order functions, you can write more generic and reusable code that can be applied to different use cases.

✓ Pure Functions
Pure functions are functions that do not have side effects, meaning they do not modify any external state or variables outside of their scope. They always return the same output for the same input, making them deterministic. Pure functions are essential in functional programming, as they promote code predictability, testability, and maintainability.

Here are some examples of pure functions in JavaScript:

Addition function:
function add(a, b) {
  return a + b;
}
This function takes two arguments and returns their sum. It is a pure function because it does not modify any external state and always returns the same result for the same input.

2. Array concatenation function:

function concatenateArrays(arr1, arr2) {
  return arr1.concat(arr2);
}
This function takes two arrays and returns a new array that contains the elements of both arrays. It is a pure function because it does not modify any external state and always returns the same result for the same input.

3. Date formatting function:

function formatDate(date) {
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();
  return `${year}-${month}-${day}`;
}
This function takes a date object and returns a string in the format “YYYY-MM-DD”. It is a pure function because it does not modify any external state and always returns the same result for the same input.

4. String capitalisation function:

function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}
This function takes a string and returns a new string with the first letter capitalised. It is a pure function because it does not modify any external state and always returns the same result for the same input.

In general, pure functions are functions that do not have any side effects and always return the same result for the same input. They are predictable and easier to reason about, making them ideal for writing maintainable and reusable code.

✓ Immutability
Immutability is a concept that involves avoiding modifying data structures or variables once they are created. Instead of changing an object or array, we create a new one with the desired changes. This approach prevents unintended side effects and makes code more predictable and easier to reason about.

Here are some examples of immutability in JavaScript:

Using the spread operator to create a new array or object:
const arr1 = [1, 2, 3];
const arr2 = [...arr1, 4];
// arr1 is still [1, 2, 3], arr2 is [1, 2, 3, 4]

const obj1 = { a: 1, b: 2 };
const obj2 = { ...obj1, c: 3 };
// obj1 is still { a: 1, b: 2 }, obj2 is { a: 1, b: 2, c: 3 }
In these examples, we are using the spread operator (...) to create a new array or object that contains the elements or properties of the original array or object. This creates a new copy of the data, rather than modifying the original data.

2. Using the concat() method to create a new array:

const arr1 = [1, 2, 3];
const arr2 = arr1.concat(4);
// arr1 is still [1, 2, 3], arr2 is [1, 2, 3, 4]
Here, we are using the concat() method to create a new array that contains the elements of the original array and the new element. This creates a new copy of the data, rather than modifying the original data.

3. Using Object.assign() to create a new object:

const obj1 = { a: 1, b: 2 };
const obj2 = Object.assign({}, obj1, { c: 3 });
// obj1 is still { a: 1, b: 2 }, obj2 is { a: 1, b: 2, c: 3 }
In this example, we are using Object.assign() to create a new object that contains the properties of the original object and the new property. This creates a new copy of the data, rather than modifying the original data.

4. Using Object.freeze() to prevent modification of an object:

const obj1 = Object.freeze({ a: 1, b: 2 });
obj1.c = 3;
// obj1 is still { a: 1, b: 2 }, the assignment is ignored
Here, we are using Object.freeze() to prevent modification of the obj1 object. Any attempt to modify the object will be ignored, preserving the immutability of the object.

In general, immutability means that the data is not changed directly, but rather new copies are created when changes are made. This can help prevent unintended side effects and make the code more predictable and maintainable.

✓ Recursion
Recursion is a technique where a function calls itself to solve a problem. It is a powerful tool in functional programming, as it allows us to solve complex problems by breaking them down into smaller, simpler ones. However, recursion can be tricky to use, as it can lead to stack overflow errors and performance issues if not used properly.

Here are some examples of recursion in JavaScript:

Factorial function:
function factorial(n) {
  if (n === 0) {
    return 1;
  } else {
    return n * factorial(n - 1);
  }
}

factorial(5); // returns 120 (5! = 5 * 4 * 3 * 2 * 1)
In this example, the factorial() function calculates the factorial of a number using recursion. If the input is 0, it returns 1. Otherwise, it multiplies the input by the result of calling factorial() with one less than the input.

2. Sum function:

function sum(arr) {
  if (arr.length === 0) {
    return 0;
  } else {
    return arr[0] + sum(arr.slice(1));
  }
}

sum([1, 2, 3, 4, 5]); // returns 15 (1 + 2 + 3 + 4 + 5)
In this example, the sum() function calculates the sum of an array using recursion. If the array is empty, it returns 0. Otherwise, it adds the first element of the array to the result of calling sum() with the rest of the array.

3. Fibonacci function:

function fibonacci(n) {
  if (n === 0 || n === 1) {
    return n;
  } else {
    return fibonacci(n - 1) + fibonacci(n - 2);
  }
}

fibonacci(6); // returns 8 (0, 1, 1, 2, 3, 5, 8)
In this example, the fibonacci() function calculates the nth number in the Fibonacci sequence using recursion. If the input is 0 or 1, it returns the input. Otherwise, it returns the sum of calling fibonacci() with the previous two numbers in the sequence.

Recursion can be a powerful tool in solving problems that involve repeating patterns or structures. However, it can also lead to performance issues and stack overflow errors if not implemented carefully. It’s important to understand the concept of recursion and use it judiciously in your code.

Conclusion
In conclusion, functional programming is an important paradigm that can help you write more modular, reusable, and maintainable code. By understanding essential concepts like functions as first-class citizens, higher-order functions, pure functions, immutability, and recursion, you can start writing more functional code in JavaScript. Functional programming is not the only way to write good code, but it is a powerful tool that can help you solve complex problems and make your code more predictable and easier to reason about.
*/


// ## DOM(Document Object Model)

// ### Creating an Element

// To create an HTML element we use tag name. Creating an HTML element using JavaScript is very simple and straight forward. We use the method _document.createElement()_. The method takes an HTML element tag name as a string parameter.

```js
// syntax
document.createElement('tagname')
```

```html
<!DOCTYPE html>
<html>

<head>
    <title>Document Object Model:30 Days Of JavaScript</title>
</head>

<body>

    <script>
        let title = document.createElement('h1')
        title.className = 'title'
        title.style.fontSize = '24px'
        title.textContent = 'Creating HTML element DOM Day 2'

        console.log(title)
    </script>
</body>

</html>
```

// ### Creating elements

// To create multiple elements we should use loop. Using loop we can create as many HTML elements as we want.
// After we create the element we can assign value to the different properties of the HTML object.

```html
<!DOCTYPE html>
<html>

<head>
    <title>Document Object Model:30 Days Of JavaScript</title>
</head>

<body>

    <script>
        let title
        for (let i = 0; i < 3; i++) {
            title = document.createElement('h1')
            title.className = 'title'
            title.style.fontSize = '24px'
            title.textContent = i
            console.log(title)
        }
    </script>
</body>

</html>
```

//### Appending child to a parent element

// To see a created element on the HTML document we should append it to the parent as a child element. We can access the HTML document body using *document.body*. The *document.body* support the *appendChild()* method. See the example below.

```html
<!DOCTYPE html>
<html>

<head>
    <title>Document Object Model:30 Days Of JavaScript</title>
</head>

<body>

    <script>
        // creating multiple elements and appending to parent element
        let title
        for (let i = 0; i < 3; i++) {
            title = document.createElement('h1')
            title.className = 'title'
            title.style.fontSize = '24px'
            title.textContent = i
            document.body.appendChild(title)
        }
    </script>
</body>
</html>
```

// ### Removing a child element from a parent node

// After creating an HTML, we may want to remove element or elements and we can use the *removeChild()* method.

// **Example:**

```html
<!DOCTYPE html>
<html>

<head>
    <title>Document Object Model:30 Days Of JavaScript</title>
</head>

<body>
    <h1>Removing child Node</h1>
    <h2>Asabeneh Yetayeh challenges in 2020</h1>
    <ul>
        <li>30DaysOfPython Challenge Done</li>
        <li>30DaysOfJavaScript Challenge Done</li>
        <li>30DaysOfReact Challenge Coming</li>
        <li>30DaysOfFullStack Challenge Coming</li>
        <li>30DaysOfDataAnalysis Challenge Coming</li>
        <li>30DaysOfReactNative Challenge Coming</li>
        <li>30DaysOfMachineLearning Challenge Coming</li>
    </ul>

    <script>
        const ul = document.querySelector('ul')
        const lists = document.querySelectorAll('li')
        for (const list of lists) {
            ul.removeChild(list)

        }
    </script>
</body>

</html>
```

// As we have see in the previous section there is a better way to eliminate all the inner HTML elements or the children of a parent element using the method *innerHTML* properties.

```html
<!DOCTYPE html>
<html>

<head>
    <title>Document Object Model:30 Days Of JavaScript</title>
</head>

<body>
    <h1>Removing child Node</h1>
    <h2>Asabeneh Yetayeh challenges in 2020</h1>
    <ul>
        <li>30DaysOfPython Challenge Done</li>
        <li>30DaysOfJavaScript Challenge Done</li>
        <li>30DaysOfReact Challenge Coming</li>
        <li>30DaysOfFullStack Challenge Coming</li>
        <li>30DaysOfDataAnalysis Challenge Coming</li>
        <li>30DaysOfReactNative Challenge Coming</li>
        <li>30DaysOfMachineLearning Challenge Coming</li>
    </ul>

    <script>
        const ul = document.querySelector('ul')
        ul.innerHTML = ''
    </script>
</body>

</html>
```

/// The above snippet of code cleared all the child elements.
