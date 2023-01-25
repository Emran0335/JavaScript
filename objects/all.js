JavaScript Introduction
Welcome to our JavaScript Tutorial. This tutorial covers the basics of JavaScript as well as more advanced topics. These include Inheritance, Immediate Functions, Prototypes, Closures, Currying, Namespaces, and more. Upon completion you will be comfortable adding robust JavaScript functionality to your web pages.

JavaScript
Building world-class web apps requires skills that go beyond this tutorial. For that you will need our Dofactory JS which teaches how to write robust, maintainable, and beautiful web apps using proven design patterns and pattern architectures. To learn more click here.

Both this tutorial and our Dofactory JS product come with code samples that demonstrate the concepts in action. Each time you see a 'Run' button, it will execute the code displayed. The results display in an output area under the code.

console.log("I am ready to run!");      // => I am ready to 


What is JavaScript
JavaScript is a dynamic programming language that can be used client-side as well server-side. On the client, JavaScript creates interactive elements that perform business logic and engage the user.

JavaScript Tutorial
History
#
JavaScript was introduced in 1995 by Netscape, the company that created the first browser by the same name. Other browsers followed, and JavaScript quickly gained acceptance as the de-facto client-side scripting language on the internet. Today it is used by millions of websites to add functionality and responsiveness, validate forms, communicate with the server, and much more.

Originally, JavaScript was named LiveScript but was renamed JavaScript as a marketing strategy to benefit from the exploding popularity of the Java programming language at that time. As it turned out, Java evolved into a server-side language and did not succeed on the browser, whereas JavaScript did. The change of name is unfortunate because it has caused a lot of confusion.

Soon after its initial release the JavaScript language was submitted to ECMA International -- an international non-profit standards organization -- for consideration as an industry standard. It was accepted and today we have a standardized version which is called EcmaScript. There are several implementations of the EcmaScript standard, including JavaScript, Jscript (Microsoft), and ActionScript (Adobe). The EcmaScript language is undergoing continuous improvements.

Developers initially felt that JavaScript was an inferior language because of its perceived simplicity. Also, users would frequently disable JavaScript in their browsers because of security concerns. However, over time, starting with the introduction of AJAX and the related Web 2.0 transition, it became clear that JavaScript allows developers to build powerful and responsive web applications. Today JavaScript is considered the Web language and an essential tool for building modern and responsive web apps.

Some developers are finding it difficult to start building serious apps with JavaScript; in particular those that are coming from mature, object-oriented, statically-typed languages, such as Java, C++, and C#. This is understandable because JavaScript is dynamically typed and a rather forgiving language which makes it easy to program, but also easy to make mistakes. In addition, mistakes and coding errors in JavaScript can be difficult to identify because of less mature developer tools, such as editors, compilers, debuggers, integration, deployment, etc. Fortunately, better tooling is becoming available but, as an example, JavaScript's console.log is still a common debugging facility.

In this tutorial we cover the JavaScript language and we will highlight those aspects of the language that are painful and error prone. We will explain how to avoid these.

JavaScript versus Java
#
A common misconception is that JavaScript is closely related to Java. It is not. However, it is true that both languages have a C-like syntax but that is where the similarity ends. With Java you create standalone applications, but this is not how JavaScript works. JavaScript requires a hosting environment which most commonly is the browser. The JavaScript code is embedded in an HTML documents and its primary use is to add interactivity to HTML pages. Many developers don't realize this, but JavaScript itself does not have the facilities to provide input and output to the user, it relies on the DOM and the browser for that.

Another difference is that Java is statically typed whereas JavaScript is a dynamically typed language. In a statically typed language, like Java, C#, or C++, you declare variables that are of a certain type, such as, integer, double, or string. At runtime these types do not change. Assigning a string to an integer variable will result in an error.

In Java, assigning a string value to an integer causes an error.

// Java

int total = 131;
total = "This is Java";      // Error. In fact, won't even compile
In JavaScript, which is a dynamically typed language, a variable can hold any type of value, such as integer, string, boolean, etc. Moreover, at runtime, the type can be changed. For instance, a variable that is bound to a number can easily be re-assigned to a string.

A JavaScript variable is assigned a number value, a string, an object, and even a function. It all works perfectly fine.

// JavaScript

var total = 131;                         // number
total = "This is JavaScript";            // string
total = {"Customer": "Karen McGrath"};   // object
total = function () {alert("Hello");};   // function
total();                                 // => Hello (executes function)
Both Java and JavaScript borrow their programming syntax from C. For example, for, do while, while loops, and if, switch, break, and continue statements all exist in JavaScript. Here are some examples:

for loop
#
 copy
var count = 0;
for (var i = 0; i < 10; i++) {
    count += i;
}
console.log("count = " + count);         // => count = 45
while loop
#
 copy
var i = 0;
count = 100;
while (i < count){
   i++;
}
console.log("i = " + i);            // => i = 100
switch statement
#
 copy
// switch statement
var day = new Date().getDay();
switch (day) {
    case 0:
        console.log("Today is Sunday.");
        break;
    case 1:
        console.log("Today is Monday.");
        break;
    case 2:
        console.log("Today is Tuesday.");
        break;
    case 3:
        console.log("Today is Wednesday.");
        break;
    case 4:
        console.log("Today is Thursday.");
        break;
    case 5:
        console.log("Today is Friday.");
        break;
    case 6:
        console.log("Today is Saturday.");
        break;
    default:
        console.log("Today is a strange day.");
}
if then else
#
 copy
var value = 9;
if (value < 0) {
    console.log("Negative value.");
} else if (value < 10) {
    console.log("Between 0 and 9, inclusive.");
} else {
    console.log("Greater than or equal to 10.");
}
break and continue
#
 copy
for (var i = 0; i < 100; i++) {
    if (i < 5) {
        continue;
    } else if (i > 7) {
        break;
    }
    console.log(i);         // => 5, 6, 7
}
try, catch
#
 copy
try {
    doesNotExist();
}
catch (ex) {
    console.log("Error: " + ex.message);    // => Error details
}
Scoping
#
Most languages support block-level scoping. Block level variables only exist within the context of a block of code, such as an if or a for statement. In the Java example below, the variable count only exists inside the curly braces. It is not visible or accessible outside the block.

// Java
if (accept == true) {
   int count = 0;                     // block level scope
   ...  
}

Function level scope
#
In JavaScript there is no block level scoping, but it does support function-level scoping. Function level variables that are declared inside a function are only available and visible to that function.

// JavaScript
function calculate () {
   var count = 0;                     // function level scope
   ...                   
}

Global scope
#
JavaScript variables that are declared outside functions have global scope and are visible to the entire program.

// JavaScript
var accept = true;       // global scope 
if (accept === true) {
   var count = 0;        // global scope   
}
Semicolons
#
Statements in JavaScript are delimited with semicolons. You can omit semicolons because the JavaScript engine has an auto-insertion mechanism which adds semicolons where it thinks they are missing. The problem is that this may cause unintended side effects.

For this reason, it is best to always end your statements with semicolons explicitly. Below is an example of how JavaScript looks at statements differently from what the developer intended.

Consider these 2 statements without semi-colons.

// anti-pattern!
sum = total1 + total2
(total3 + total4).x()
JavaScript will interpret this as:

sum = total1 + total2(total3 + total4).x();
Another example of what can go wrong.

 copy
// anti-pattern!
function sumSquared(x, y) {
    return
    (x * x) + (y * y);
}
console.log(sumSquared(3, 4));         // => undefined
This function will always return undefined because it executes the code with a semicolon following return.

function sumsquared(x,y) {
    return;                     // semicolon added! 
        (x * x) + (y * y);
}
JavaScript is Weakly Typed
#
As mentioned earlier, JavaScript is a weakly-typed language. A variable can be bound to any data type and then change its type. For instance, a variable with a value of 1 an be changed to "Hello", followed by an object assignment.

Sometimes this has confusing consequences. For example, when JavaScript encounters the expression "2" + 1, it implicitly converts the numeric 1 to a string and returns "21". Even this expression: null + 0. is legal in JavaScript and returns 0. Such implicit conversions can cause program errors that are difficult to detect.

 copy
console.log(null + 34);               // => 34
Functional programming
#
JavaScript supports a functional programming style. Functions in JavaScript are first-class citizens which it derives from the Scheme programming language. In fact, functions are objects and therefore a function can also have properties and methods.

There is more you can do with functions; you can store them in variables, pass them around as function arguments, and return them as the return value of a function. In JavaScript the difference between code and data can be blurry at times, a characteristic it borrows from the Lisp programming language. Here is an example of a function assigned to a variable. The function is executed by appending the variable name with two parentheses.

 copy
var say = function () {
    console.log("Hello");
};
say();                          // => Hello
Next is an example of a function that is passed as an argument to another function.

 copy
var say = function () {
    console.log("Hello");
};
function execute(callback) {
    callback();
}
execute(say);                  // => Hello
Finally, an example of a function that is returned by another function.

 copy
function go() {
    return function () {
        console.log("I was returned");
    };
}
var result = go();
result();                    // => I was returnedh
JavaScript supports functions nested within other functions. The nested functions are called methods. Methods have access to all parameters and local variables of the functions it is nested within.

In this example the nested say function has access to the name variable in the outer function.

 copy
function person(first, last) {
    var name = first + " " + last;
    function say() {       // method, nested function
        console.log(name);
    }
    say();
};
person("Joe", " McArthur ");     // => Joe McArthur
Arrays are also objects and the built-in array methods such as map, filter, and reduce possess the characteristics of a functional programming style; so they also have access to all array values. Arrays are discussed in a later chapter.

JavaScript is Object-Oriented, but Class-less
#
JavaScript does not support classes, but objects play a central role. Since there are no classes you may wonder 1) how are objects created, and 2) does JavaScript support inheritance? The short answers are: there are a few different ways to created objects and as far as inheritance, yes, JavaScript does support inheritance but through a mechanism that uses prototypes. The class-less, prototypal nature of JavaScript will be explored shortly, but first we'll review the types and objects supported by JavaScript.

First the basic types: JavaScript offers several primitive types: Numbers, String and Booleans, and also null type and undefined type. The first three, Numbers Strings, and Booleans, do have properties and methods but they are not objects. When reading a property or method from these types, JavaScript creates a wrapper object, by calling the Number(), String(), or Boolean() constructor behind the scenes. You can also explicitly create these wrapper objects yourself. Below is an example where JavaScript implicitly (i.e. behind the scenes) uses the String constructor to perform a substring operation. The second example uses the Number constructor to convert the number to a string while keeping only two decimals.

 copy
var text = "excellent";
console.log(text.substring(0, 5));     // => excel

var count = 20.1045;
console.log(count.toFixed(2));        // => 20.10
Objects
#
A JavaScript object is a collection of properties where each property has a name and a value. Just imagine it as a structure made up of key-value pairs. In more formal terms, JavaScript objects are associative arrays -- similar to Hash, Map, or Dictionary in other languages.

At runtime, you can create an empty object and then add properties of any type, such as primitive types, other objects, and functions to the object. Properties and values can be modified and deleted at any point in time. Properties can be enumerated using the for-in loop. Let's look at some examples.

 copy
// Note: the use of new Object() is generally discouraged 
var o = new Object();
o.firstName = "Joan";
o.lastName = "Holland";
o.age = 31;

console.log(o.firstName + " " + o.lastName);  // => Joan Holland
console.log(typeof o.age);                    // => number 

delete o.firstName;
console.log(o.firstName + " " + o.lastName);  // => undefined Holland

for (var prop in o) {

    // name: firstName, value: Joan, type: string
    // name: age, value: 31, type: number
    console.log("name: " + prop + " ,value: " + o[prop] +
        " ,type: " + typeof o[prop]);
}
In this example an empty object is created. Then three properties are added by assigning two strings and a numeric value. After displaying the values and the number type, the firstName property is deleted. Finally, a for-in loop displays the remaining properties (with name, value, and type) on the object.

There are 3 categories of objects in JavaScript:

     1. Built-in (native) objects like Math, Date, and Array
     2. User-defined objects like Book, Employee, etc., and
     3. Host objects defined by the runtime environment (usually the browser) such as DOM objects
         and the window global object.

Objects in the first two categories conform to the EcmaScript specification. However, objects made available by the hosting environment are outside the realm of EcmaScript.

Functions
#
The code below confirms that functions are indeed objects in JavaScript.

 copy
function say(name) {
    console.log("Hello " + name);
}

console.log(typeof say);             // => function
console.log(say instanceof Object);  // => true

say.volume = "high";
console.log(say.volume);            // => high
The function is of type function, but it is also an instance of type Object. In the last two lines a property named volume is assigned to the object without a problem, confirming that it behaves like an object.

Functions can also be used to create objects; these are called constructor functions. First you declare a function and then assign properties and functions (i.e. methods) using the this keyword. This example assigns two properties and one method to this.

function Book (title, author) {
    
    this.title = title;                      // book properties
    this.author = author;
    
    this.details = function() {              // book method  
        return this.title + " by " + this.author;
    }
}
By convention, constructor functions start with an upper-case letter (i.e. Book).

When a constructor function is called with a new operator it will create a new book instance. Internally, the function creates a new blank object and binds it to this. Then it executes the function body which commonly assigns properties and methods to this. At the end the function returns the newly created objects by an implicit return this statement.

In the code below a new Book instance is created and we invoke its details method.

 copy
function Book(title, author) {

    this.title = title;                      // book properties
    this.author = author;

    this.details = function () {              // book method
        return this.title + " by " + this.author;
    }
}

var book = new Book("Ulysses", "James Joyce");
console.log(book.details());        // => Ulysses by James Joyce
Functions and objects are not the only objects in JavaScript; arrays are objects and regular expressions are objects also.

A property of an object can be another object, which in turn can have one or more objects. All these objects provide a lot of flexibility and allow the creation of complex tree and graph structures.

Prototypes
#
JavaScript has no classes, only objects. So, without classes, is there perhaps another way that objects can derive functionality from other objects? In other words, is inheritance supported by JavaScript? The answer is yes; you can achieve inheritance by using prototypes. This is called prototypal inheritance, a concept borrowed from a language named Self. Prototypal inheritance is implicit, meaning it exists even if you do nothing special.

Let's look at prototypal inheritance. Each object in JavaScript is linked to a prototype object from which it inherits properties and methods. The default prototype for an object is Object.prototype. You can access this property via a property called prototype. In the code below we have a constructor function and check its prototype property. This is the prototype object that will be assigned to each book instance that is created by this constructor function.


 copy
var Book = function (author) {
    this.author = author;
};
console.log(Book.prototype);       // => [object Object], so there is something
Since each object has a prototype, it is easy to imagine a series of objects linked together to form a prototype chain. The beginning of the chain is the current object, linked to its prototype, which, in turn, is linked to its own prototype, etc. all the way until you reach the root prototype at Object.prototype.

Following the prototype chain is how a JavaScript object retrieves its properties and values. When evaluating an expression to retrieve a property, JavaScript determines if the property is defined in the object itself. If it is not found, it looks for the property in the immediate prototype up in the chain. This continues until the root prototype is reached. If the property is found, it is returned, otherwise undefined is returned.

Every function in JavaScript automatically gets a prototype property including constructor function(s). When you use a function as a constructor, its prototype property is the object that will be assigned as the prototype to all instances created.

Here is an example.

 copy
function Rectangle(width, height) {
    this.width = width;
    this.height = height;
}

Rectangle.prototype.area = function () {
    return this.width * this.height;
};

var r1 = new Rectangle(4, 5);
var r2 = new Rectangle(3, 4);

console.log(r1.area());               // => 20
console.log(r2.area());               // => 12
In the example, r1 and r2 objects are created by the same constructor, so they both inherit from the same prototype which includes the area method.

There is considerable confusion surrounding prototypes and prototypal inheritance among JavaScript developers. Many books, blogs, and other references define prototypal inheritance but unfortunately most are rather fuzzy and lack clear code samples.

Our JavaScript JS is designed to solve this confusion once and for all. It takes you step-by-step through JavaScript's prototype system with easy-to-understand diagrams and clear code samples. It may take 20 minutes or more, but once you 'get it' your understanding of JavaScript will have gone up exponentially -- not to mention your confidence in the language. To learn more click here.

JavaScript runtime and hosting environment
#
When JavaScript was first released the language was interpreted. The source code would be parsed and execute immediately without preliminary compilation into byte code. However, recent versions of browsers include highly optimized JavaScript compilers. Usually this involves the following steps: first it parses the script, checks the syntax, and produces byte code. Next, it takes the byte code as input, generates native (machine) code, and then executes it on the fly.

JavaScript applications need an environment to run in. The JavaScript interpreter/JIT-compiler is implemented as part of the host environment such as a web browser. The script is executed by the JavaScript engine of the web browser, which is by far the most common host environment for JavaScript.

More recently JavaScript is also being used outside the browser. Examples include Mozilla's Rhino and node.js – the latter is a Chrome-based platform to build fast, scalable network applications. JavaScript is also found on the desktop with applications like Open Office, Photoshop, Dreamweaver, and Illustrator, which allow scripting through JavaScript type languages.

JavaScript is a small language; it defines basic types, such as strings, numbers, and a few more advanced objects and concepts, such Math, Date, regular expressions, events, objects, functions, and arrays. However, JavaScript does not natively have the ability to receive input from the user and display output back to the user. Neither does it provide an API for graphics, networking, or storage. For this, it has to rely on its hosting environment. With JavaScript running in a browser, to communicate back and forth with the user, it needs to interact with the document object model, commonly known as the 'DOM'.

DOM is an internal representation of the HTML elements that appear in a web page. When the browser loads a page, it builds the page's DOM in memory and then displays the page. The HTML elements that represent the structure of a web page are called host objects that provide special access to the host environment. Based on user input, your JavaScript code modifies the DOM and as a consequence the web page is updated. Every piece of text, tag, attribute, and style can be accessed and manipulated using the DOM API. The document object lets you work with the DOM. A simple way to interact with the user is to use document.write which writes a message directly into the web page (note: the use of document.write is generally not recommended).

var today = new Date();
var day = today.getDay();

if (day === 0 || day === 6) {
    document.write("It's weekend");
} else {
    document.write("It's a weekday!");
}
Consider the following textbox on the web page.

<input id="email" type="text" /> 
Here is how you can access and change this element on the page.

var email = document.getElementById("email");     // gets ref to textbox 
email.disabled = true;                            // disable textbox

var address = "me@company.com";
document.getElementById("email").value = address; // update value
When JavaScript runs in the browser, it makes a special object available called window which is the global object. Note that window is not part of the standard JavaScript language, but part of the hosting environment. The alert method of the window object is widely used to display messages in a dialog box in the web browser. Since window is a global object, JavaScript lets you use this method without prefixing it with the window object name and dot operator.

When JavaScript is not running on the browser an entirely different set of host objects will be made available by the hosting environment. For example, node.js which is hosted on server machines frequently interacts with HTTP request and response objects allowing the JavaScript program to generate web pages at runtime; indeed very different from the browser.

EcmaScript
#
EcmaScript is the official, standardized version of JavaScript and several well-known implementations exist, including JavaScript, Jscript (Microsoft) and ActionScript (Adobe).

EcmaScript version 5 (ES 5) was introduced in late 2009. This version adds some new features, such as getters and setters, which allow you to build useful shortcuts for accessing and changing data within an object (similar to C# properties). Also new is built-in support for JSON, with methods such as JSON.parse() and JSON.stringify(), removing the need to use external libraries to work with JSON.

In addition, ES 5 added "strict mode", a feature which aims to enforce a restricted variant of the language by providing thorough error checking and making the scripts less error-prone, simpler, more readable, and reliable. You enable strict mode, by adding "use strict"; as the first line to your script, like so.

"use strict";

var text = "Yes, I'm strict now!";
This will apply strict mode to the entire script. You need to be careful when concatenating different scripts from different sources, because strict mode will apply to all scripts and you may include script that was not meant to run in strict mode, which is very likely to cause errors.

To solve this you can limit the scope of strict mode to a function by including "use strict"; as the first line in the function body, like so.

function f() {
    "use strict";
     ...
}
Adding "use strict"; changes both syntax and runtime behavior. For example, strict mode prevents you from accidentally creating global variables by requiring that each variable is declared explicitly. If you forget to properly declare a variable you will get an error.

For example, the following will not work.

"use strict";
x = 4;             // error

function f() {
    var a = 2;      
    b = a;         // error
    ...  
}
Adding a var before x and before b will solve the issue.

Strict mode disallows (i.e. deprecates) certain undesirable features including the with() construct, the arguments.callee feature, and octal numbers; if it encounters any of these JavaScript will throw an error. Furthermore, the use of certain keywords is restricted; for instance virtually all attempts to use the keywords eval and arguments as variable or function names will throw an error.

var eval = 10;                 // error
function getArea(eval){}       // error 

function eval(){}              // error
var arguments = [];            // error
Because of security concerns, the use of eval() is generally discouraged, but you can still use it (even in strict mode). In strict mode, the code passed to eval() will also be evaluated in strict mode. Furthermore, eval() does not let you introduce new variables which is considered risky because it may hide an existing function or global variable.


 copy
"use strict";

var code = "var num = 10;"
eval(code);                   // variable creation not allowed
console.log(typeof num);      // undefined (some browsers return number)
Be aware that strict mode is currently not reliable implemented across all browsers, and, of course, older browsers don't support it at all. It is very important that you test your code with browsers that support it and those that don't. If it works in one it may not work in the other and vice versa.

An easy way to find out whether strict mode is supported is with the following expression:

(function() { "use strict"; return !this; })();
Here is how you use it.

 copy
var strict = (function () { "use strict"; return !this; })();
console.log(strict);  // => true or false
When strict is true you can assume strict mode is supported.

ES 5 has a new object model which provides great flexibility on how objects are manipulated and used. For example, objects allow getters and setters; they can prevent enumeration, deletion or manipulation of properties; and they can even block others from adding new properties.

Getters and setters are useful shortcuts to accessing and changing data values in an object. A getter is invoked when the value of the property is accessed (read). A setter is invoked when the value of the property is modified (write). The obvious advantage is that the 'private' name variable in the object is hidden from direct access.

The syntax is rather awkward, but here is an example.

 copy
function Person(n) {
    var name = n;

    this.__defineGetter__("name", function () {
        return name;
    });

    this.__defineSetter__("name", function (val) {
        name = val;
    });
}

var person = new Person("John");
console.log(person.name);     // => John        // uses getter

person.name = "Mary";                           // uses setter
console.log(person.name);     // => Mary        // uses getter
In ES 5, each object property has several new attributes. They are: enumerable, writable, and configurable. With enumerable you indicate whether the property can be enumerated (using a for-in loop); writable indicates that a property is changeable, and configurable indicates whether it can be deleted or its other attributes can be changed.

Object.defineProperty is how you define these properties and their attributes. Below we are creating a car with 4 wheels. The attributes ensure that the wheels property cannot be changed or deleted, but wheel will show up when iterating over car's properties (with for-in).


var car = {};
 
Object.defineProperty(car, "wheels", {
   value: 4,
   writable: false,
   enumerable: true,
   configurable: false
});
car.wheels = 3;               // => not allowed  (not writable)
for (var prop in car) {
   alert(prop);               // => wheels       (enumerable)
}
delete car.wheels;            // => not allowed  (not configurable)
ES 5 provides two methods to control object extensibility: Object.preventExtensions prevents the addition of new properties to an object, and Object.isExtensible tells whether an object is extensible or not.

This below demonstrates their use.

var rectangle = {};
rectangle.width = 10;                    
rectangle.height = 20;   
                
if (Object.isExtensible(rectangle)) {     // true
    Object.preventExtensions(rectangle);  // disallow property additions
}

rectangle.volume = 20;                    // not allowed
With ES 5 you have the ability to seal an object. A sealed object won't allow new properties to be added nor will it allow existing properties or its descriptors be changed. But it does allow reading and writing the property values. Two methods support this feature: Object.seal and Object.isSealed; the first one to seal the object, the second one to determine whether an object is sealed.

 copy
var employee = { firstName: "Jack", lastName: "Watson" };

Object.seal(employee);
console.log(Object.isSealed(employee));    // => true
employee.firstName = "Tommie";             // okay
Freezing is equivalent to sealing, but disallows reading or writing property values. The two method involved are Object.freeze and Object.isFrozen.

 copy
var employee = { firstName: "Jack", lastName: "Watson" };

Object.freeze(employee);
console.log(Object.isFrozen(employee));    // => true
employee.firstName = "Tommie";             // not allowed




JavaScript Essentials
In this chapter on JavaScript Essentials we touch on several basic topics that every JavaScript developer should be aware of: case-sensitivity, linting, and the pitfalls and risks of the eval() function.:

JavaScript Tutorial
Case-sensitive
#
JavaScript is case-sensitive. Keywords such as for and function, must be in their proper case (i.e. lowercase) and not For and Function, or FOR and FUNCTION. Similarly, totalamount, totalAmount, TotalAmount, and totalAMOUNT are 4 distinct variable names in JavaScript.

When using JavaScript in a browser it is important to realize that HTML is not case-sensitive which may lead to some confusion. For instance, event attribute names can be typed in any case in HTML, so both onclick and onClick work. In JavaScript, it is typically all lowercase.


<!-- the same -->

<a href="index.html" onclick="handler();" />
<a href="index.html" onClick="handler();" />
Coding conventions and naming standards are important for JavaScript programmers. Most use camelCase for their variable and function names, such as, savingsAccount and computeProfits. Constructor functions are by convention written in PascalCase, such as, Employee and LegalDocument. Iterator variables are commonly single character lower case letters, such as i, j, and k, as in for (var i = 0; i < 10; i++) {…}.

Each JavaScript project should use a consistent set of coding standards and naming conventions. This is particularly important when the project is a team effort. Ideally, when exploring a project's code base, it should feel as if it's written by a single developer. This consistency ensures that all parts of the program are easy to support, irrespective who on the team wrote it.

To get your project off to a good start we have included a list of modern naming conventions and coding standards for JavaScript in our Dofactory JS. To learn more click here.

Linting
#
Linting is the process of scanning and analyzing source code to detect programming errors, bugs, stylistic mistakes, and suspicious constructs. In JavaScript, JSLint is a commonly used linter to analyze code for quality.

JavaScript is a weakly typed language which limits the compiler to check for errors before runtime. Because of this, the risk of bugs slipping through is fairly high. This is where JSLint comes to the rescue. It enforces some level of discipline that is otherwise lacking in JavaScript programming.

As an example, most browsers will let you get away with code like this:

function x() {
  arr = new Array()
  arr['num1'] = "012"
  no = parseInt( arr['num1'] )
  if(nov == 12)
     for (i=0;i<arr.length;i++) if(arr[i] != null) return true
  return false
};
However, when you pass this code through JSLint it will report more than a dozen problems! See how many you can find without viewing the JSLint report.

JSLint catches several categories of bugs before they get to the browser. For instance, having a comma after the last element in an array is invalid in JavaScript, but most browsers ignore it and don't complain. However, IE reports an error message "Unexpected identifier, string or number". JSLint helps to detect this kind of syntax errors.

JSLint requires the code to be compliant with strict mode; all variables and functions need to be declared before they are used or invoked. It favors the use of strict equality operators, that is === and !==, over these == and != which do not perform type conversion. JSLint discourages the use of eval(), with, ++, --, void, and bitwise operators. It also expects constructor function names to start with an uppercase letter.

To prevent unintended fall-through in a switch statement, JSLint requires that the statement before the next case is either, a break, a return, or a throw statement. It expects new objects to be created with {} rather than new Object. It ensures that all JSON data structures are well formed. It also looks for unreachable code, improperly escaped characters in regular expressions, and UTF characters that are considered unsafe.

JSLint recommends using a global declaration comment to let it identify the names of all your global variables. This helps JSLint find variable declarations you misspelled or forgot to prefix with a var. A declaration comment must appear before the variables specified are used, for example:

/* global totalCount, totalSales */
...
var totalCount = 0;
var totalSales = 0;
JSLint is highly configurable and its options are specified on top of the script as a sequence of name-value pairs in your code, where the name is a JSLint option and its value is either true or false. The default of all values is false. Here is an example:


/* jslint cap:true, debug:true, passfail:true, evil:false, plusplus:false */

The first three options: cap, debug, and passfail are all set to true, indicating that uppercase HTML is allowed, debugger statements are allowed, and that the scan should stop on the first error it detects. The evil (not a typo!) and plusplus options are set to false indicating that the use of eval() and ++ and -- operators is not allowed.

JSLint even examines the HTML trying to locate problems that are known to frequently occur with JavaScript. It expects all HTML tag names to be lowercase and be nested correctly. Also, it ensures that you use < for a < literal.

A fork of JSLint, called JSHint, is rather popular. Among other things, it is far more configurable than JSLint so that it can handle different coding styles. Whichever you use, be sure that you 'lint' or 'hint' your JavaScript programs.

eval() function
#
In this section we will review JavaScript's eval() function and its potential security pitfalls.

The built-in eval() function accepts a string as an argument. If the argument is a valid JavaScript expression, eval() evaluates the expression and returns its value. For example, eval("6+4") returns 10. If the argument is one or more JavaScript statements, or an entire program, eval() will happily execute them all and returns the value of the last statement.

While eval() is a powerful way to dynamically execute JavaScript code, it is also dangerous and has security implications associated with it. A hacker could easily inject rogue code that might compromise the security of your application. This is known as code injection.

In reality, when the code is known in advance, there really is no need to dynamically execute it. This is only needed if you dynamically generate code at runtime. For instance, suppose you have an object, called car, and want to access a property on it and you don't know the property's name until runtime.

 copy
var car = {};
var property = "color";

eval("car." + property + " = 'white';");  

console.log(car[property]);                     // => white
Although it works, there are several problems with this code. First, it is harder to read and maintain. Second, execution of this type of code is considerably slower because JavaScript will have to go back into the compiler/interpreted mode in the midst of runtime just to execute this trivial statement. Third, it hinders the ability of JSLint to identify problems to a great extent. Finally, and most importantly, a hacker may be able to inject code with consequences that you never anticipated.

Instead of using literal dot-names to access the dynamic properties, make use of the square bracket notation which is much better and simpler way to achieve the same result.

 copy
var car = {};
var property = "color";
car[property] = 'white';

console.log(car[property]);        // => white
With all these pitfalls and security risks it is best to avoid the use of eval() altogether.






JavaScript Variables
JavaScript Variables are named memory locations that hold a value. JavaScript supports only a handful of data types. The primitive types are number, string, boolean, and two special types: null and undefined.

JavaScript Tutorial
Primitive Types
#
Primitive types are the basic, ready-to-use variable types that are built into the language.

Number
#
JavaScript's number is the only type to hold numbers. It does not distinguish between byte, integer, long, double, or any other numeric type. As far as JavaScript is concerned a number is a number. Most programming languages support a separate integer type, but JavaScript does not. The implication of this is that in JavaScript the values 10, 10.0, and 1e1 are all the same.

 copy
var a = 10;     
var b = 10.0;
var c = 1e1;
console.log(a === b);     // => true
console.log(a === c);     // => true
console.log(b === c);     // => true
Here are some valid numeric literals: 1, 209, -8, 4.5, -99.9999, 3e2.

JavaScript supports two special numeric values: NaN and Infinity. They are discussed on the page about 'JavaScript Operators'.

String
#
JavaScript's strings are immutable sequences of characters. String literals are enclosed by single or double quotes, like so: "Hello" or 'Hello'. Once created a string cannot be changed (this is what immutable refers to). However, it is easy to create a new string by manipulating existing strings, such as: "Hello".substr(3), which creates a new string with "lo" as its value. JavaScript does not support the single character (char) type, but you can easily use a single character string, such, as "a", or "Y".

Here are some string examples:

 copy
var s = "Hello World";
var t = s.substr(6);            // new string 

console.log(t);                 // => World
Boolean
#
Like other languages, JavaScript's boolean has two possible values: true and false. Note that true and false are language keywords and they are distinct from 1 and 0.

 copy
var b = false;
console.log(b);       // => false (i.e. not 0)
Null and undefined
#
Both null and undefined can be regarded as a special value that indicates "no value".

The null is a language keyword (in fact, it is an object) which is used to indicate the expected lack of value. On the other hand, undefined is a predefined global variable that has a deeper meaning and is used to indicate an error-like, unexpected lack of value.

When your function has no return value, it returns undefined. If you declare a variable and don't initialize it, it returns the undefined value. If you query a non-existent array element or object property, again an undefined is returned. Here is an example.

 copy
var book;

console.log(book);          // => undefined
console.log(typeof book);   // => undefined 
If you want to indicate the 'lack of value' in your code, you typically use null rather than undefined.

 copy
var book = null;

console.log(book);          // => null
console.log(typeof book);   // => object  (although null is not a true object)
Both null and undefined qualify as false when a boolean value is required. They don't have any properties. If you attempt to access a property on them, an exception will be raised.

It is considered good practice to leave the use of undefined to JavaScript. In other words, let JavaScript determine if something is undefined, rather than you setting variables or properties to undefined. If your app requires that a variable or property value is unknown, give it a value of null and not undefined.

It is interesting to note that undefined is implemented as a global variable named 'undefined'. Its value is undefined. Since it is a global variable, there is nothing that prevents a malicious coder from re-assigning the value of undefined to something else, like so:

// hacker's code
undefined = true;
Clearly, this would wreak havoc with many JavaScript programs. Our Dofactory JS product has a lot more to say about this attack and ways to protect your code against this risk. To learn more click here.

Variable declarations
#
Variables in JavaScript are declared with the var keyword. You have several options on structuring your variable declaration and initialization:

// declaring one variable
var cost;                    

// declaring multiple variables, delimited by commas
var cost, profit;            

// declaring and assigning one variable
var cost = 120;              

// declaring and assigning multiple variables
var cost = 120, profit = 77; 
You can declare one variable at a time.

Let's look at variable naming rules. A variable name can contain any combination of alpha-numeric characters, the $ sign, and the underscore character. Its first character cannot be a digit. Variable names cannot contain space characters or any of the punctuation characters. Here are some examples of valid variable identifiers:

var _groupName_;
var $bicycle12; 
var ABH;
var particle_X_Y;
var abc$123;
var easy;
Implied global variables
#
If a variable is not declared explicitly (using var), then JavaScript will automatically treat it as a global variable. This can hide misspelled and forgotten variable declarations and consequently introduce bugs in your program. This is demonstrated below.

In this example, the variable count is missing a var and will be created implicitly. The variable reslt is a misspelling of result and a new global variable named reslt will be created. Worse, the original result value will always remain false.

count = 4;                 // => global count is created
var result = false;

if (condition === true) {
    reslt = true;          // => global reslt is created!
}
As you can see, typos are not called out in JavaScript and can lead to subtle and hard-to-detect bugs.

JSLint uncovers implied global variables and requires that you declare them explicitly using the var keyword before they are assigned a value. Using var also improves program readability. Even if you use var, you still have to be careful when chaining declarations and assignments. In the following code all seems fine, but total is a local variable, but summary is an implied global.

function calculate() {
   var total = summary = 0;   // => summary is implied global variable
   ...
}
The expression summary = 0 is evaluated first. Since summary is not declared, it is treated as global. The expression returns the value 0 which is further assigned to the variable total. Because total is declared with a var keyword, it is a local variable with function scope.

Variables as Properties
#
When declaring a global variable, you are actually defining a property on the global object. If the global variable is created with var, the property that is created cannot be deleted (undefined) with the delete operator. On the other hand, implied globals can be deleted.

var a = 1;        // => explicit global
b = 2;            // => implied global

delete a;         // => cannot delete
delete b;         // => deleted
Variable Scoping
#
The scope of the variable determines its visibility and its lifetime. Visibility determines the portions of the program in which it is accessible. Lifetime is the period during execution of a program in which a variable or a function exists.

I n programming, variable scoping is an important concept. JavaScript supports two scope-levels, global and functional, which are discussed next.

Scoping levels
#
In JavaScript, all variables that are defined outside functions are globally scoped; this means they are visible and accessible anywhere in the program. Variables that are defined inside a function have function scope, meaning they are only visible and accessible within the function, for the duration of that function.

In the example below variable g is global and is visible anywhere, including the function. The variables u and c are only visible within the function. It is said that variable g has global scope and variables u and c have function scope.

 copy
var g = "World";                 // global scope

function countries() {
    var u = "US";                // function scope
    var c = "China";             // function scope
    console.log(g);              // => World
    console.log(u);              // => US
    console.log(c);              // => China
}

countries();

console.log(g);                  // => World
console.log(typeof u);           // => undefined
The last line demonstrates the variable u is not visible outside the countries() function.

Function scope
#
If you declare a local variable inside a function with the exact same name as a global variable, then the local variable will hide the global variable. In the next example, the local client variable hides the global client variable.

 copy
var client = "Joan";             // global

function getClient() {
    var client = "Timothy";      // local, hides global
    return client;
}

console.log(getClient());        // => "Timothy"
Block Scope
#
In C-like languages, when control enters a code block (for example an if statement enclosed by brackets), then local variables defined within the block will have their own execution context and are destroyed when the closing block brace is encountered. However, JavaScript does not support block-level scoping, only function and global level scoping.

In the example below, the client variable in the if-block refers to the global variable. There is no hiding or anything of that nature, just one global variable named client.

 copy
var client = "Joan";

if (true) {
    var client = "Timothy";      // refers to global variable
    console.log(client);         // => "Timothy" 
}

console.log(client);             // => "Timothy"
Looping variables
#
When using variables in for loops you have to be careful because they continue to exist outside the loop. In the example below, the for-statement creates the variable i which continues to exist outside the loop, even after the for-statement finishes execution. Most other languages that support block level scoping the looping variables cease to exist outside the for loop.

 copy
for (var i = 0; i < 5; i++) {
    // do something 
}

console.log(i);     // => 5
Hoisting
#
The JavaScript compiler invisibly moves (hoists) all the variables to the top of their containing scope. Consider this code:

function f() {
    doSomething();
    var count;
}
JavaScript transforms the above code to this:

function f() {
    var count;               // hoisted
    doSomething();
}
All variables that you declare inside a function are visible throughout the function body (this is what we mean with function scope). This implies that variables are visible even before they are declared, but using a variable before it is initialized can lead to bugs. Here is an example:

var x = 1;
function f () {
    console.log(x);        // => undefined
    var x = 2;
}
Notice we have a global variable x and a local variable x. The undefined result may surprise you. Perhaps you expected a value of 1 or possibly 2, but not undefined. It's all because of hoisting which involves the variable declaration, but does not include the assignment portion. Here is how the code executes:

var x = 1;
function f () {
    var x;              // hoisted. hides global variable, but is unitialized.
    console.log(x);     // => undefined 
    x = 2;
}
Function Hoisting
#
It's not only variables that are hoisted, functions are too. Consider the following code:

 copy
var text = "Hello";

function f() {
    text = "Greetings";
    return;
    function text() { }
}

f();

console.log(text);            // => "Hello"
What is going on here? Well, the compiler lifts (hoists) the local function text() to the top of f()'s function body. Since declarations are function-scoped, the assignment of "Greetings" is made to the local text instance (which is a function) and, therefore, the global text variable remains unchanged. The code executes like this:

 copy
var text = "Hello";

function f() {
    function text() { }   // local variable text. Hides global text.
    text = "Greetings";   // local assignment to function named text
    return;
}

f();

console.log(text);        // => "Hello"
Finally, consider this example in which two local print functions are within an if-else statement:

 copy
function f() {
    var condition = true;
    if (condition) {
        function print() { console.log("true"); };
    } else {
        function print() { console.log("false"); };
    }
    print();               // => true or false (depending on browser)
}
f();
We know that functions get hoisted, so what will happen? Since the value of condition is true, you may expect that the print() inside the if block will execute. But this is not the case. Edge prints false and Firefox prints true. What this indicates is that hoisting is not concerned about the runtime code, that is, at compile time the conditions in the if-else statements are irrelevant. Also, there are no definite rules that dictate which function declaration shall prevail over the others.

The lesson learned here is that side effects of implicit global variables and of hoisting can result in hard-to-find bugs.





JavaScript Operators
JavaScript Operators are as rich as what you‘d expect from any modern language. There are four categories: arithmetic, comparison, assignment, and logical.

JavaScript Tutorial
Arithmetic Operators
#
Arithmetic operators perform basic computations on their operands (the variables they operate on). In the table below, variable a has a value of 2 before the operation is applied.

OPERATOR	OPERATION	EXPRESSION	RESULT
+	Add	2 + a	4
-	Substract	2 - a	0
*	Multiply	3 * a	6
/	Divide	3 / a	1.5
%	Modulus - division remainder	7 % a	1
++	Increment - increase by 1	a++	3
--	Decrement - decrease by 1	a--	1
String Operators
#
The + operator is used for adding numeric values, but it can also be used to concatenate (join) two or more strings and return a single string. Here is an example:

 copy
var str1 = "Hello";
var str2 = " Vivek";

str1 = str1 + str2;        // => "Hello Vivek"
console.log(str1);
The last statement can also be rewritten by using the assignment += operator as follows:

 copy
var str1 = "Hello";
var str2 = " Vivek";

str1 += str2;              // => "Hello Vivek"
console.log(str1);
Comparison Operators
#
Comparison operators compare the value of two operands. If the comparison is true, they return true, otherwise false. In the table below the variables are: a = 1 and b = 2.

OPERATOR	OPERATION	EXPRESSION	RESULT
==	Equal to	a == b	false
!=	Not equal to	a != b	true
<=	Less than equal to	a <= b	true
>=	Greater than or equal to	a >= b	false
<	Less than	a < b	true
>	Greater than	a > b	false
Assignment Operators
#
In an assignment operation the value of a variable is computed from the expression that lies to the right of an assignment operator. That value is assigned to the variable or property that is on the left side of the operator. In the table below the variables have the following values:
a = 1, b = 2, and c = 3.

OPERATOR	OPERATION	RESULT
=	a = b + c;	a = 5
+=	a += b;    // equivalent to a = a + b	a = 3
-=	a -= b;    // equivalent to a = a – b	a = -1
/=	a /= b;    // equivalent to a = a / b	a = 0.5
%=	c %= b;   // equivalent to c = c % b	c = 1
*=	a *= b;    // equivalent to a = a * b	a = 2
Logical Operators
#
Logical or boolean operators compare boolean expressions and then return true or false. The && and || ('and' and 'or') operators take two operands. The ! ('not') operator takes a single operand. In the table below the variables have the following values: a = 1 and b = 2.

OPERATOR	OPERATION	EXPRESSION	RESULT
&&	Logical and. Returns true only if both its first and second operands are evaluated to true.	a < 3 && b > 5	returns false as b > 5 is false
||	Logical or. Returns true if one of the two operands are evaluated to true, returns false if both are evaluated to true.	a < 3 || b > 5	returns true as a < 3 is true
!	Logical not. Unary operator that simply inverts the boolean value of its operand.	!(b>5)	returns true
Infinity, NaN
#
In most languages, dividing a number by 0 throws an error and stops program execution. JavaScript however, returns a special infinity value, printed as Infinity, when the result of a numeric operation is larger than the largest representable number.

Similarly, it returns a negative infinity value, printed as -Infinity, when the resulting negative value becomes more negative than the most negative representable number.

In both cases, the program simply continues with its execution!

10 / 0;         // =>  Infinity
-10 / 0;        // => -Infinity
2 / +0;         // => +Infinity
2 / -0;         // => -Infinity
Notice the -0 in the last statement. Negative 0 means it is a negative value closer to 0, but the value is so small that it cannot be represented with available precision. For instance, when you take -Number.MIN_VALUE (the smallest possible negative number, i.e. -5e-324) divided by 5, you get -0. Similarly, -1 divided by Infinity returns -0. Note that according to IEEE 754 specification, -0 is equal to 0.

In JavaScript when an arithmetic operation fails it does not throw an error; instead it returns a special numeric value, called NaN (for Not a Number), and the program happily continues with execution. The following operations all result in NaN:

Infinity / Infinity;   // => Nan. 
0 / 0;                 // => Nan.
"Hello" / 1;           // => Nan. "Hello" cannot be converted to number
Math.sqrt(-1);         // => Nan.
NaN / 0;               // => Nan. Any operation with NaN results in NaN
The JavaScript typeof operator does not distinguish between NaN and numbers, therefore the expression typeof NaN === "number" returns true. Furthermore, NaN does not compare equal to any number, including a comparison with itself, thus NaN == NaN returns false.

You need to be aware how NaN can affect computations which involves multiple steps. If you have a sequence of arithmetic operations and you get NaN as the final result, it means that either one of the initial inputs was NaN or NaN is produced somewhere in the chain.

The built-in function isNaN is used to determine whether a given value is NaN. It will return true if it is, and false if not. When a value is confirmed to be NaN, it is up to you how you deal with the value. You could do something like this (set it to zero):

var profit = NaN;
if (isNaN(profit)) {
    profit = 0;
}
Rather than using isNaN, a better approach would be to use the built-in function isFinite to determine whether a value can be used as a number or not. This function checks for both Infinity and NaN. Before calling isFinite make sure that the value passed is actually a number, like so:

 copy
var isNumber = function (val) {
    if (typeof val === "number") {
        return isFinite(val);
    }
    return false;
}

var n = 3.6;
console.log(isNumber(n));   // => true

n = NaN;
console.log(isNumber(n));   // => false

n = Infinity;
console.log(isNumber(n));   // => false
JavaScript Rounding
#
In terms of numeric precision, JavaScript may not give you the exact values you would expect.

0.119 / 100;    // => evaluates to 0.0011899999999999999
0.14 / 100;     // => evaluates to 0.0014000000000000002
The reason for these rounding imprecisions is that JavaScript uses a binary floating-point format for number. Binary floating-point representations can exactly represent fractions like 1/16, and 1/32, 1/64, 1/128, but not fractions like 1/100, 1/10 which are very common in monetary calculations. This can cause some rounding limitations like the examples below:

 copy
var diff1 = .5 - .4;   // => 0.09999999999999998 
var diff2 = .4 - .3;   // => 0.10000000000000003

console.log(diff1 == diff2); // => false, the values are not the same
The last statement can be rather disheartening. Both diff1 and diff2 are very close to .1, but not exact. So, be aware of JavaScript's internal number representations.

The ++ and -- Operators
#
In the C language, copying a string is frequently coded as the following one-liner:

while (*str1++ = *str2++);
This code tends to be tricky and confuse developers that are not too familiar with the 'pre' and 'post' nature of increment and decrement operators. Although JavaScript does not support pointers, the terseness of the ++ and -- operators is something that will need to be looked at carefully. For example, even an experienced JavaScript programmer will need some time to figure out what the following statement does:

 copy
var m = 7;
m = m++ + --m;
console.log(m)        // what is the value of m?
Clearly, this makes the code unnecessarily complex and hard to understand. It is best to use the ++ and -- operators on a single line which enhances program readability. For example:

count++;
elements[count] = 10;
Anything beyond that can be confusing; chances of making typos are high.

However, JavaScript loops can safely use the increment operators within a for-loop because it is standard practice and usually does not cause confusion.

for(var i = 0, j = cost.length; i < 5; i++, j++)
{
    cost[j] = val[i];
}
If you minify JavaScript code, be very careful when using ++ and -- operators. Minimizers remove unnecessary whitespace and comments from your JavaScript code. As an example, it may translate i + ++j into i+++j. The compiler then treats the resulting expression as
i++ + j which is incorrect. Fortunately, this is easily corrected by adding parentheses like
so: i + (++j). So the lesson here is to always add parenthesis to make your intentions clear.

It is also good practice to run JSLint before minifying your code, as it checks for these and other potential problems related to the ++ and -- operators.

The == and === Operator
#
The == operator compares the values of its operands. If their values are equal, it returns true. If the operands have different data types, JavaScript attempts to convert these to an appropriate type then compares their values. Consider this:

 copy
console.log("1" == 1);       // => true
Here the string "1" is compared to the numeric 1. JavaScript converts the string numeric literal to a number value. Since they are equal, it returns true. How about this:

 copy
console.log(false == "0");   // => true
This returns true. In this case, both operands are converted to numbers. Boolean true values are converted to 1 and false to 0. And the string "0" is converted to the number 0. Following the conversions JavaScript compares 0 == 0 and returns true.

Here are a few more cases:

 copy
console.log(null == undefined);    // => true
console.log(true == "1");          // => true
console.log("9" < "P");            // => true 
In the last expression, the ASCII values for numbers are lower than those for letters, returning true.

The rules of data conversion with the == operator are complex and hard to remember. This can easily lead to bugs. Fortunately JavaScript offers an alternative, called the strict equality operator (===) which does not convert data when testing for equality. It only returns true when 1) the operands being compared are of the same type, and 2) their values are the same. Here are some examples:

 copy
console.log("1" === 1);           // => false
console.log(true === !false);     // => true
If both operands are objects and if they refer to the same object, then JavaScript returns true. Let's see how this works with, say, arrays:

 copy
var ref1 = [10, 20];            // an array
var ref2 = [10, 20];            // a second array

console.log(ref1 == ref2);      // => false
console.log(ref1 === ref2);     // => false
Here ref1 == ref2 returns false, because they reference different arrays. The strict comparison ref1 === ref2 also return false because, although they have the same values, these are two different arrays in memory.

As in many other languages, JavaScript strings are immutable meaning that the contents of a string object cannot be changed after the object is created, although the syntax makes it appear as if you can do this. Let's see how this affects == and === operations:

 copy
var str1 = "Hello World";       // a string
var str2 = "Hello" + " World";  // another string

console.log(str1 == str2);      // => true
console.log(str1 === str2)      // => true
Here str1 and str2 reference the same immutable "Hello World" string and therefore both == and === return true.

How about comparing string objects created with the String constructor and with a string literal?

 copy
console.log("Hello" == new String("Hello"));    // => true
console.log("Hello" === new String("Hello"));   // => false
The == operator converts these objects on either side to the same type and then returns true because their values are the same. The === operator understands that the objects are not of the same type and therefore immediately returns false without even looking at their values.

Bitwise Operators
#
The table below summarizes the bitwise operators in JavaScript:

OPERATOR	USAGE	RESULT
Bitwise AND	a & b	Returns 1 for each bit position where both operands are 1
Bitwise OR	a | b	Returns 1 for each bit position where either operand is 1
Bitwise XOR	a ^ b	Returns 1 for each bit position where either but not both are 1
Left shift	a << b	Shifts in binary fashion all bits one position to the left; discarding the left bit and filling the right bit with 0.
Right shift	a >> b	Shifts in binary fashion all bits one position to the right, discarding the right bit. This operations maintains the original sign (+ or -).
0-fill right shift	a >>> b	Shifts in binary fashion all bits one position to the right, discarding the right bit and filling the left bit with 0.
JavaScript does not support an integer type. All numbers in JavaScript are stored in 64-bit floating point format i.e. double precision floating point. The bitwise operators that manipulate numbers at the bit level do not perform operations directly on this 64-bit floating-point representation. Instead, they coerce the numeric values to signed 32-bit integers, do the necessary operation, and again convert the result back to floating point format. This conversion has a performance impact.

You get the correct results for only up to 32 bits. During the conversion to 32-bit, the fractional part and any bits beyond the 32nd are dropped. If you have more bits than that, the value gets rounded to the nearest representable floating-point number.

 copy
var a = 0xFFFFFFFFF;     // => 36 bits all set to 1
var b = 0xFFFFFFFFF;     // => 36 bits all set to 1
var c = a & b;           // bitwise AND

console.log(c);          // => -1
You may expect that c's value has all 36 bits set to 1 following the bitwise & operation, but because of the conversion to 32-bits that is not the case. JavaScript converts to 32-bit, executes the bitwise AND operation, and the resulting 32-bits are all set to 1 which is equal to -1.

Let's look at an example with floating point numbers:

 copy
var a = 2.6;     // represented as bits 0010, fractional part discarded
var b = 6.2      // represented as bits 0110, fractional part discarded
var c = a & b;   // => bits 0010, which is equal to 2 

console.log(c);  // => 2
Strangely, if you use NaN, Infinity, or -Infinity as operands in bitwise operations, they are converted to 0.

In all C-like languages, bitwise operators are extremely fast. Until recently, they were slow in JavaScript but the latest versions of web browsers can JIT-compile JavaScript code. These operations have accelerated enough to be useful.

Bitwise manipulations are typically close to the hardware and therefore they don't come up very often in JavaScript programming.

A common mistake it to use bitwise & and | operators instead of logical && and || operators. This can lead to hard-to-detect bugs. Here is what may happen. Say we have a variable x with a value of 5 and you have mistakenly typed & instead of &&.

 copy
var x = 5;

if (x > 5 & x < 8) {
    console.log(true);
} else {
    console.log(false);
}
This is false, which is the same if you had typed the && operator: if (x<=5 && x>7). Although we are getting the expected result, we have improperly used a logical & operator which is intended for bit-level operations only. Again, be aware of this mistake as it can lead to difficult to find bugs.







JavaScript Conditionals
JavaScript conditionals are logical expressions that evaluate to either true or false. Conditionals are used to determine program flow through if statements and switch statements.

JavaScript Tutorial
if statements
#
The if statement executes a block of code if the conditional expression inside a pair of parentheses evaluates to true. The conditions typically involve comparison of variables for equality or inequality. Here is a simple example:

 copy
var person = { age: 33 };

if (person.age >= 18) {
    console.log ("Adult");             // => Adult
    console.log ("Allowed to vote");   // => Allowed to vote  
}
The block of code that executes following the if-statement can be a single statement or multiple statements enclosed by curly braces, {}.

Short Circuiting
#
All the parts of a logical expression might not be evaluated. The expression will be evaluated only until the true- or false-ness of the entire expression can be unambiguously determined.

Say we have an if-statement with two expressions: a <= 7 and b > 10. They are separated by an || (or) operator.

 copy
var a = 4;
var b = 5;

if (a <= 7 || b > 10) {   // true
    console.log("yes");         // => yes
}
Since a = 4, the expression (a <= 7) evaluates to a true value. This means that the entire expression will be true, regardless whether b is greater than 10 or not. Evaluating the second expression (b > 10) is not required and so JavaScript will skip that. This is called short-circuiting the expression.

if else statement
#
The if-statement may contain an optional else clause that specifies an alternative course of action. The else clause is executed if the expression in the if-statement is evaluated to false.

 copy
var password = "secret";

if (password.length >= 7) {
    console.log("okay");
} else {
    console.log("Number of characters must be at least 7.");
}
Multiple else if
#
If you need to test multiple conditions then if…else if…else is what you can use. If the condition associated with the if statement is true, the statements inside the if block are executed. If the condition is false, each else-if statement is evaluated in the order in which they appear. When a true else-if condition is found, the statements inside that else-if block are executed. If no else-if condition is evaluated to true, the statements inside the else block are executed.

 copy
var age = 34;

if (age < 13) {
    console.log("child");        // => child
} else if (age < 19) {
    console.log("adolescent");   // => adolescent
} else {
    console.log("adult");        // => adult
}
switch
#
As an alternative to a large number of if .. else if .. else statements you can use a switch statement which makes your code a bit more concise and readable.

The switch keyword is followed by an expression you wish to evaluate. This expression is referred to as the control variable that controls the flow of program execution. This expression is evaluated and its value is compared to the value following each of the case labels. Once the matching case label is found, the block of code contained inside that case is executed. The last statement in a block of code is almost always a break statement that signals the end of the block.

You can specify a default case which is optional. It is similar to the else clause of an if statement and is executed when none of the cases match. There can only be one 'default' label for a switch statement. Although default is optional, it is recommended that you include it as it handles any unexpected cases. Here is an example:

 copy
var account = 3;

switch (account) {
    case 1:
        console.log("Checking account");   // => Checking account
        break;
    case 2:
        console.log("Savings account");    // => Savings account 
        break;
    case 3:
        console.log("Business account");   // => Business account 
        break;
    default:
        console.log("Invalid account code");
        break;
}
Avoid switch fall-through
#
You should end each case with an explicit break statement. If a break is absent, the case 'falls through', meaning that the control will flow sequentially through the next case statement.

 copy
var account = 3;

switch (account) {
    case 1:
        console.log("Checking account");   // => Checking account  
        break;
    case 2:
        console.log("Savings account");    // => Savings account 
        break;
    case 3:
        console.log("Business account");   // => Business account (falls through)
    default:
        console.log("Invalid account code");
        break;
}
In the above code, the break is absent in case 3, so control will fall through to the default case, and the output will be both "Business account" and "Invalid account code", which is incorrect.

Forgetting to add a break is a common error and can cause hard to find bugs. JSLint will report a missing break (or return or throw statement) when it detects one. It does so because most fall-throughs are unintentional. If you intentionally implement your logic to use the fall-through approach, document it properly so that others who read your code don't get confused.





JavaScript Loops
JavaScript Loops are used to repeatedly run a block of code - until a certain condition is met. When developers talk about iteration or iterating over, say, an array, it is the same as looping.

JavaScript Tutorial
while
#
JavaScript offers several options to repeatedly run a block of code, including while, do while, for and for-in. Here is an example of a JavaScript while loop.

 copy
var sum = 0;
var number = 1;

while (number <= 50) {     // -- condition
    sum += number;         // -- body
    number++;              // -- updater
}

console.log("Sum = " + sum);  // => Sum = 1275
The condition is first evaluated. If true, the block of statements following the while statement is executed. This is repeated until the condition becomes false. This is known as a pre-test loop because the condition is evaluated before the block is executed.

The number++ statement is called the updater. Removing it will result in an infinite loop. You must always include a statement in a loop that guarantees the termination of the loop or else you'll run into this problem.

do while
#
Next is an example of a JavaScript do while loop:

 copy
var sum = 0;
var number = 1;

do {
    sum += number;         // -- body
    number++;              // -- updater
} while (number <= 50);    // -- condition

console.log("Sum = " + sum);    // => Sum = 1275
The block following do is executed first and then the condition is evaluated. If the while condition is true, the block is executed again and repeats until the condition becomes false. This is known as a post-test loop as the condition is evaluated after the block has executed.

The do while loop is executed at least once whereas the while loop may not execute at all. The do while is typically used in a situation where the body of a loop contains a statement that generates a value that you want to use in your conditional expression, like this:

do {
    // read a character from keyboard in the body 
} while (if ch === '0');     // => terminate loop if '0' is entered
for
#
The most frequently used loop in JavaScript is the for loop. Here is an example:

 copy
var sum = 0;

for (var i = 1; i <= 50; i++) {
    sum = sum + i;
}

console.log("Sum = " + sum);    // => Sum = 1275
It consists of three parts, separated by semicolons. The first is the initializer (var i = 1) which initializes the loop and is executed only once at the start. The second is a test condition (i <= 50). When a conditional expression evaluates to true, the body of the loop is executed. When false, the loop terminates. The third part is an updater (i++) which is invoked after each iteration. The updater typically increments or decrements the loop counter.

In a for loop, all three parts i.e. initializer, test condition, and updater are written together in a single line (called an iteration statement), whereas in a while, they're scattered and lie at different places. This makes a for loop more readable than a while loop and as a result, more easily maintainable.

So when do we use for and when while? If the number of iterations is known use the for loop. If you want to loop until a certain condition is met use the while loop.

for in
#
A for-in loop iterates through the properties of an object and executes the loop's body once for each enumerable property of the object. Here is an example:

 copy
var student = { name: "Bill", age: 25, degree: "Masters" };

for (var item in student) {
    console.log(student[item]);     // => "Bill", then 25, then "Masters"
}
With each iteration JavaScript assigns the name of the property (a string value) to the variable item. In the example above these are: name, age, and degree.

Note that for-in loops also return properties and methods that are inherited through the prototype chain. An easy way to skip properties and functions that are not part of the object itself use the built-in hasOwnProperty method.

 copy
var Student = function (name) {
    this.name = name;
}

Student.prototype.age = 38;

var student = new Student("Carl");

for (var item in student) {
    if (student.hasOwnProperty(item)) {
        console.log(student[item]);        // => Carl. age is not displayed
    }
}
We have not discussed objects yet, but the student object has a name property on the object itself. Its prototype object has an age property. The for-in loop iterates over all properties, but the hasOwnProperty ensures that the age property on the prototype does not get displayed because it is not student's own property.

break
#
When JavaScript encounters a break statement in a loop it immediately exits the loop without executing any other statements in the loop. Control is immediately transferred to the statement following the loop body. Here is an example:

 copy
var sum = 0;

for (var i = 1; i <= 10000; i++) {
    sum += i;
    if (i === 50) {
        break;    // immediately transfers control outside the for block
    }
}

console.log("Sum = " + sum);       // => Sum = 1275
When an infinite loop is created intentionally, you can use a break statement to controls termination of the loop, like so:

 copy
var number = 1;
var sum = 0;

while (true)    // equivalent to for ( ; ; ), called 'forever' loop
{
    sum += number;
    if (number === 50) {
        break;  // immediately transfers control outside while block
    }
    number++;
}

console.log("Sum = " + sum);       // => Sum = 1275    
The number++; statement won't be executed when the loop is entered for the 50th time.

continue
#
When JavaScript encounters a continue statement in a loop it stops the execution of the current iteration and goes back to the beginning of the loop to begin the next iteration. The example below displays only even numbers.

 copy
for (var i = 1; i <= 10; i++) {
    if ((i % 2) != 0) {
        continue;
    }
    console.log(i);     // => 2, 4, 6, 8, 10
}
The continue statement can also be used in other loops. However, in a for loop it behaves differently from when used in a while loop. In the example above, the for loop first evaluates the i++ expression and then tests the i <= 50 condition. Now, consider the while loop:

 copy
var number = 0;

while (number <= 10) {
    number++;
    if ((number % 2) != 0) {
        continue;
    }
    console.log(number);    // => 2, 4, 6, 8, 10 
}
When the continue statement is executed, the control is returned directly to the while (number <= 50) test condition and the number++ expression is not evaluated, thus causing an infinite loop. The lesson here is that you cannot simply replace a for loop with a while loop; you have to be careful especially when a continue statement is involved.





JavaScript Built-in Types
JavaScript comes with primitive and composite Built-in Types. The primitive types are: string, number, and boolean, with these special types: null, and undefined. Composite types include object, array, and function (which are all object types).

JavaScript Tutorial
Value and Reference Types
#
From a memory perspective, variables come in two different types: value types and reference types. Boolean values and numbers are value-based types, whereas strings, objects, arrays, and functions are reference types. Let's look at the differences.

Value types occupy a fixed size in memory. A boolean value for example only takes one bit. All numbers in JavaScript are 64-bit floating point numbers, so each number is represented by 8 bytes. A reference type variable holds a reference to the value whose length is not fixed and can be of any size.

Another difference between value and reference types is that value types are copied, passed, and compared by value. Reference types, are copied, passed, and compared by reference, rather than by value. Let's look at value types first:

 copy
var x = 1;
var y = x;

console.log(x == y);    // => true
console.log(x === y);   // => true

x = 6;

console.log(x);         // => 6  
console.log(y);         // => 1

console.log(x == y);    // => false
console.log(x === y);   // => false
When variable y is assigned to x it copies its value and following the assignment any relationship between x and y is severed. So, changing the value of x has no impact on the value of y.

Consider this example where a reference type is copied:

 copy
var x = { make: "Toyota" };
var y = x;

console.log(x == y);      // => true
console.log(x === y);     // => true

x.make = "Ford";

console.log(x.make);      // => Ford
console.log(y.make);      // => Ford
console.log(x == y);      // => true
console.log(x === y);     // => true
Following the execution of the second statement in which x is assigned to y, y refers to the same object that x refers to. JavaScript does not create a new copy of that object. If you make any changes to the underlying object through x, you can see these changes through y and vice-versa.

String type
#
A string represents an ordered sequence of zero or more 16-bit values. Each value typically represents a Unicode character. Unicode is designed to represent all of the characters found in all human languages.

A string is wrapped in either double or single quotes. Adding a single-quote character within a string that is delimited by double quotes is no problem; the same is true for adding a double-quote character in a single-quote delimited string. Adding a single quote in the latter requires an escape character before the single quote, like so \'. Other common escape characters include \n = newline; \r = carriage return; \t = tab, and \\ = backslash.

A string literal can be split across one or more lines by placing an escape character \ (called a continuation character) at the end of each line except the last one. The \ character does not become a part of the string literal. Here are some examples of string literals:

 copy
var s1 = "Don't ignore Peter's feedback";
var s2 = 'Don\'t ignore Peter\'s feedback';
var s3 = 'Andrew Fuller\n Bob Springsteen';
var s4 = "Andrew Fuller, \
Bob Springsteen, \
Helena Williams";

console.log(s1);
console.log(s2);
console.log(s3);
console.log(s4);
Note that using the continuation character is generally not recommended.

Here are some other string members you frequently use: length, and charAt.

 copy
var s = "Paris, London, Amsterdam";

console.log(s.length);              // => 24
console.log(s.charAt(0));           // => P. First character
console.log(s.charAt(s.length - 1));  // => m. Last character
And here are some additional frequently used string methods: indexOf, lastIndexOf, toLowerCase, substring, replace, and split.

 copy
var s = "Paris, London, Amsterdam";

// Gets position of first 'a', returns 1
console.log(s.indexOf("a"));

// Gets position of first 'a' starting at 3, returns 22
console.log(s.indexOf("a", 3));

// Gets position of last 'o', returns 11
console.log(s.lastIndexOf("o"));

// Converts string to lower-case
console.log(s.toLowerCase());

// Gets substring starting from the 15th character to the last,
console.log(s.substring(14, s.length));

// Replaces "London" with "Berlin"
console.log(s.replace("London", "Berlin"));

// splits into an array of substrings using ", " separator
console.log("Array: " + s.split(", ")); 
When comparing two strings they are considered equal when they have the same length and the same sequence of characters in corresponding positions.

 copy
var str1 = "Hello World";
var str2 = "Hello" + " World";

console.log(str1 == str2);      // => true
console.log(str1 === str2);     // => true
Strings are immutable
#
When we say that strings are immutable it means that once created, the contents of a string is of fixed length and cannot be modified. String may appear mutable when you work with them but they are not.: they are immutable internally. JavaScript does not offer any method or property that lets you alter the contents of a string value.

Again, modifying the string may appear to work, but in fact, a new string is generated. In the following example, b is referencing the same string as a. However, when modifying the underlying string through the b reference, a new string is created internally and its reference is assigned to b without affecting the original string referenced by a.

 copy
var a = "Hey";
var b = a;

b += ", what's up";

console.log(b);            // => Hey, what's up
console.log(a);            // => Hey
String methods like replace and toLowerCase appear to alter the string on which they operate, but they also return new strings.

Boolean type
#
The boolean type has two literal values: true and false. Note that true and false are language keywords and are not the same as 1 and 0.

All types of values in JavaScript have boolean equivalents. An empty string, null, undefined, NaN, 0, -0, and false itself evaluate to the boolean value false. All these types and their values are referred to as falsy. On the other hand, a non-empty string, any non-zero number including Infinity, any object, and true itself evaluate to the boolean value true. These types and their values are referred to as truthy. Although truthy and falsy are unofficial terms, they are widely used in the JavaScript community.

JavaScript has a special boolean casting function that is used to convert a value into its boolean equivalent – essentially determining whether the passed in expression is truthy or falsy.

 copy
var empty = "";
console.log(Boolean(empty));            // => false

var nonEmpty = "JavaScript is cool!";
console.log(Boolean(nonEmpty));         // => true
Automatic conversions to boolean equivalents are common in conditional statements.

 copy
var car = { make: "Toyota" };
var display = true;

if (car && display) {        // => true
    console.log(car.make);
}

car = null;
if (car) {                  // => false
    console.log("drive my car");
}
The first if statement returns true and therefore the alert displays. The second if-statement returns false and does not get executed.

Read-only Properties
#
Variables of type string, number, and boolean have properties and methods, but they are not objects. When you read a property or method from these types, JavaScript creates a temporary object, called a wrapper object, by calling the String(), Number(), or Boolean() constructor behind the scenes. Note that you can also explicitly call these constructor functions and create wrapper objects.

 copy
var message = "Hello World";

message.howlong = message.length;       // => sets property on object

console.log(message.howlong);           // => undefined
When the second statement is executed, JavaScript creates a temporary String wrapper object. Then it adds a user-defined property called howlong on it, sets its value, and subsequently discards that object. This shows that String objects are not true objects because they do not accept new properties.

In summary, you cannot set properties to numbers, strings, or booleans; any modification on the wrapper objects is not permanent.

String conversions
#
JavaScript offers three ways to explicitly convert a string to a number. They are the Number constructor function, parseFloat, and parseInt. The latter two functions have some special behavior. Here is an example using the Number constructor function which takes a string argument:

 copy
var num = Number("1.73");

console.log(num);                     // => 1.73
The parseFloat function converts strings to floating point numbers. It ignores any non-numeric values that appear after numeric characters:

 copy
console.log(parseFloat("1.73"));      // => 1.73 
console.log(parseFloat("USD 1.73"));  // => NaN
console.log(parseFloat("1.73 USD"));  // => 1.73
The parseInt function converts string to integer values. It also ignores any trailing non-numeric values:

 copy
console.log(parseInt("1.73"));        // => 1, rounded down
console.log(parseInt("USD 1.73"));    // => NaN  
console.log(parseInt("1.73 USD"));    // => 1 
console.log(parseInt("0x10"));        // => 16.  interpreted as hex 
Here are some additional conversion methods: parseInt also lets you specify the base of the number. If you want JavaScript to treat your numeric string as base 10 number, pass 10 as the second parameter to parseInt(). Pass 8 if the string is an octal number.

 copy
console.log(parseInt("1.73", 10));    // => 1
console.log(parseInt("10", 16));      // => 16
console.log(parseInt("111", 2));      // => 7  
console.log(parseInt("16", 8));       // => 14
When reporting monetary values, you are likely to perform number-to-string conversions. In the output string, you may like to standardize the number of decimal places by rounding the trailing digits or padding with zeros. The Number object offers methods that you can use to convert numbers to strings. For example, the toFixed method converts it to a string while keeping a number of decimals.

 copy
var num = 7.679;

console.log(num.toFixed(0));     // => "8" rounded to nearest whole number
console.log(num.toFixed(2));     // => "7.68"
console.log(num.toFixed(4));     // => "7.6790"
Here are two additional conversion methods: toPrecision and toExponential.

 copy
var num = 17305.73;

console.log(num.toPrecision(3));      // => "1.73e+4"
console.log(num.toPrecision(5));      // => "17306"
console.log(num.toPrecision(6));      // => "17305.7"
console.log(num.toPrecision(8));      // => "17305.730"
console.log(num.toExponential(1));    // => "1.7e+4"
console.log(num.toExponential(3));    // => "1.731e+4"
Math Object
#
For mathematical computations you use the Math object. There is no need to create an instance of Math to access its properties and methods because it is a static object. You simply use the Math object directly and call its method or property names. Below are max, min and abs methods:

 copy
console.log(Math.max(1, 2));       // => 2
console.log(Math.min(1, 2));       // => 1
console.log(Math.abs(-2));         // => 2
Next are some trigonometry related items: the constant PI, and sin and cos.

 copy
console.log(Math.PI);                          // => value of pi
console.log((180 / Math.PI) * Math.sin(1));      // => 90 (degrees)
console.log((180 / Math.PI) * Math.cos(0));      // => 90 (degrees)
Finally some rounding methods:

 copy
console.log(Math.round(Math.PI)); // => 3, round up/down to nearest whole nbr
console.log(Math.floor(9.69));    // => 9, round down to nearest whole number
console.log(Math.ceil(9.69));     // => 10, round up to nearest whole number
Date Object
#
To perform date and time calculations you use the Date object. The Date object holds a date as the number of milliseconds that have passed since Jan 1 1970 12:00 AM UTC. If you create a new Date object it will be set to the current date and time in the browser.

 copy
var current = new Date();

console.log(current);                // => current date and time
The time zone is determined by the system settings. In the example below, let's assume that the time zone where this code is run is set to Paris i.e. UTC + 1:00. Depending on your timezone your results will differ.

 copy
// => Jan 02 2011, 6:55:42 PM local time
var date = new Date(2011, 0, 2, 18, 55, 42);

console.log(date.getDay());        // => 0.  0–Sunday, 1–Monday, and so on
console.log(date.getDate());       // => 2.  2nd day of the month
console.log(date.getMonth());      // => 0.  0–January, 1–February, and so on
console.log(date.getFullYear());   // => 2011.
console.log(date.getUTCHours());   // => 17. Paris is 1:00 hour ahead from UTC
The difference between two dates is returned in milliseconds.

 copy
// => Jan 01 2011 12:00:00 AM local time
var from = new Date(2011, 0, 1);

// => Jan 02 2011, 6:55:42 PM local time
var to = new Date(2011, 0, 2, 18, 55, 42);

var timeElapsed = to - from;

console.log(timeElapsed);          // => 154542000 milliseconds
Here are examples of formatting date and time. Please note that your returns will differ depending on your timezone:

 copy
// => Jan 02 2011, 6:55:42 PM local time
var date = new Date(2011, 0, 2, 18, 55, 42);

console.log(date.toString());           // => Sun Jan 2 18:55:42 CST 2011 
console.log(date.toDateString());       // => Sun Jan 2 2011
console.log(date.toTimeString());       // => 18:55:42 CST
console.log(date.toLocaleDateString()); // => Sunday, January 02, 2011
console.log(date.toLocaleTimeString()); // => 6:55:42 PM
console.log(date.toUTCString());        // => Mon, 3 Jan 2011 00:55:42 UTC
Be careful when you enter an invalid date like January 32, 2011. Most browsers silently changes it to February 1.

 copy
console.log(new Date(2011, 0, 32));          // => Feb 1, 2011





JavaScript Objects
A JavaScript Object is a standalone container that holds multiple properties with values and methods (functions). An example is a customer object with firstName, lastName, and email properties, and a sendMessage method.

JavaScript Tutorial
Object Literals
#
A JavaScript object is a collection of properties and methods similar to Hash, Map, or Dictionary in other languages. The name of a property can be any string, including an empty string. The value can be any value, such as a string, boolean, number, and null, but it cannot be undefined. The object's properties can be defined even after you start using the object. But first, let's look at how we create objects in JavaScript.

The easiest way is to create a new object is with object literal notation which is bracketed by a pair of curly braces: {}. Properties and their values can be added as you go. In the example b elow we create an empty object, using object literal notation, and we are adding two properties after that:

 copy
var rect = {};                // creates an empty object
rect.width = 20;
rect.height = 10;

console.log(rect.width);      // => 20
console.log(rect.height);     // => 10
As an alternative you can immediately assign properties and their values in the literal notation.

 copy
var rect = { width: 20, height: 10 };

console.log(rect.width);      // => 20
console.log(rect.height);     // => 10
JavaScript objects are mutable, meaning you can modify their values.

 copy
var rect = { width: 20, height: 10 };
rect.width = 30;              // => modify value 

console.log(rect.width);      // => 30
console.log(rect.height);     // => 10
Property values are not limited to primitive types, like number or string; you can also add properties that are other objects, including functions. When a function is added to an object it is called a method.

 copy
var rect = { width: 20, height: 10 };

// add new object
rect.color = { red: 0, green: 255, blue: 128 };

// add new method
rect.getArea = function () {
    return this.width * this.height;
};

console.log(rect.color.red);             // => 0
console.log(rect.color.green);           // => 255
console.log(rect.color.blue);            // => 128
console.log(rect.getArea());             // => 200
You can define objects and all their member properties and methods in a single statement as object literal. Below we create a rectangle with two numeric properties, one object property, and a method.

 copy
var rect = {
    width: 20,
    height: 10,
    color: { red: 0, green: 255, blue: 128 }, // object property
    getArea: function () {                     // method property 
        return this.width * this.height;
    }
};

console.log(rect.width);                 // => 20
console.log(rect.height);                // => 10
console.log(rect.color.red);             // => 0
console.log(rect.color.green);           // => 255
console.log(rect.color.blue);            // => 128
console.log(rect.getArea());             // => 200
Object Properties
#
In this section we look at accessing, retrieving, and deleting object properties.

Accessing properties
Property values can be retrieved in one of two ways; dot notation and bracket notation. Below are examples of each:

 copy
var rect = { width: 20, height: 10 };

console.log(rect.width);             // => 20 (dot notation)
console.log(rect["width"]);          // => 20 (bracket notation)
Dot notation is used more often because it is easier to read and more compact. So when would you use bracket notation? Square brackets allow you to use property names that are not valid identifiers and don't work with dot notation, for example when they have spaces in them or start with a number. Also, bracket notation allows you to use property names that are variables. Examples of both are below:

 copy
var shape = {
    "bounding box width": 20,
    "bounding box height": 10,
    side1: 5,
    side2: 15,
    side3: 25,
    side4: 7,
    side5: 12
};

// could not be done with dot notation
console.log(shape["bounding box width"]);   // => 20 

for (var i = 1; i < 6; i++) {
    var prop = "side" + i;        // variable property name
    console.log(shape[prop]);     // => 5, 15, 25, 7, 12 
}

var property = "side1";

console.log(shape.property);      // => undefined  (dot notation does not work)
The last two statements are included to demonstrate that dot notation does not work with the property being a variable.

Property Names
#
To get a list of property names from an object use the for-in loop.

 copy
var car = { make: "Toyota", model: "Camry" };

for (var prop in car) {
    // => make: Toyota, and model: Camry
    console.log(prop + ": " + car[prop]);
}
The for-in loop returns all members of the object, that is, all properties and methods. If you don't need certain members or data types, you can exclude these from enumeration using the typeof operator. In the example below we skip functions.

 copy
var car = {
    make: "Toyota",
    model: "Camry",
    print: function () {
        console.log(this.make + " " + this.model);
    }
};
for (var prop in car) {
    if (typeof car[prop] !== "function") {
        console.log(prop);         // => make, and model
    }
}
Be aware that the order in which the properties are returned by a for-in loop is not guaranteed. If order is important you will need to manage your own list of properties (probably as an internal array).

Deleting Properties
#
Use the delete operator to remove a property from an object, like so:

 copy
var circle = { radius: 8 };

console.log(circle.radius);             // => 8
console.log(delete circle.radius);      // => true
console.log(circle.radius);             // => undefined
Constructor Ffunctions
#
Object literal notation, such as var x = {}, is preferred if all you need is a single object and there is no need for multiple instances. However, if you need multiple instances, it is better to use a constructor function. Here is an example of a book constructor function.

function Book(isbn) {
    this.isbn = isbn;
    this.getIsbn = function () {
        return "Isbn is " + this.isbn;
    };
}
Properties, including methods, are assigned to the 'this' value in the function's body. In the above example a property and a function are assigned. Also notice that this function is capitalized (i.e. Book); constructor functions are capitalized by convention in JavaScript

To create a new object with this function you use the new operator followed by a function invocation. A function that is invoked this way is called a constructor function whose main purpose is to create and initialize a new object. Here we are creating a new book object:

 copy
function Book(isbn) {
    this.isbn = isbn;
    this.getIsbn = function () {
        return "Isbn is " + this.isbn;
    };
}

var book = new Book("901-3865");

console.log(book.getIsbn());    // => Isbn is 901-3865
When new Book() is invoked, JavaScript creates a new empty Object and sets an internal property which specifies that the new object's prototype is Book, that is, the newly created object inherits the prototype of the function. It then passes the Book() function two arguments: the new object as this (as a hidden parameter) and the "901-3865" as isbn. The function, in turn, sets the object's isbn property to "901-3865" and also adds the getIsbn() method to the object. JavaScript returns the newly created object to the caller which then assigns the new object to the book variable.

Each time you invoke new Book(), a new getIsbn method is created which is a rather inefficient because the method is the same for all book instances. A better approach is to let all instances share a single method which can be accomplished by adding getIsbn to the prototype of Book rather than the Book function itself. Here is how this is done:

 copy
function Book(isbn) {
    this.isbn = isbn;
}

Book.prototype.getIsbn = function () {
    return "Isbn is " + this.isbn;
};

var book = new Book("901-3865");

console.log(book.getIsbn());    // => Isbn is 901-3865
As you can see, it works the same as when getIsbn was not shared. This is a very common object creation pattern. To really get to know JavaScript, we present this pattern and many others in our unique Dofactory JS. Click here for more information.

Omitting new
#
If you forget to use the new keyword, your code will break without warning. There won't be any compile-time or runtime warnings. See the example below where we call the instructor function with new and later without new.

 copy
function Task() {
    this.message = "Learning JS";
}

var t = new Task();                        // includes new   

console.log(t.message);                    // => Learning JS
console.log(window.message === undefined); // => true

var u = Task();                            // new is omitted!

console.log(u.message);                    // => error (not displayed in runtime)
console.log(window.message === undefined); // => false
console.log(window.message);               // => Learning JS
Calling a constructor function without new is like calling an ordinary function. The this value in this call will not be bound to a new object. Instead, it is bound to the global object. Notice that the function is adding the message property to the global object (i.e. window). This is often referred to as polluting the global namespace.

You can protect yourself against this mistake by including a check at the beginning of each constructor function. Essentially, it checks if this is an instance of Task: if it is not, then it invokes new Task() returning a true new instance.

 copy
function Task() {
    if (!(this instanceof Task)) {
        return new Task();
    }
    this.message = "Learning JS";
}

var t = Task();          // new is omitted

console.log(t.message);  // => Learning JS
To learn more about avoiding common JavaScript errors, the Dofactory JS includes helpful guidelines about optimal object instantiation, object scopes, and object lifetimes through the use of design patterns and best practices. To learn more click here.

The value of this
#
In JavaScript, the this keyword provides an object a way to identify and examine itself. Consider the example below:

 copy
function Circle(radius) {
    this.radius = radius;
}

Circle.prototype.getRadius = function () {
    return this.radius;
}

var smallCircle = new Circle(5);
console.log(smallCircle.getRadius());    // => 5

var largeCircle = new Circle(100);
console.log(largeCircle.getRadius());    // => 100
We have two circles, a small one and a large one. Each knows the size of their radius because in the getRadius method this value refers to the object it called from.

However, this can refer to a different object as well; it all depends on the execution context. All JavaScript code runs in an execution context. You can imagine the execution context as the scope of a function. A call to a function creates a new execution context. Also, in recursive functions a new context is created each time a function makes a call to itself.

Code that is not inside a function executes in a global execution context in which this is bound to the global object. The example below shows that in the global context the str variable is the same as this.str.

 copy
var str = 'hello';
console.log(str);       // => hello

this.str = 'world';     // this refers to the global object
console.log(str);       // => world
The value of this inside a function body is determined how the function is invoked. The context is commonly furnished by the parent scope in which the function was invoked. Consider the example below:

 copy
var circle = {
    radius: 10,
    getRadius: function () {
        console.log(this === circle);
        console.log(this.radius);
    }
};

circle.getRadius();                 // => true, 10

var anotherCircle = {
    radius: 12
};

anotherCircle.getRadius = circle.getRadius;
anotherCircle.getRadius();         // => false, 12
When invoking circle.getRadius() JavaScript establishes an execution context for the function call and sets this to the circle object. anotherCircle does not have a getRadius() method, but can be copied from circle. Once copied and executed, the value of this refers to anotherCircle which is why the first alert, which tests for cicle, return false, because this is not of type circle.

There is an easy way to determine the value of 'this' in a function. Look at the immediate left side of the invocation parentheses () and determine the object to which it belongs to. Let's explain this with an example. Below we have three names with different scope. The First name has global scope and is a property of the global object, the Middle name is a student object property and the Last name is a detail object property.

 copy
var name = 'First';

var student = {
    name: 'Middle',
    detail: {
        name: 'Last',
        getName: function () {
            console.log(this.name);
        }
    }
}

var result = student.detail.getName;

result();                    // => First (global scope)
student.detail.getName();    // => Last  (detail scope)  
In the first example, the left side of the parentheses is the variable result which belongs to the global object when invoked. So we get its name which is 'First'.

The second example, the left side of the parentheses is getName, which belongs to the detail object, so we get its name which is 'Last'.

Inheritance
#
Unlike classical inheritance where classes inherit from classes, JavaScript objects inherit from other objects, called prototypes, in a prototypal inheritance system.

Each object in JavaScript has a prototype property that points to a prototype object. There is nothing special about prototype objects, they are regular objects. Objects inherit all properties and methods that are available on the prototype object. Prototype objects themselves have prototypes, which leads to a prototype chain. This process in which objects inherit properties from objects in a prototype chain is referred to as prototypal inheritance. This model is simpler, smaller, and with less redundancy than that of classical inheritance.

Prototypal inheritance works on the concept of differential inheritance in which each item in the prototype chain only augments the differences with its parent. In other words, properties on prototype objects do not change or override properties in the parent object.

Let's look at an example. First, we create an account object with a bank property and a getBank method. This object will serve as the prototype for other objects like savings, checking, etc.

var account = {
    bank: "Bank of America",    // default value
    getBank: function() {
        return this.bank;
    }
};
Setting prototypes to an object is done by setting an object's prototype attribute to a prototype object. We can make this process a bit simpler by using a helper function, so let's first create this function; we'll name it createObject. What follows may seem a bit convoluted, but once you understand prototypes in JavaScript things will clear up. Furthermore, our Dofactory JS does a wonderful job of explaining the details of prototypal inheritance which will help you in your journey to becoming a true JavaScript rockstar. To learn more about this framework click here. But now back to createObject.

createObject accepts a prototype object as an argument, named p and returns a new object (a function object really) whose prototype attribute is set to the passed in prototype object. The prototype attribute is how JavaScript is able to follow an object's prototype chain.

function createObject (p) {
    var F = function () {};    // Create a new and empty function
    F.prototype = p;
    return new F();
}
With this function in place, we now like to create a savings object that inherits the functionality of the account object. First, we call our createObject function and pass in the account. This returns a new object with account as its prototype. Next we add member properties and methods that are specific to savings accounts.

 copy
function createObject(p) {
    var F = function () { };    // Create a new and empty function
    F.prototype = p;
    return new F();
}

var account = {
    bank: "Bank of America",   // just the default value
    getBank: function () {
        return this.bank;
    }
};

var savings = createObject(account);
savings.accountHolders = [];

savings.getAccountHolders = function () {
    return this.accountHolders;
}

savings.accountHolders.push("Jack Saver");
savings.accountHolders.push("Mary Saver");

console.log(savings.getAccountHolders()[0]);      // => Jack Saver
console.log(savings.getAccountHolders()[1]);      // => Mary Saver
console.log(savings.getBank());                   // => Bank of America

savings.bank = "JP Morgan Chase";
console.log(savings.getBank());                   // => JP Morgan Chase
After creating the savings account, we add a couple of account holders to the object. Next we see which bank is associated with these savings accounts; as expected it is "Bank of America". In the second to last statement we change the bank to "JP Morgan Chase", which is confirmed with the alert message. This confirms that the prototypal inheritance chain works as expected.

Building Prototypal Hierarchies
#
You can inherit from savings and add new properties and methods to a new parent object, and do this again and again. Inheritance can go many levels deep, but in order to not overcomplicate things, it is generally best to limit this to 2 or 3 levels. Of course, JavaScript will just continue searching the prototype chain until it hits the last object, the global object, and if the property or methods is not found, JavaScript return undefined. Lengthy inheritance chains will negatively affect performance, which is another reason to avoid deep hierarchies.

Prototypal inheritance is a highly memory efficient. A prototype is just a single object and derived object instances hold only references to their prototype. All replicated instances share a single copy of the members defined in the prototype object.

If you are coding to the EcmaScript 5 specification, then you don't need to write the aforementioned createObject function yourself. EcmaScript 5 has a built-in Object.create() method, which allows the creation of derived objects just as we did with our own createObject. Here is the code:

 copy
// EcmaScript 5
var account = {
    bank: "Bank of America",        // just the default value
    getBank: function () {
        return this.bank;
    }
};

var savings = Object.create(account);

console.log(savings.bank);          // => Bank of America
If you are an experienced object-oriented developer you know that programming a class-based language is impossible without understanding class based inheritance. Similarly, writing professional JavaScript requires a solid grasp of prototypal inheritance to be able to move beyond the simple JavaScript snippets that were common just a few years ago.

Our unique Dofactory JS provides the necessary information on prototypes and how to use these in your own projects by applying proven design patterns and best practices. Click here for more details.

Once you are familiar with prototypal inheritance it is actually easier to work with than classical inheritance. Its syntax is more tidy and simple. To customize your objects, you can quickly modify properties and methods at runtime without requiring a large amount of infrastructure code.





JavaScript Advanced Objects
In this chapter on Advanced Objects we will take a look at the more advanced topics related to objects. These include Namespaces, Modules, Method Chaining, Closures, Object Literals, and Private Member Sharing.

JavaScript Tutorial
Namespaces
#
Unlike many other languages, JavaScript does not support namespaces. Namespaces are important because they help reduce the number of identifiers for variables, objects, and functions that are added to the global scope in your application. JavaScript is a flexible language and there are ways to work around this limitation and implement your own namespaces. First, let's explore the need for namespaces a bit more.

In JavaScript, all the code shares a single global namespace which is simply a single global object that holds all global variables and functions as properties. In the browser this is the window object. This tends to pollute the global scope if you have many objects. In the example below, num, obj, str, total, numr, and sum are all added to the global object:

var num = 5;
var obj = {};
var str = "Good morning";

function sum(x, y){
   total = x + y;
   return total;
}

numr = sum(4,3);
Anything that is not properly declared, such as undeclared function variables, also ends up on the global object. In the example above, the identifiers num, obj, str, and sum are properly declared using the var keyword, but the function scoped variable total is missing a var and numr is a misspelling of num. JavaScript will add both total and numr to the global name space, which most likely is not what you want.

Suppose that your web app includes a third party JavaScript library that creates beautifully animated buttons. You deploy your app and the next thing you know is there are complaints from a client: they don't want 125,000 teddy bears. You start investigating and after many hours of intense pressure you discover that the animation library uses a global variable named number to iterate over the animations. But you also use number to hold the number of items ordered in a shopping cart. This is an example of a name collision. Name collisions can create bugs that are often very hard to trace.

Name collisions can be a significant problem in JavaScript. So, how do you avoid this? A quick and easy solution is offered by the Namespace Design Pattern. You create a single global object for your application and add all your variables and functions to this object. This allows you to namespace your code, make things tidier, and significantly reduce your chances of naming conflicts with third-party JavaScript libraries, widgets, etc.

Note that the namespace name itself is added to the global scope, so it is best that you create a unique name. Our example below uses MYAPP in uppercase, to emphasize the namespace.

var MYAPP = {};        // our unique namespace  
MYAPP.num = 5;
MYAPP.obj = {};
MYAPP.str = "Good morning";
MYAPP.sum = function(x, y){
   var total = x + y;
   return total;
}
MYAPP.num = MYAPP.sum(4,3);
The above namespace pattern is a great first step in avoiding potential name collisions. However, other, more sophisticated and robust patterns exist that can help you better manage namespaces in JavaScript. These and others techniques are presented in our Dofactory JS product. To check it out click here.

Modules
#
Java (not JavaScript) has a keyword called package that provides a way to group semantically-related classes. This helps in the organization of a large number of classes. For instance, in a graphical drawing application, Ellipse, Rectangle, and Polygon are logically-related classes. So you'd like to bundle these in the same package called Draw. Unlike Java, JavaScript does not provide any special keyword for packages.

The solution in JavaScript is to build modules in which to organize your code. What is a module? A module is a self-contained piece of code that groups semantically-related variables and functions. Modules are not built-in constructs in JavaScript, but the JavaScript Module Pattern provides a way to create modules which have well-defined interfaces that are exposed to clients of the module.

An important advantage of modules is that the internal functionality can be modified whenever necessary without affecting the rest of your program. This promotes encapsulation and information hiding.

To define a module in JavaScript, you take advantage of anonymous closures by creating an anonymous immediate function. That is a mouthful, but in reality it is not too complicated. Once you've seen a few modules, you'll understand how they work.

Here is the outline of a module:

var MODULE = (function () {
    var module = {}; 
    var privateVariable = 4;
	
    function privateMethod() {
        // ..
    }
	
    module.moduleProperty = 1;
    module.moduleMethod = function () {
        // ...
    };
    return module;
}());
This is a simple but good example that demonstrates the principles of building JavaScript modules. The anonymous immediate function is the function wrapped in parentheses, like so (function() { … })(). It is anonymous because it has no name, and it is immediate because when JavaScript encounters it, it gets executed immediately and its return value is assigned to MODULE.

The function's variables privateVariable and privateMethod are private to the function meaning that external code has no access to these variables. The moduleProperty and moduleMethod are part of the module object which is returned, so that part is public in the sense that outside code will have access to these properties.

Modules are fundamental to building modern JavaScript applications. Unfortunately, a full discussion of the Module pattern is beyond the scope of this tutorial. To learn more you will find a solid review of the Module pattern with plenty of examples in our Dofactory JS. To learn more click here.

Chaining
#
JavaScript allows you to invoke multiple methods on an object in a single expression. This is called chaining and is accomplished by stringing the method calls together with dots between them, like so:

object.method1().method2().method3();
When building a chain the object is named only once and then multiple methods are called on it. For this to work, your methods must return the object that they operate on. Each method works on the object and when it is done it returns it to the next call. This gives rise to a chain of method calls in a single expression.

Here is a real-world example of a banking account in which the account number, the balance, and a line of credit are set:

account.number("012477630").setBalance(10971).applyCredit(200);
Chaining in JavaScript can improve performance as well as readability. The jQuery library uses chaining extensively; here is an example of how to chain jQuery selector methods:

$("#myDiv").removeClass("off").addClass("on").css("background": "red");  
This coding style cuts down significantly on jQuery's selector use, which is useful because usually this is where jQuery spends most of its time. Let's look at another jQuery example. Consider this piece of HTML code:

<ul class="horizontal_list">
    <li class="one">Home<li>
    <li class="two">About Us</li>
    <li class="three">Contact Us</li>
</ul>
We now use jQuery to make two background color changes; the Home menu item red and Contact Us light blue. Here is the jQuery chained expression that will accomplish this:

$("ul.horizontal_list")
  .find(".one").css("background-color", "red").end()
  .find(".three").css("background-color", "lightblue");
  
Home
About Us
Contact Us
First, the jQuery selector returns the entire ul element with class="horizontal_list". Next the find() method locates the item with class "one" within the ul element and the subsequent css() method sets its background color to red. The end() method tells the object to return to its initial state i.e. go back to the ul before the second find() is invoked. The second find() then searches for the item with class "three" inside the ul element and the next css() method turns its background to light blue. The outcome is that the Home and Contact Us items of the horizontal_ list have colored backgrounds.

These examples clearly show the benefits of chaining. First, there is no need to store the return value of a previous method in a temporary variable. Second, it lets you perform multiple complex operations in a single concise, easy-to-read expression. And third, performance is better. This technique can be very beneficial in your own JavaScript projects.

A disadvantage of chaining is that it may be difficult to debug; in case of an error you have no idea which method in the chain failed.

To learn more about chaining, including details on how to implement methods that support chaining, we suggest you consult our Dofactory JS product. To learn more click here.

Closures
#
Unlike most object-oriented programming languages, JavaScript does not support access modifiers such as, private, protected, and public to specify the accessibility of properties and methods in objects. In JavaScript, all object members are public. In the following example, both the author property and the getAuthor() method are public and therefore can be accessed from anywhere in the program.

 copy
var book = {
    author: "James Joyce",
    getAuthor: function () {
        return this.author;
    }
};

console.log(book.author);       // => James Joyce  (public property)
console.log(book.getAuthor());  // => James Joyce  (public method) 
You may think that this is because we are using an object literal to create the book instance. However, creating an instance using a Book constructor function will also result in public properties and public methods as the following example demonstrates.

 copy
function Book() {
    this.author = "James Joyce";
    this.getAuthor = function () {
        return this.author;
    }
}

var book = new Book();

console.log(book.author);       // => James Joyce   (public property)
console.log(book.getAuthor());  // => James Joyce   (public method)
With object members being so exposed, is there perhaps a way to protect these in JavaScript? The answer is yes, by using function closures.

Going back to the Book example, the objective is to keep the author data private without exposing it to the outside world. The way to do this is to define an author variable within the function. The functions closure ensures that it is only accessible within the function's scope. So, instead of assigning author to this, you create a local variable called author.

 copy
function Book() {
    var author = "James Joyce";      // private
    this.getAuthor = function () {   // privileged 
        return author;
    }
}

var book = new Book();

console.log(book.author);             // => undefined (i.e. private)
console.log(book.getAuthor());        // => "James Joyce" 
Closure is an important and powerful concept in JavaScript. Here it allows us to keep author private. The getAuthor() method is called a privileged method because it has access to the private author variable and is itself accessible to the outside world as a public method on the book instance.

Object Literals
#
You can achieve the same privacy level by using an anonymous immediate function. An immediate function is wrapped in brackets and executes immediately. The example below demonstrates enclosure with an immediate function. The function's closure maintains the value of author. Furthermore, notice that the book object is created with object literal notation.

 copy
var book;                         // public object declaration

(function () {                    // anonymous immediate function 
    var author = "James Joyce";   // private member
    book = {
        getAuthor: function () {   // privileged method 
            return author;
        }
    };
}());

console.log(book.author);        // => undefined    (author is private)
console.log(book.getAuthor());   // => James Joyce  (privileged method)
Similar to the earlier example, the getAuthor() method is also privileged with privileged access to the local private variable author.

Anonymous immediate functions are frequently used in modern JavaScript applications and are also used extensively in our Dofactory JS. Click here to learn more.

Sharing private members
#
Suppose you have a variable that is common to all object instances, but you want to keep that private. In other languages you would create a static variable. Unfortunately, JavaScript does not support static or class variables.

You can obtain similar results in JavaScript by adding the common (i.e. shared) members to the prototype property of the constructor. In the example below, the label variable is shared among all the object instances created using the Book() constructor function. The label property is only accessible through the getLabel() prototype method.

 copy
function Book(author) {
    var author = author;          // private instance variable 
    this.getAuthor = function () {
        return author;             // privileged instance method
    };
}

Book.prototype = (function () {
    var label = "Author: ";       // private prototype variable
    return {
        getLabel: function () {   // privileged prototype method
            return label;
        }
    };
}());

var book1 = new Book('James Joyce');
console.log(book1.getLabel() + book1.getAuthor()); // => Author: James Joyce

var book2 = new Book('Virginia Woolf');
console.log(book2.getLabel() + book2.getAuthor()); // => Author: Virginia Woolf
Prototype functions are shared by all object instances. They are often used because it removes the need to create a function for each instance which saves memory and performs better. It is important to note that prototype functions have only access to prototype variables and not to private variables, such as the author variable in the example above.

Privacy
#
In the example above, the private variable author is a string. However, if author was an object, then the getAuthor method would return it by reference to the outside world (remember that primitive variables are passed by value and objects are passed by reference). Directly returning a private object reference from a privileged method essentially cancels privacy. Anyone can now make changes to the author object. Let's look at an example.

 copy
function Book(author, price) {
    var details = {
        "author": author,
        "price": price
    };
    this.getDetails = function () {     // anti pattern 
        return details;                 // returns reference to details
    };
}

var book = new Book("James Joyce", "29.50");
var bookDetails = book.getDetails();

bookDetails.author = "Jane Austen";     // modifies private data 
bookDetails.price = "99.95";

console.log(book.getDetails().author);        // => Jane Austen
console.log(book.getDetails().price);         // => 99.95
Although the details variable is private, the method getDetails() passes it by reference to the code outside the object. Therefore it is exposed to modification by clients of the Book which is shown in the last four statements in which both the author and price are updated.

One possible solution would be to clone the details object in the getAuthor() method and then return the clone. Alternatively you could return a new object that contains only those properties of the details object that the outside code is interested in and return it.






JavaScript Arrays
A JavaScript Array is a data structure that contains a group of elements. Typically these elements are all of the same data type, such as integer, string, or object. An example is an array with 7 string elements, each one representing a day of the week (‘monday‘, ‘tuesday‘, etc.).

JavaScript Tutorial
Creating Arrays
#
Creating arrays in JavaScript is easy with the array literal notation. It consists of two square brackets that wrap optional array elements separated by a comma. Array elements can be any type, including number, string, boolean, null, undefined, object, function, regular expression and other arrays. Here are some examples:


// empty array with no elements
var empty = [];   
                    
// array with 2 string elements
var days = ["Sunday", "Monday"];   
   
// array with elements of different types
var mixed = [false, 2.70, "Hello"];   

// elements can be arbitrary expressions
var suffix = "tree";
var trees = ["Oak" + suffix, "Elm" + suffix];  

// 2 dimensional array with object literals
var array2 = [[1,{x:1, y:2}], [2, {x:3, y:4}]];  
  
// the 3rd element is undefined
var colors = ["Red", "Green", undefined];   
 
// no value in the 1st element, it is undefined
var hobbies = [,"Art"];   

           
Accessing Array Items
#
JavaScript arrays are a special type of object. To access an array item, the [] operator is used, for example colors[2]. The [] operator converts the expression inside the square brackets to a string. For instance, if it is a numeric value, JavaScript converts it to a string and then uses that string as the property name, similar to the square bracket notation of objects to access their properties. This explains why JavaScript arrays are not nearly as fast as arrays in other languages.

In the next example, 0, 1, and 2 are converted to "0", "1", and "2" respectively:

var days = ["Sunday", "Monday"]; // an array with 2 elements
var firstDay = days[0];          // index 0 is converted to "0"

days[1] = "Ford"; 
days[2] = "Tuesday";             // writes element 3
Since an array is a subclass of object, there is nothing to stop you from adding properties on an array instance:

 copy
var cars = ["Toyota"];
cars["tires"] = 4;

console.log(cars["tires"]);            // => 4
Array Length
#
Before reviewing iterating over an array we need to understand how to determine how many elements there are in an array. The closest we can get is JavaScript's length property.

JavaScript automatically keeps track of the length property that exists on each array. Unlike other languages, the length of a JavaScript array does not hold the array's upper bound.

 copy
var days = ["Sunday", "Monday"];

console.log(days.length);        // => 2

var cars = [];
cars[1] = "Honda";
cars[3] = "Fiat";

console.log(cars.length);        // =>  4
In this example, the length property of the cars array is greater than the number of elements. The value length is 4, but the actual number of array elements is just 2. So, how does this work? The rule with length is that it is the last numerical index plus one. An array with gaps in its elements is called a sparse array.

Here is another unusual case: an element with the key six is added to the above script, but is ignored by the length property.

 copy
var cars = [];
cars[1] = "Honda";
cars[3] = "Fiat";

cars["six"] = "Volkswagen";
console.log(cars.length);        // => still returns 4
These examples also demonstrate that JavaScript arrays are dynamically sized, meaning that you will never see array out-of-bound errors.

Iterating Array Elements
#
With an irregular array how do we iterate over all its elements? Let's first consider using for loops.

 copy
var cars = [];
cars[1] = "Ford";
cars[3] = "BMW";
cars["six"] = "Honda";

for (var i = 0; i < cars.length; i++) {
    console.log(cars[i]);     // => undefined, Ford, undefined, BMW
}

// To skip missing and undefined elements, add this condition.
for (var i = 0; i < cars.length; i++) {
    if (cars[i] === undefined)      // skip undefined elements
        continue;
    console.log(cars[i]);          //  => Ford, BMW
}
Notice that the array element with key six won't appear when iterating using a for-loop.

To see all index values we need to use a for-in loop, like so:

 copy
var cars = [];
cars[1] = "Ford";
cars[3] = "BMW";
cars["six"] = "Honda";

for (var index in cars) {
    console.log(cars[index]);        // Ford, BMW, Honda
}
There are a couple of things to be aware of when using a for-in loop on arrays. First, if you are expecting the elements of your array to appear in numerical order, don't trust the for-in loop. They can appear in any order. Secondly, the for-in loop not only returns all array properties (elements), but it also returns the properties that are inherited through the prototype chain.

With both the length property and the for-in loop being somewhat peculiar, it is best to always use numeric index values starting with 0 going up. In that case arrays will behave similar to most other languages and the length property as well as the for-loop will work as you would expect. Here is an example:

 copy
var cars = [];
cars[0] = "Ford";
cars[1] = "BMW";
cars[2] = "Honda";

console.log(cars.length);       // => 3

for (var i = 0, len = cars.length; i < len; i++) {
    console.log(cars[i]);       // => Ford, BMW, Honda
}
Multi-Dimensional Arrays
#
JavaScript does not natively support arrays of more than one dimension; you have to create them yourselves. Fortunately, they are easy to model with arrays of arrays. In the next example we create a 5 by 5 identity matrix with a value of 1 on diagonal elements and 0 everywhere else.

 copy
var twoDim = [];

for (var row = 0; row < 5; row++) {
    var oneDim = [];
    for (var col = 0; col < 5; col++) {
        oneDim[col] = (row === col) ? 1 : 0;  // 0 or 1 (diag)
    }
    twoDim[row] = oneDim;
}

console.log(twoDim[4][2]);              // => 0
console.log(twoDim[3][3]);              // => 1
The last two statements also demonstrate how you would access elements in a 2-dimensional array: simply use the [] operator twice, the first for the row and second for the column index.

Deleting Elements
#
To remove an element from an array you can use the delete operator. Deleting an element does not affect the length property and the array becomes sparse. Also, elements with higher indexes to the right of the deleted element do not get shifted down to fill in the gap.

 copy
var days = ["Sunday", "Monday", "Tuesday", "Wednesday"];
delete days[2];              // => delete the element at index 2

console.log(days[2]);        // => undefined
console.log(days.length);    // => still 4
An alternative to delete is the built-in array method splice(). The difference with the delete operator is that splice() does not make the array sparse and shifts the elements to higher or lower positions as necessary making sure that no gap is left. This is discussed in the next section.

splice()
#
The built-in array method splice() is rather versatile and inserts new, deletes existing, and replaces existing elements with new elements in the array. The beauty of splice() is that it does not leave the array sparse because it will shift the elements to higher or lower positions as necessary; there will be no gap left.

The first argument of splice() specifies the ordinal position at which the operation is to start. The required second argument specifies the number of elements to delete. The method operates on the array at hand and the return value consists of the array elements deleted.

In the following example the first splice indicates to begin the operation at index 5 and length 2. When the operation completes, the elements f and g have been removed. The second splice indicates a starting position of 2 and length 1. After the operation completes, the letters array has these elements left: a, b, e.

 copy
var letters = ["a", "b", "c", "d", "e", "f", "g"];

console.log(letters.splice(5, 2));    // => f, g (deleted elements)
console.log(letters);                 // => a, b, c, d, e
console.log(letters.splice(2, 1));    // => c  (the deleted element)
console.log(letters);                 // => a, b, d, e
Using the third argument and higher, the splice method can also be used to replace one or more elements with others. In the example below, the splice starts at position 1 and deletes two elements. Next it replaces the gap with the three elements provided: e, f, g. The final array has 5 elements.

 copy
var letters = ["a", "b", "c", "d"];

console.log(letters.splice(1, 2, "e", "f", "g"));  // => b, c (deleted ones) 
console.log(letters);                              // => a, e, f, g, d
You can also use splice() to inject new elements into an array without deleting existing ones. Simply specify a 0 for the second argument, like so:

 copy
var letters = ["a", "b", "e"];

console.log(letters.splice(2, 0, "c", "d"));   // => no elements returned
console.log(letters);                          // => a,b,c,d,e
push(), pop()
#
The built-in push() array method appends one or more elements to the end of an array, increments the length as appropriate, and returns the length of the modified array. The built-in pop() array method does the opposite; it deletes the last element, reduces the length by one, and returns the deleted element.

 copy
var days = ["Monday"];

console.log(days.push("Tuesday", "Wednesday"));   // => 3
console.log(days);                                // => Monday, Tuesday, Wednesday
console.log(days.pop());                          // => Wednesday
console.log(days);                                // => Monday, Tuesday
console.log(days.push("Wednesday"));              // => 3
console.log(days);                               // => Monday, Tuesday, Wednesday
This code shows that the array methods push() and pop() make it very easy to build a LIFO (last in, first out) stack with JavaScript arrays.

unshift(), shift()
#
The built-in array method unshift() inserts one or more elements to the beginning of an array, shifts the existing elements up to higher indexes to make space for the new elements, increments the length by the number of elements inserted, and returns the new length. The shift() removes the first element, shifts all the elements with higher indexes down one position to fill the gap, reduces the length by one, and returns value of the element that it removed.

 copy
var days = ["Wednesday"];

console.log(days.unshift("Monday", "Tuesday"));   // => 3
console.log(days)                         // => Monday, Tuesday, Wednesday
console.log(days.shift());                // => Monday
console.log(days.shift());                // => Tuesday
console.log(days);                        // => Wednesday
As you can see, the unshift() and shift() methods make it very easy to build a FIFO (first in, first out) queue with JavaScript arrays.

map()
#
The array method map() is used to change each element in the array and return a new array with the modified elements. For example, you could use map to iterate over an array with numbers and then create a new array in which each element is double the value of the original array. The array returned is of the same length as the original array.

Here's how map() works. Each element of the array on which map() is invoked is passed to a callback function you pass into to map() as an argument. The values returned by the callback are returned in a new array, which is called double in our example below. The original array with the name values on which map() is invoked, is not modified. Since an array is an object, you can also add function methods directly in an array itself.

 copy
var values = [1, 2, 3, 4, 5];
console.log(values.length);        // => 5

var double = values.map(function (value) {
    return 2 * value;
});

console.log(double);               // => 2, 4, 6, 8, 10
console.log(double.length);        // => 5
As you can see, both arrays have the same length. If the values array were a sparse array with missing values, then the double array would also be sparse with gaps in the elements. Both would still be of the same length.

reduce()
#
Array method reduce() is an accumulator method that iterates over the elements of the array, from left to right, and reduce it to a single value.

The first argument in reduce() is the callback function and the second optional argument is the initial value. The callback function accepts 4 arguments, of which the first 2 are the previous value and the current value. This is best explained with an example.

Say we have a numeric array and we wish to get the sum of all elements. This is how you would do it with reduce():

 copy
var values = [2, 4, 6];

var sum = values.reduce(function (prev, curr) {
    return prev + curr;
    },
    0            // initial value
);

console.log(sum);       // => 12
When the first callback call is made, the arguments passed to the callback function are 0 (the initial value and second argument to reduce() and 2 (the first element of the array). The function returns 0 + 2 = 2. In the second call, the 2 and 4 are passed and 2 + 4 = 6 is returned. In the last call, 6 and 6 are passed and the final result 12 is returned.

The second argument to reduce() is optional. Had you omitted the 0 in the example above, the first and second elements of the array would have been passed to the function, which also works.






JavaScript Functions
A JavaScript Function is a block of JavaScript code that performs a task or calculates a value. A function has a name and it usually takes in some input and returns an output. Functions are reusable and can be executed as many times as necessary.

JavaScript Tutorial
Declaring Functions
#
Functions, as reusable blocks of code, are fully supported in JavaScript. Here is an example of a simple function declaration:

 copy
function say(name) {
    console.log("Hello " + name);
}

say("Nico");           // => Hello Nico
The above function declaration starts with the keyword function. Next we have say, which is the function's name. Following the name is a comma-separated list of zero or more parameters enclosed by parentheses: (). In our example we have one parameter named name. These parameters behave like local variables inside the function body. The function body comprises a set of JavaScript statements enclosed by curly braces: {}. The body executes when the function is invoked by issueing its name followed by parenthesis (with possible arguments), like say("Nico");.

Function declarations can appear in the top-level JavaScript program itself, just like our say example. However, functions can also be nested within other functions, like so.

 copy
function hypotenuse(m, n) {        // outer function  
    function square(num) {         // inner function
        return num * num;
    }
    return Math.sqrt(square(m) + square(n));
}

console.log(hypotenuse(3, 4));     // => 5
The outer function hypotenuse contains an inner function square. The square function is visible only within the hypotenuse function body, that is, square has function scope only. The easiest way to look at square is as a private helper function to the outer function.

Function Expressions
#
The examples before are function declarations. However, JavaScript also supports function expressions in which functions are assigned to variables. Here is an example:

 copy
var area = function (radius) {
    return Math.PI * radius * radius;
};

console.log(area(5));         // => 78.5398..
This function is assigned to a variable named area. The function itself does not have a name, so this is an anonymous function. Function expressions are invoked by calling the variable name with a pair of parentheses containing any arguments (in our example: area(5));.

How do we distinguish a function declaration from a function expression? A ny time a function is a part of an assignment, it is treated as a function expression. Function declarations do not end with a semicolon, whereas function expressions do, as they are part of an assignment. Also, function declarations must always have a name whereas a function expression may or may not have a name, i.e. it can be named or anonymous.

Anonymous functions are commonly used in JavaScript. Our area function is an example of this. By the way: if you choose to give the function expression a name it is generally recommended you give it the same name as the variable it is assigned to; this will avoid confusion.

Function Hoisting
#
A JavaScript function can be invoked before its declaration. This works because the JavaScript engine implicitly hoists the function to the top so that they are visible throughout the program. In the example below, the function named course is parsed and evaluated before any other code is run.

 copy
function course() {        // hoisted to top of program    
    return "Learning JS";
}

console.log(course());     // => Learning JS
Variable Scope in Functions
#
A variable has global scope if it exists during the life of the program and is accessible from anywhere in the program. A variable has function scope if it is declared within a function and is not accessible outside of that function and will cease to exist when the function finishes execution.

With function scope, the parameters and variables that you define as part of a function are not available outside the function body; they are only visible within the function throughout the lifetime of the function. Here are some examples:

 copy
var num = 1;           // variable is global
function showGlobal() {
    console.log(num);  // uses the global num
}

showGlobal();          // => 1

function showLocal() {
    var num = 2;       // num is local, hides the global num 
    console.log(num);
}

showLocal();           // => 2

function showArgument(num) {
    console.log(num);  // arguments are locally scoped
}

showArgument(3);       // => 3
Unfortunately JavaScript does not support block-level scoping. A variable defined within a block, for instance an if- or a for-statement, will exist even after the block finishes execution. It will be available until the function in which the variable is declared finishes.

 copy
function noBlock() {
    if (true) {
        var width = 10;  // not block level scoped
    }
    console.log(width);  // variable num is available outside the if block
}

noBlock();               // => 10
JavaScript functions can be nested within other functions. A nested (inner) function can access the arguments and variables of the (outer) function it is nested within. The example below demonstrates this:

 copy
function verify(name) {             // outer function  
    function isJohn() {             // inner function
        return name === "John";     // full access to argument        
    }
    if (isJohn()) {
        console.log("Yep, this is John");
    }
}

verify("John");
The inner function isJohn has full access to the name argument of the outer function; there is no need to pass a parameter to the inner function.

Variable Scoping and Prototypes
#
What happens when a function has a property and its prototype has a property of the same name? Which one will be used? Let's run a test and find out:

 copy
function Counter(count) {
    this.count = count;           // object property
}

Counter.prototype.count = 2;      // prototype property

var counter = new Counter(6);
console.log(counter.count);       // => 6
This code demonstrates object properties take precedence over (i.e. hide) prototype properties of the same name.

Closures
#
Closures are an important and powerful concept in JavaScript. Simply put, a closure represents the variables of a function that are kept alive, even after the function returns. In almost all other languages when a function returns all local variables are destroyed and the program moves on, but not in JavaScript.

Many JavaScript programmers are familiar with the concept of holding a reference to a function with a variable (if not, see the discussion of function expressions before this section). Many other languages have similar concepts where they can reference functions through function pointers or delegates. However, in JavaScript when a variable holds a reference to a function it also maintains a second, but hidden, reference to its closure, which essentially are the local variables that were present at the time of creation and their current values. These variables are its scope context. Let's show this with an example (note that counter() is a regular function and not a constructor function):

 copy
function counter() {
    var index = 0;
    function increment() {
        index = index + 1;
        console.log(index);
        return index;
    }
    return increment;
}

var userIncrement = counter();    // a reference to inner increment()
var adminIncrement = counter();   // a reference to inner increment()

userIncrement();                  // => 1
userIncrement();                  // => 2
adminIncrement();                 // => 1
adminIncrement();                 // => 2
adminIncrement();                 // => 3
When the counter function is invoked, it returns a reference to the increment function. At the time counter finishes execution, JavaScript saves its scope, and only the function that it returns, in our example increment, has access to it. This is the function's closure and includes a copy of the variable index, which is 0 following the initialization. Subsequent calls to increment increments the index value. Note that userIncrement and adminIncrement each have their own closure with their own copy of the index variable that only they can work on.

Arguments are local to their functions, so they also become part of the closure context. Here is an example in which name is part of the closure.

 copy
function greetings(name) {
    function sayWelcome() {
        console.log("Welcome to " + name);
    }
    return sayWelcome;
}

var greet = greetings("New York");

greet();           // => Welcome to New York
greet();           // => Welcome to New York
greet();           // => Welcome to New York
Since all JavaScript functions are objects and they have a scope chain associated with them, they are, in fact, closures. Most commonly however, a closure is created when a nested function object is returned from the function within which it was defined.

The nested function closures are a powerful feature of JavaScript and they are commonly used in advanced applications. For instance, it is commonly used when declaring event callbacks. Many JavaScript libraries make use of closures. Our unique Dofactory JS demonstrates many advanced uses of JavaScript closures. To learn more click here.

Option Hash Pattern
#
Suppose you have a function that expects a large number of parameters, like this:

function createCompany(name, street, city, zip, state, type,  
                       taxId, currency, isActive, parentCompany) { 
    ...
}    
It would be difficult for the client of the function to recall all the parameters and put them in the correct order. When you invoke a function in JavaScript with an incorrect number or order of arguments you are not going to get an error. It just makes the missing variables undefined. So, it is easy to introduce bugs when calling functions that accepts a large number of parameters.

An nice solution to this kind of scenario is called the Options Hash pattern. Essentially, it is a function that accepts a single parameter which is an object that encapsulates all the parameters:

 copy
var parms = {
    name: "Levis",
    street: "1 Main Street",
    city: "Anyhwere",
    zip: "01010",
    state: "NY",
    type: "Garments",
    taxid: "983233-003",
    currency: "USD",
    isActive: true
};

function createCompany(parms) {
    var name = parms.name;
    var street = parms.street;
    var city = parms.city;
    console.log("State: " + parms.state);
    console.log("Currency: " + parms.currency);
    // ...
}

createCompany(parms);
The variable parms is a simple object literal. It allows the parameters to be added in any order. Also, optional parameters, such as parentCompany in the earlier code with the long parameter list, can be safely omitted. It is far easier to maintain a parameter object than a list of individual parameters and worry about passing them in correctly. By the way, this pattern also allows you to pass in more complex types, such as callback functions.

Our Dofactory JS has more to say about the Option Hash pattern, including a wonderfully elegant way to handle default and missing values. To learn more click here.

Immediate functions
#
Immediate functions execute as soon as JavaScript encounters them. These functions are a powerful concept that is frequently used in JavaScript. They are also referred to as self-invoking functions. First let's look at a normal function declaration. Clearly, it does not execute until it's invoked.

 copy
function print() {
    console.log('Learning JS!');
}

print();          // executes print function
JavaScript allows you to execute a function immediately by enclosing it with parentheses followed by another pair of parentheses, like so:

 copy
(function () {
    console.log("Learning JS!");
}());
The opening parenthesis before a function keyword tells the JavaScript to interpret the function keyword as a function expression. Without it, the interpreter treats it as a function declaration. The paired brackets () at the end is the argument list; in this case an empty list.

The example above is an anonymous function, that is, it has no name. There is no need for a name, because nowhere in the program will this function be called. It is called once, as soon as JavaScript encounters it.

You can also pass parameters to an immediate function.

 copy
(function square(value) {
    var result = value * value;
    console.log(result);
})(10);
Any variable you define in an immediate function, including the arguments passed, remains local to the function. By using these self-invoking functions, your global namespace won't be polluted with temporary variables.

Immediate functions offer great flexibility and are widely used in the most popular JavaScript frameworks, such as jQuery. Our accompanying Dofactory JS includes a great section on immediate functions and how JavaScript experts are using them to build robust and maintainable web apps. To learn more click here.

Next, we will look at an area where immediate functions can be useful: page initialization.

Web Page Initialization
#
Immediate functions are useful for initialization tasks that are needed only once. A good example is when a web page is loaded in which you initialize objects, assign event handlers, etc. Using an immediate function allows you to package and run this process in the local scope of the function without leaving a global trace behind; only local variables are created and no global variables are left behind. The example below simply displays a welcome message with today's day.

 copy
(function () {
    var days = ["Sunday", "Monday", "Tuesday", "Wednesday",
        "Thursday", "Friday", "Saturday"];

    var today = new Date();

    var message = "Welcome, today is " + days[today.getDay()];

    console.log(message);     // => Welcome, today is Monday
}());
This function executes once and there will be no trace left. If the above code were not wrapped in an immediate function, the variables days, today, and message would all end up on the global namespace, increasing the risk of name collisions. With the immediate function we have zero footprint on the global namespace.

call(), apply()
#
Functions in JavaScript have several built-in methods, two of which we will examine here; call() and apply(). This may sound strange, but remember that a function in JavaScript is an object so it has its own properties and its own methods. The methods call() and apply() allow you to invoke the function, giving you a lot of control over how the function executes. Consider the following code:

 copy
function message() {
    console.log(this.num);
}

message();        // => undefined, 'this' references global object

var obj = { num: 2 };

message.call(obj);        // => 2,  'this' references obj
message.apply(obj);       // => 2,  'this' references obj
The functions call and apply are very similar: the first argument passed is the same, which is the object on which the function is to be invoked. With this argument you essentially control what this is bound to inside the function body. This is a powerful concept, because what this implies is that any function can be invoked as a method of any object, even when it is not actually a method of that object. If you are familiar with .NET extension methods, then you'll immediately understand the concept.

An optional second argument to call() is a number of arguments to be passed to the function that is invoked. In apply() the optional second argument is the same, but specified as an array of arbitrary length. When you know the exact number of arguments use call(), otherwise use apply().

Here is another example of both methods in action.

 copy
var welcome = function (guest) {
    console.log("I'm " + this.name + ", you're " + guest.name);
};

var stan = { name: "Stan" };
var laurel = { name: "Laurel" };

welcome.call(stan, laurel);    // => I'm Stan, you're Laurel
welcome.call(laurel, stan);    // => I'm Laurel, you're Stan

welcome.apply(stan, [laurel]); // => I'm Stan, you're Laurel
welcome.apply(laurel, [stan]); // => I'm Laurel, you're Stan
The first call has stan bound to this and laurel as the guest. In the second call the roles are reversed. The apply methods are the same except that the guest argument is passed as an array.






JavaScript Function Objects
In JavaScript, functions are called Function Objects because they are objects. Just like objects, functions have properties and methods, they can be stored in a variable or an array, and be passed as arguments to other functions.

JavaScript Tutorial
Functions are First-Class Objects
#
As mentioned, functions are objects. You can work with functions as if they were objects. For example, you can assign functions to variables, to array elements, and to other objects. They can also be passed around as arguments to other functions or be returned from those functions. The only difference with objects is that functions can be called.

Let's run a small test and confirm that a function is indeed an object instance:

 copy
function message() {
    console.log("Greetings Linda!");
}

console.log(typeof message);               // => function
console.log(message instanceof Object);    // => true
We see that a function is indeed an object. JavaScript functions are a special type of objects, called function objects. A function object includes a string which holds the actual code -- the function body -- of the function. The code is literally just a string. Although not recommended, you can create a new function object by passing the built-in Function constructor a string of code, like so:

 copy
var body = "return Math.PI * radius * radius";
var circle = new Function("radius", body);

console.log(circle(5));          // => 78.5398..
You can also create a new function with a custom constructor function (remember that by convention a constructor function always starts with an upper-case letter). In the code below we have a Book constructor function that is used to create book instances. In the constructor function we are assigning a function object to the getDetails property.

 copy
function Book(type, author) {
    this.type = type;
    this.author = author;
    this.getDetails = function () {
        return this.type + " written by " + this.author;
    }
}

var book = new Book("Fiction", "Peter King");

console.log(book.getDetails());        // => Fiction written by Peter King
The Book constructor accepts an argument which is assigned to a property named type. Once an object is created, you can assign property values and invoke methods just like any other object.

Function objects can also be created as part of an object literal. Below we create an object named circle with a property named area which is a function object.

 copy
var circle = {
    radius: 10,
    area: function () {
        return Math.PI * this.radius * this.radius;
    }
};

console.log(circle.area());                // => 314.15..
console.log(typeof circle.area);           // => function
Next, let's look at an example where a function object is passed around like a regular object. The negate function takes a function as its argument. A new function is returned from the negate call that invokes the passed in function and returns the logical negation of its return value.

Following the function declaration we pass the built-in isNaN function to negate and assign the function returned to the isNumber variable. The variable isNumber is a function object that can be passed around like any object. To invoke the function you call it with different parameters.

 copy
function negate(f) {
    return function (i) {
        return !f(i);
    };
}

var isNumber = negate(isNaN);  // function object

console.log(isNumber(5));            // => true
console.log(isNumber(NaN));          // => false
console.log(isNumber("A"));          // => false
Here is another example using the same negate function. We added a custom function to test whether a number is prime or not (non-prime numbers are called composite). This function is passed to the negate function as an argument.

 copy
var isPrime = function (number) {     // determines if number is prime
    var divisor = parseInt(number / 2, 10);
    var prime = true;
    while (divisor > 1) {
        if (number % divisor === 0) {
            prime = false;
            divisor = 0;
        } else {
            divisor -= 1;
        }
    }
    return prime === true;
};

function negate(f) {
    return function (i) {
        return !f(i);
    };
}

var isComposite = negate(isPrime);       // function object

console.log([2, 4].every(isComposite));  // => false (2 is prime, 4 is not)
console.log([4, 6].every(isComposite));  // => true (4 or 6 are composite)
Note: the built-in Array.every() method tests whether all elements in the array pass the test implemented by the function that is passed as an argument; in our case the isComposite function object.

Function Copied by Reference
#
When you assign a function object to another variable JavaScript does not create a new copy of the function. Instead it makes the new variable reference the same function object as original. It is just that two variables having different names are accessing the same underlying function object.

 copy
function original() {
    // ...
}

original.message = "Hello";
var copy = original;

console.log(original.message);         // => Hello
console.log(copy.message);             // => Hello

copy.message = "Greetings";

console.log(original.message);         // => Greetings
console.log(copy.message);             // => Greetings
This example shows that if we add a property to the function object, then both variables, original and copy, will be changed because they are referencing the same function object. This confirms that function objects are indeed copied by reference.

Function Object Body
#
We just learned that function objects are copied by reference. However, when modifying the actual function body, things are a bit different because this will cause a new function object to be created. In the next example the original function body is changed and JavaScript will create a new function object.

 copy
function original() {
    console.log("I am Original");
}
var copy = original;

original();                  // => I am Original
copy();                      // => I am Original

original = function () {     // Modify the original code
    console.log("I am Altered");
};

original();                  // => I am Altered
copy();                      // => I am Original
Assigning a new function body to original will create a new function object. Note that the copy variable still references the old function object.

Passing a function as a Callback
#
Just like a regular object, you can pass a function object to another function (actually you've already seen this in action with the negate function example).

In the next example, two different functions, add and multiply, are passed as a parameter to the function action. Of course, only a reference to the function is passed. The functions add and multiply are called callbacks or more appropriately callback functions. The function action will call it back (i.e. invoke it) with the two argument values provided:

 copy
function action(callback, x, y) {
    var result = callback(x, y);
    console.log(result);
}

function add(x, y) {
    return x + y;
}

function multiply(x, y) {
    return x * y;
}

action(add, 2, 3);           // => 5
action(multiply, 2, 3);      // => 6
Callback functions play an important role in many frameworks, including JQuery. Consider the code below. The alert message executes well before the hide animation is complete, which is probably not what you want.

$("#blue").hide(2000);           
alert("Animation complete.."); // executes before animation is complete
  
This can be solved by passing in a callback function which will execute only when the animation is complete.

$("#red").hide(2000, function() {   
    alert("Animation complete.."); // executes after animation
});
  
So, instead of waiting for a function to complete you can utilize callbacks to execute it asynchronously. This is beneficial for tasks that take some time to complete, such as the above hide animation. Another example is when executing an AJAX operation and you don't want the user to wait for the call to come back. This allows the browser to continue to respond to user requests while waiting for the callback function to be called.

Asynchronous programming is an important skill to have when working with JavaScript. To learn more about callbacks and the important event loop we suggest you check our unique Dofactory JS where we explore these and other topics in much greater detail. Click here for more details.

Currying
#
In situations where a function is repeatedly called with mostly the same arguments, you may have a candidate for currying. To curry a function is essentially caching and reusing argument values.

A curried function uses a closure to cache the state of recurring arguments so that you don't need to pass them every time. The new function then uses them to pre-populate the entire list of arguments that the original function requires.

The input to the currying process is a function that accepts two or more arguments. It then transforms the function to produce a new function that offers the similar functionality but with partial (fewer than the original) arguments. It binds the rest of the arguments to fixed values.

Let's look at an example. The function name accepts two arguments for first name and last name: first and last. It concatenates them to generate the person's name.

 copy
function name(first, last) {
    return first + " " + last;
}

console.log(name("Joni", "Mitchell"));
Next, we create a curried version of the same function. If we pass two arguments it executes normally, just like the example above. If, however, we only pass the first argument, then an another function is returned with its closure which holds the first value. The returned function accepts a partial list of arguments, in our example, just one argument which is last because it already knows what the first value is. Again, it performs the same job as name, but the value of first is remembered in the closure associated with the anonymous helper function that is returned.

 copy
function name(first, last) {
    if (typeof last === 'undefined') {
        return function (last) {          // curry function, creates a closure
            return first + " " + last;
        };
    }
    return first + " " + last;
}

console.log(name("Joni", "Mitchell"));    // => Joni Mitchell

var partialName = name("Joni");

console.log(partialName("Mitchell"));     // => Joni Mitchell
console.log(partialName("McNamara"));     // => Joni McNamara
In JavaScript, a function needs a helper function to achieve currying. This helper function is commonly referred to as the curry function.

There is a generic implementation of currying that can be applied to any function and the code below demonstrates this. It creates a closure that stores both the original function and the arguments to curry. Then, when called again, it concatenates the incoming arguments with the prior array of arguments and executes the original function. One array holds the arguments passed to the current invocation and the other array holds the arguments passed to the curry function. The concatenated array is then passed to the original function.

 copy
Function.prototype.curry = function () {
    var f = this;
    var curryArgs = Array.prototype.slice.call(arguments);

    // Return a function that returns the result 
    // of invoking the original function
    return function () {
        return f.apply(this, curryArgs.concat(
            Array.prototype.slice.call(arguments)));
    };
};

function show(message) {
    console.log(message);
}

var joke = show.curry("Two friends walk into a bar...");

joke();       // Two friends walk into a bar..
joke();       // Two friends walk into a bar..
joke();       // Two friends walk into a bar..
bind()
#
All JavaScript functions have a method called bind that binds to an object and returns a new function. The first argument to bind sets the this context of the function.

 copy
function area(height) {
    return this.width * height;
}

var obj = { width: 5 };
var bound = area.bind(obj);

console.log(bound(4));             // => 20
Calling bound(4); invokes the original function area as a method of obj, like obj.area(4);. The argument you pass to bound is passed as the height argument to the function area.

In addition to binding a function to an object, EcmaScript 5 supports a bind method that brings native currying to JavaScript. You no longer need to use a curry helper function. The arbitrary number of arguments that you pass to bind are also bound.

 copy
function add(x, y, z) {
    return x + y + z;
}

var partial = add.bind(null, 1, 2);

var result = partial(3);          // pass 3 for the z argument 

console.log(result);              // => 6
This creates a new function called partial. The this value is bound to null, i.e. the global object, and the x and y arguments are bound to 1 and 2 respectively. Calling partial with the argument value 3 binds this value to x and then executes the add function without the need to write a curry function.

Next, let's look at a practical application of currying in the area of unit conversions:

 copy
function unitConversion(toUnit, factor, offset, input) {
    offset = offset || 0;
    return [((offset + input) * factor).toFixed(2), toUnit].join(" ");
}

var meterToKm = unitConversion.bind(null, 'km', 0.001, 0);
var kgToGram = unitConversion.bind(null, 'grams', 1000, 0);

console.log(kgToGram(3.7));                 // => 3700 grams
console.log(meterToKm(2000));               // => 2 km
The unitConversion function performs the actual unit conversion computations. Look at bind and, again, the null argument refers to the global object to be used as this. The next three arguments are bound to toUnit, factor, and offset respectively. These bindings are stored and maintained in the closure that is associated with the meterToKm and kgToGram function objects. In the last two lines we call each function with a value which is then bound to the input variable and the original unitConversion function is called returning the desired results.

Caching
#
Suppose you are building a car racing game in JavaScript and you need to keep track of the total number of car objects that have been instantiated. In Java, you would use the static keyword for this, but JavaScript does not offer such functionality out-of-the-box.

Of course, you could simply store this piece of data in a global variable but this would add unnecessary variables to the global namespace. A better solution is to store this information in a property of a function object. Let's call the function carCount and use it to memorize the next value to be returned. Then the function would be able to return a different value each time it is invoked.

 copy
function carCount() {
    var count = 0;
    var increment = function () {
        return ++count;
    }
    return increment;
}

console.log(carCount());    // => 1
console.log(carCount());    // => 2
console.log(carCount());    // => 3
console.log(carCount());    // => 4
In functional programming, caching the results of a function call is referred to as memoization. Let's explore this in a little more detail.

Memoization
#
Memoization is an optimization technique that is used to improve the performance of a function by caching its return values so that it does not need to redo the potentially heavy computations next time it is called.

Not all functions can be memoized; only referential transparent functions. A referential transparent function is one that always produces the same output on a given input. For instance, if you invoke a function with a value x passed to it, it will perform calculations on x and always returns the same associated y value.

Good examples of where memoization can be beneficial are HTML5 Canvas animations and recursive mathematical calculations, such as, factorial computation, generating Fibonacci sequences, and matrix chain multiplications.

Let's look at how memoization can be used to improve computing the Fibonacci numbers. The recursive approach to generating these numbers does not scale very well. In the example below the getFibonacci function is recursively called 177 times to generate the sum of the first 10 Fibonacci numbers:

 copy
function getFibonacci(num) {
    if (num < 2) {
        return num;
    }
    return getFibonacci(num - 1) + getFibonacci(num - 2);
}

console.log(getFibonacci(10));     // => 55   (with 177 iterations)
The program does a lot of extra work by not keeping track of previously calculated values. This is where memoization comes in. First, declare a cache array where you can store the already-calculated function values that were returned in previous calls. Then, instead of invoking the function, return these values in subsequent calls to the function, like so:

 copy
function getFibonacci(num) {
    var cache = [];
    var fib = function (value) {
        if (value < 2) return value;
        if (cache[value]) return cache[value];

        cache[value] = (fib(value - 1)) + (fib(value - 2));
        return cache[value];
    };
    return fib(num);
}

console.log(getFibonacci(10));     // => 55   (with 20 iterations)
To generate the first 10 Fibonacci numbers, this function is recursively executed 20 times only. A significant improvement.





JavaScript JSON
JSON stands for JavaScript Object Notation. It is an open, text-based format designed for lightweight data exchange between different systems.

JavaScript Tutorial
What is JSON
#
JSON is a subset of JavaScript's object literal notation representing simple data structures and objects. The array elements and object member values in JSON are limited to numbers, strings, Boolean values, objects, arrays, and null. This is different from JavaScript object literals where values of array elements and object members can be any JavaScript expression, including function definitions.

The beauty of JSON standard lies in its simplicity and the fact that it is very compact. Let's look at an example. Here we have the JSON representation of a student object.

{
   "firstName": "Kim", 
   "lastName": "Taylor",
   "studentCode": 7
}
JSON objects can be nested. Below is a student including its image, which is an object itself:

{
   "firstName": "Kim", 
   "lastName": "Taylor",
   "studentCode": 7,
   "image":
    {
        "url": "images/007.jpg",
        "width": 150,
        "height": 150
    }
}
A JSON-formatted string always has a single top-level item which is either an object, with curly braces {}, or an array, with square brackets []. The earlier examples are objects. The next example shows an array with three elements:

[
    "Red", 
    "Green",
    "Blue"
]
The elements in a JSON array can be of different type. Here is an example of an array with four elements, each one of a different data type:

[
    "Blue",              // string
    {                    // object
      "id": "001",
      "name": "IBM"
    },
    2.4,                 // number
    True                 // boolean 
]
JSON doesn't natively represent complex data types like functions, date, and time. To represent date and time values, you can either use an ISO-formatted string or a number (number of milliseconds in UTC since January 1, 1970). Note that these are just conventions: JSON standard does not dictate rules for encoding date and time values.

Although JSON is a subset of the standard JavaScript object notation, it is a language-independent data format. JSON parsers that parse and generate JSON data are readily available for most programming languages. Visit www.json.org and you will find a broad range of available JSON libraries.

JSON maps very well to data structures that most programming languages support. A JSON object is an unordered collection of name-value pairs which easily maps to associative arrays (such as Dictionary, Map, and Hash) in other languages. Similarly, a JSON array is an ordered list of values which nicely maps to any programming language's array or list types.

Because of these characteristics, JSON is ideal as a data exchange format between disparate applications. There are few if any parsing complexities. It is very easy, for example, to convert a C# object to JSON and then pass it to a Python or JavaScript application.

JSON is widely used for serializing and sending structured data over a network, essentially replacing XML. Most commonly, JSON is used in Ajax communications between a server and the web browser. JSON-formatted data is lightweight and JavaScript can parse it very easily making it ideal for Ajax-style web applications. The data that is transmitted is encoded as JSON objects, and those JSON objects can be transformed with little effort into true JavaScript objects on the browser.

XML versus JSON
#
XML has lost ground to JSON as the most popular data exchange format. In XML there is no concept of data types. All element values are strings. To add type information, you have to apply the XML Schema typing layer on the top of XML. This adds complexity to your application when you read the values within the XML code. JSON objects provide structure to your data and their values are typed as numbers, strings, boolean values (true and false), null, nested objects, or arrays. In XML, arrays and objects have to be represented by convention while JSON supports them natively.

JSON also has a clear edge over XML when it comes to parsing data in JavaScript. With XML, data is parsed manually requiring code that transforms parsed text into JavaScript objects. On the other hand, with JSON you can immediately transform JSON-formatted data into JavaScript objects using the JSON.parse() method. Parsing JSON-formatted data is very fast because it is done by the JavaScript engine itself.

While XML parsers are available in all modern browsers, you have to be very careful with cross-browser differences. How you create the DOM that will load the XML depends on which browser you are using. On the other hand, JSON is very well supported by all browsers.

Here is a comparison of a student record formatted as XML and as JSON.

 XML FORMAT	 JSON FORMAT
<student>
<firstName>Kim</firstName>
<lastName>Taylor<lastName>
<studentCode>7<studentCode>
</student>	{
    "firstName": "Kim",
    "lastName": "Taylor",
    "studentCode" : 7
}
As you can see, the XML is larger than JSON. XML documents tend to be lengthy because of the presence of both start and end tags and namespaces. JSON, on the other hand, is lightweight and its syntax is rather terse. When sending a large amount of data over a network, JSON is preferred as this will significantly improve performance.

Furthermore, XML has a bit of a learning curve because it is typically used in conjunction with other technologies, including XML Schema, XPath, XSLT, etc. JSON, on the other hand, is easy to learn especially for developers that have a background in JavaScript.

An advantage of XML is that it provides native support for namespaces which reduces the risk of ambiguity when merging documents from different sources. JSON has no notion of namespaces and hence poor extensibility. A possible workaround to prevent naming collisions is to prefix object member names with a context.

JSON Parser
#
Instead of employing a third-party JSON parser library, the JavaScript engine can itself be used to process the JSON-formatted data and convert it to native JavaScript objects. As you know, JavaScript has an eval() function that is designed to evaluate a JavaScript expression and return its value. Since JSON is mostly syntactically correct and valid JavaScript code, an effortless approach to execute JSON data would be to use eval().

However, eval() is not recommended because your application would expose itself to all sorts of security vulnerabilities. Even if the source is trusted, a security breach at the trusted source's end could cause a code injection attack in your application. So, eval() should be avoided.

The recommended solution is to use a JavaScript-based JSON parser library in your client code which essentially is a wrapper around eval(). Before the parser evaluates, it validates the input string as JSON and makes sure that it does not contain arbitrary executable JavaScript code thereby preventing potentially malicious code from getting executed.

As a secure alternative to eval(), EcmaScript5 provides the native JSON.parse() which is exclusively meant to parse JSON data and not JavaScript. It is supported by most web modern browsers. Alternatively, you can use json.js, or better, json2.js (downloadable from https://github.com/douglascrockford/JSON-js) which minified is just 2.5K. The JSON.parse() method first validates the JSON-formatted text string and then converts it into a JavaScript object.

JSON.parse()
#
Here is an example of JSON.parse() in action.

 copy
var json = '{ "firstName":"Kim", "lastName":"Taylor", "studentCode":7 }';
var student = JSON.parse(json);

console.log(student.firstName + " " + student.lastName);   // => Kim Taylor
The optional reviver argument to JSON.parse() is a function that filters and transforms the results . It accepts two arguments, key and value. The reviver is invoked with each of the key-value pairs generated by the parse, and its return value is used instead of the original value. If the reviver returns what it received, the structure is not modified. If the reviver returns null or undefined, the property is deleted from the result. In the example below reviver transforms all date strings to date objects (and transforms these from Greenwich Mean Time (Zulu time) to local time in the browser's time zone.

 copy
function reviver(key, value) {
    var num = Date.parse(value);
    if (num) {
        return new Date(num);
    }
    return value;
}

var json = '{ "firstName":"Kim", "registrationDate" : "2012-05-20T11:20:00.000Z" }';
var student = JSON.parse(json, reviver);

console.log(student.registrationDate);    // => Sun May 20 06:20:00 CDT 2012
JSON.stringify()
#
The JSON.stringify() method does the reverse of JSON.parse() and converts a JavaScript object into a JSON-formatted string. The optional replacer argument to JSON.stringify() is a function filters and transform the way a value is stringified. It accepts two arguments, key and value. In the example below, the properties with scores less than 40 are filtered out:

 copy
var scores = { "Java": 70, "JavaScript": 80, "C#": 30 };

var passed = JSON.stringify(scores, function (key, value) {
    if (value < 40) {
        return undefined;
    } else {
        return value;
    }
});

console.log(passed);   // {"Java":70,"JavaScript":80}
JSON with Ajax
#
JSON is frequently used with Ajax. The example below demonstrates a common situation of converting a JavaScript object to JSON, using JSON.stringify(), and then sending it to the server using Ajax. It also demonstrates the reverse of receiving a JSON-formatted response from the server and converting it into a JavaScript object by using JSON.parse().


// Get the browser specific XmlHttpRequest
function createXHRObject() {
    if (window.ActiveXObject) { // IE
       return new ActiveXObject("Microsoft.XMLHTTP");
    }  else if (window.XMLHttpRequest) {
       return new XMLHttpRequest();
    }
}

function getStudentScore() {
    var student = new Student("Kim","Taylor", "JavaScript Training");
    var json = JSON.stringify(student);
    var xmlHttp = createXHRObject();

    // open the connection to the web server with the 
    // XMLHttpRequest object.  score.php is the web server's 
    // page from where we will get the JSON response
    xmlHttp.open("POST", "score.php", true);

    // stores the name of a function to be called 
    // automatically each time the readyState property changes
    xmlHttp.onreadystatechange = handleServerResponse;

    // send the header information along with the request
    xmlHttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xmlHttp.setRequestHeader("Content-length", json.length);
    xmlHttp.setRequestHeader("Connection", "close");
    
    // send the JSON-encoded Student object to the server 
    // using the XMLHttpRequest object
    xmlHttp.send(json);
}

function handleServerResponse() {
    // readyState holds the status of the XMLHttpRequest.
    // 4 means the request is finished and response is ready.
    if (xmlHttp.readyState == 4) {
        if (xmlHttp.status == 200) {  // 200 indicates okay
          // Deserializing JSON text into the JavaScript object
          var studentScore = JSON.parse(xmlHttp.responseText);
          // do something with it ...
        }
    }  else if (xmlHttp.status == 400) { // 400 indicates file not found
       //report error
    }
}
As far as the Ajax part is concerned most web sites will use a library such as j Query and let it handle browser differences. Using jQuery significantly reduces the size of the code as demonstrated below:


function getStudentScore() {
    var student = new Student("Kim","Taylor", "JavaScript Training");
    var json = JSON.stringify(student);

    $.post("score.php", json, function (data) {
        var studentScore = JSON.parse(data);
        // do something with it ...
    }, "json" ); 
}






JavaScript Regular Expressions
JavaScript Regular Expressions provide a powerful way to perform pattern matching on certain characters within strings of text. They offer a concise syntax to carry out complex tasks that otherwise would require lengthy code.

JavaScript Tutorial
Regular Expressions in JavaScript
#
Here is an example of a regular expression:

var regex = /^\d{2}$/;
A regular expression literal is specified in the form /pattern/modifiers, where "pattern" is the regular expression itself and the optional "modifiers" section specifies various options. The pattern portion above starts with an ^ indicating the beginning of a string. The \d indicates a digit followed by {2} meaning 2 consecutive digits. The $ indicates end of a string. So, this pattern will attempt to find exactly 2 consecutive digits from the beginning to the end of a string.

In the next example we apply the pattern to the string "29". As expected it will find a match, whereas if we try this pattern against the string "3g8" it will not (please note that the test() method will be explained later in this section).

 copy
var regex = /^\d{2}$/;
var str1 = "29";

console.log(regex.test(str1));     // => true   

var str2 = "3g8";

console.log(regex.test(str2));     // => false  
You can add 3 possible modifiers to the regular expression: case-sensitivity (i), global searches (g), and multiline mode (m). These modifiers influence how the string is parsed. You can combine these by stringing them together, like so: /pattern/gim.

Let's look at the actual pattern in some more detail. A pattern can be simple or very complex. For example matching the string "Facebook" is as simple as /Facebook/, but matching emails, XML, or HTML tags can be rather complex. For example, an email pattern in which you test whether an input string is a valid email may look like this: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.

Regular expressions can be used for parsing, substitution, and format checking. They are often used in form validation, for example to validate an email or social security number. JavaScript's String type has 4 built-in methods: search(), replace(), split(), and match(), all of which accept regular expressions as an argument to help them perform their respective operations.

When searching in a given string, you can specify the pattern you're looking for. Below we search for the first instance of a lower-case character [a-z] followed by one or more digits [0-9]+.

 copy
var str = "James Bond007";
var regex = /[a-z][0-9]+/;

console.log(str.search(regex));   // => 9. the position of 'd' 
The next expression parses the string, removes all the digits [\d] from it, and returns the remaining string. Note that the g is a global modifier which means find all matches and don't stop after the first match is found.

 copy
var str = "James Bond007";
var regex = /[\d]/g;

console.log(str.replace(regex, ""));   // => James Bond
The method match() tests whether a string matches a regular expression or extracts specific parts of a string. If nothing is found it returns null, else it returns an array of all matches.

 copy
var regExp = /\d+/g;
var str = "Mary: 36, Tim: 38";

console.log(str.match(regExp));      // => [36,38]
The method split() splits a string into an array of strings based on the regular expression. It uses the regular expression as a delimiter to split the string. The delimiters themselves are not included in the resulting array.

 copy
var regex = /[,:.]/;            // delimiters are comma, colon, and period
var str = 'Tim:20,Henry:30.Linda:35';

console.log(str.split(regex));  // => [Tim,20,Henry,30,Linda,35]
In JavaScript, there are actually two ways to create a regular expressions: using a regular expression literal, which we have discussed before and using a RegExp() constructor. In fact, regular expression literals implicitly make a call to the RegExp constructor. You can also call RegExp() yourself to create objects that represent regular expressions. When defining a pattern using RegExp it must be enclosed by quotes and any special character must be escaped with a backslash to retain their meaning. In the example below we see that this adds considerable complexity to the pattern, which is why they are not recommended.

 copy
var regex = new RegExp("^\\s*(\\+|-)?\\d+\\s*$");
var str = "-1";

console.log(regex.test(str));     // => true
The test() method on RegExp checks whether the string argument contains a match of the pattern specified by the regular expression. Here we are testing if the string is an integer, with an optional sign (+/-) character. The test() returns true.

Another method on RegExp called exec() checks whether the string argument contains one or more occurrences of the pattern specified by the regular expression. If no match is found, it returns null. If a match is found, it returns an array whose first element is the string that matches the entire pattern. In the next example we demonstrate the use of exec().

Suppose you have a web page and you wish to extract valid email addresses from it (this is called screen-scraping). This is how it can be done in JavaScript:

 copy
var page = "<html>annie@@js.org, jim@@email.com, some-invalid-email-address</html>";
var regex = /[0-9a-zA-Z]+@@[0-9a-zA-Z]+[\.]{1}[0-9a-zA-Z]+[\.]?[0-9a-zA-Z]+/g;

do {
    var address = regex.exec(page);
    console.log(address[0]);       // => annie@@js.org, then jim@@email.com 
} while (address.index < page.length);
Without the global modifier (g) the exec() would have returned the first email address only and the index property on the address array would have remained the same, i.e. 0, resulting in an infinite loop. In order to move ahead, the global flag must be set.





JavaScript Design Patterns
Introduction
Design patterns are advanced object-oriented solutions to commonly occurring software problems.  Patterns are about reusable designs and interactions of objects.  Each pattern has a name and becomes part of a vocabulary when discussing complex design solutions.

The 23 Gang of Four (GoF) patterns are generally considered the foundation for all other patterns. They are categorized in three groups: Creational, Structural, and Behavioral (see below for a complete list).

In this tutorial we provide JavaScript examples for each of the GoF patterns. Mostly, they follow the structure and intent of the original pattern designs. These examples demonstrate the principles behind each pattern, but are not optimized for JavaScript.

JavaScript-optimized patterns are available in our Dofactory JS, a unique guide for web app developers and architects developering with JavaScript and jQuery. Not only does it include optimized GoF patterns (using namespacing, closures, modules, immediate functions, prototypes, etc), but also Modern Patterns, Model View Patterns, Architecture Patterns, jQuery Patterns, and more. To learn more click here.

Creational Patterns
  Abstract Factory	Creates an instance of several families of classes
  Builder	Separates object construction from its representation
  Factory Method	Creates an instance of several derived classes
  Prototype	A fully initialized instance to be copied or cloned
  Singleton	A class of which only a single instance can exist

Structural Patterns
  Adapter	Match interfaces of different classes
  Bridge	Separates an object’s interface from its implementation
  Composite	A tree structure of simple and composite objects
  Decorator	Add responsibilities to objects dynamically
  Facade	A single class that represents an entire subsystem
  Flyweight	A fine-grained instance used for efficient sharing
  Proxy	An object representing another object

Behavioral Patterns
  Chain of Resp.	A way of passing a request between a chain of objects
  Command	Encapsulate a command request as an object
  Interpreter	A way to include language elements in a program
  Iterator	Sequentially access the elements of a collection
  Mediator	Defines simplified communication between classes
  Memento	Capture and restore an object's internal state
  Observer	A way of notifying change to a number of classes
  State	Alter an object's behavior when its state changes
  Strategy	Encapsulates an algorithm inside a class
  Template Method	Defer the exact steps of an algorithm to a subclass
  Visitor	Defines a new operation to a class without change

 copy

// old interface

function Shipping() {
    this.request = function (zipStart, zipEnd, weight) {
        // ...
        return "$49.75";
    }
}

// new interface

function AdvancedShipping() {
    this.login = function (credentials) { /* ... */ };
    this.setStart = function (start) { /* ... */ };
    this.setDestination = function (destination) { /* ... */ };
    this.calculate = function (weight) { return "$39.50"; };
}

// adapter interface

function ShippingAdapter(credentials) {
    var shipping = new AdvancedShipping();

    shipping.login(credentials);

    return {
        request: function (zipStart, zipEnd, weight) {
            shipping.setStart(zipStart);
            shipping.setDestination(zipEnd);
            return shipping.calculate(weight);
        }
    };
}

function run() {

    var shipping = new Shipping();
    var credentials = { token: "30a8-6ee1" };
    var adapter = new ShippingAdapter(credentials);

    // original shipping object and interface

    var cost = shipping.request("78701", "10010", "2 lbs");
    console.log("Old cost: " + cost);

    // new shipping object with adapted interface

    cost = adapter.request("78701", "10010", "2 lbs");

    console.log("New cost: " + cost);
}


JavaScript Abstract Factory
An Abstract Factory creates objects that are related by a common theme. In object-oriented programming a Factory is an object that creates other objects. An Abstract Factory has abstracted out a theme which is shared by the newly created objects.

JavaScript Patterns
Using Abstract Factory
#
Suppose we have two Abstract Factories whose task it is to create page controls, such as, buttons, textboxes, radio buttons, and listboxes. One is the Light Factory which creates controls that are white and the other the Dark Factory which creates controls that are black. Both Factories creates the same types of controls, but they differ in color, which is their common theme. This is an implementation of the Abstract Factory pattern.

Over time the Abstract Factory and Factory Method patterns have merged into a more general pattern called Factory. A Factory is simply an object that creates other objects.

You may be wondering why you would want to leave the responsibility of the construction of objects to others rather than simply calling a constructor function with the new keyword directly. The reason is that that constructor functions are limited in their control over the overall creation process and sometimes you will need to hand over control to a factory that has broader knowledge.

This includes scenarios in which the creation process involves object caching, sharing or re-using of objects, complex logic, or applications that maintain object and type counts, and objects that interact with different resources or devices. If your application needs more control over the object creation process, consider using a Factory.

Diagram
#
Diagram for JavaScript Abstract Factory Design Pattern
Participants
#
The objects participating in this pattern are:

AbstractFactory -- not used in JavaScript
declares an interface for creating products
ConcreteFactory -- In example code: EmployeeFactory, VendorFactory
a factory object that 'manufactures' new products
the create() method returns new products
Products -- In example code: Employee, Vendor
the product instances being created by the factory
AbstractProduct -- not used in JavaScript
declares an interface for the products that are being created
Example
#
JavaScript does not support class-based inheritance therefore the abstract classes as depicted in the diagram are not used in the JavaScript example. Abstract classes and interfaces enforce consistent interfaces in derived classes. In JavaScript we must ensure this consistency ourselves by making sure that each 'Concrete' object has the same interface definition (i.e. properties and methods) as the others

In the example we have two Concrete Factories: EmployeeFactory and VendorFactory. The first one creates Employee instances, the second one Vendor instances. Both products are person types (with the same interface) which allows the client to treat them the same. An array with two employees and two vendors is created. Each person is then asked to say what and who they are.


 copy
function Employee(name) {
    this.name = name;

    this.say = function () {
        console.log("I am employee " + name);
    };
}

function EmployeeFactory() {

    this.create = function (name) {
        return new Employee(name);
    };
}

function Vendor(name) {
    this.name = name;

    this.say = function () {
        console.log("I am vendor " + name);
    };
}

function VendorFactory() {

    this.create = function (name) {
        return new Vendor(name);
    };
}

function run() {
    var persons = [];
    var employeeFactory = new EmployeeFactory();
    var vendorFactory = new VendorFactory();

    persons.push(employeeFactory.create("Joan DiSilva"));
    persons.push(employeeFactory.create("Tim O'Neill"));
    persons.push(vendorFactory.create("Gerald Watson"));
    persons.push(vendorFactory.create("Nicole McNight"));

    for (var i = 0, len = persons.length; i < len; i++) {
        persons[i].say();
    }
}


JavaScript Builder
The Builder pattern allows a client to construct a complex object by specifying the type and content only. Construction details are hidden from the client entirely.

JavaScript Patterns
Using Builder
#
The most common motivation for using Builder is to simplify client code that creates complex objects. The client can still direct the steps taken by the Builder without knowing how the actual work is accomplished. Builders frequently encapsulate construction of Composite objects (another GoF design pattern) because the procedures involved are often repetitive and complex.

Usually it is the last step that returns the newly created object which makes it easy for a Builder to participate in fluent interfaces in which multiple method calls, separated by dot operators, are chained together (note: fluent interfaces are implementation of the Chaining Pattern as presented in the Modern patterns section).

Diagram
#
Diagram JavaScript Builder Design Pattern
Participants
#
The objects participating in this pattern are:

Director -- In example code: Shop
constructs products by using the Builder's multistep interface
Builder -- not used in JavaScript
declares a multistep interface for creating a complex product
ConcreteBuilder -- In example code: CarBuilder, TruckBuilder
implements the multistep Builder interface
maintains the product through the assembly process
offers the ability to retrieve the newly created product
Products -- In example code: Car, Truck
represents the complex objects being assembled
Example
#
The AbstractBuilder is not used because JavaScript does not support abstract classes. However, the different Builders must implement the same multistep interface for the Director to be able to step through the assembly process

The JavaScript code has a Shop (the Director) and two builder objects: CarBuilder and TruckBuilder. The Shop's construct method accepts a Builder instance which it then takes through a series of assembly steps: step1 and step2. The Builder's get method returns the newly assembled products (Car objects and Truck objects).

The client has control over the actual object construction process by offering different builders to the Shop.


 copy
function Shop() {
    this.construct = function (builder) {
        builder.step1();
        builder.step2();
        return builder.get();
    }
}

function CarBuilder() {
    this.car = null;

    this.step1 = function () {
        this.car = new Car();
    };

    this.step2 = function () {
        this.car.addParts();
    };

    this.get = function () {
        return this.car;
    };
}

function TruckBuilder() {
    this.truck = null;

    this.step1 = function () {
        this.truck = new Truck();
    };

    this.step2 = function () {
        this.truck.addParts();
    };

    this.get = function () {
        return this.truck;
    };
}

function Car() {
    this.doors = 0;

    this.addParts = function () {
        this.doors = 4;
    };

    this.say = function () {
        console.log("I am a " + this.doors + "-door car");
    };
}

function Truck() {
    this.doors = 0;

    this.addParts = function () {
        this.doors = 2;
    };

    this.say = function () {
        console.log("I am a " + this.doors + "-door truck");
    };
}

function run() {
    var shop = new Shop();
    var carBuilder = new CarBuilder();
    var truckBuilder = new TruckBuilder();
    var car = shop.construct(carBuilder);
    var truck = shop.construct(truckBuilder);

    car.say();
    truck.say();
}

JavaScript Factory Method
A Factory Method creates new objects as instructed by the client. One way to create objects in JavaScript is by invoking a constructor function with the new operator. There are situations however, where the client does not, or should not, know which one of several candidate objects to instantiate. The Factory Method allows the client to delegate object creation while still retaining control over which type to instantiate.

JavaScript Patterns
Using Factory Method
#
The key objective of the Factory Method is extensibility. Factory Methods are frequently used in applications that manage, maintain, or manipulate collections of objects that are different but at the same time have many characteristics (i.e. methods and properties) in common. An example would be a collection of documents with a mix of Xml documents, Pdf documents, and Rtf documents.

Diagram
#
Diagram JavaScript Factory Method Design Pattern
Participants
#
The objects participating in this pattern are:

Creator -- In example code: Factory
the 'factory' object that creates new products
implements 'factoryMethod' which returns newly created products
AbstractProduct -- not used in JavaScript
declares an interface for products
ConcreteProduct -- In example code: Employees
the product being created
all products support the same interface (properties and methods)
Example
#
In this JavaScript example the Factory object creates four different types of employees. Each employee type has a different hourly rate. The createEmployee method is the actual Factory Method. The client instructs the factory what type of employee to create by passing a type argument into the Factory Method.

The AbstractProduct in the diagram is not implemented because Javascript does not support abstract classes or interfaces. However, we still need to ensure that all employee types have the same interface (properties and methods).

Four different employee types are created; all are stored in the same array. Each employee is asked to say what they are and their hourly rate.


 copy
var Factory = function () {
    this.createEmployee = function (type) {
        var employee;

        if (type === "fulltime") {
            employee = new FullTime();
        } else if (type === "parttime") {
            employee = new PartTime();
        } else if (type === "temporary") {
            employee = new Temporary();
        } else if (type === "contractor") {
            employee = new Contractor();
        }

        employee.type = type;

        employee.say = function () {
            console.log(this.type + ": rate " + this.hourly + "/hour");
        }

        return employee;
    }
}

var FullTime = function () {
    this.hourly = "$12";
};

var PartTime = function () {
    this.hourly = "$11";
};

var Temporary = function () {
    this.hourly = "$10";
};

var Contractor = function () {
    this.hourly = "$15";
};

function run() {

    var employees = [];
    var factory = new Factory();

    employees.push(factory.createEmployee("fulltime"));
    employees.push(factory.createEmployee("parttime"));
    employees.push(factory.createEmployee("temporary"));
    employees.push(factory.createEmployee("contractor"));

    for (var i = 0, len = employees.length; i < len; i++) {
        employees[i].say();
    }
}


JavaScript Prototype
The Prototype Pattern creates new objects, but rather than creating non-initialized objects it returns objects that are initialized with values it copied from a prototype - or example - object. The Prototype pattern is also referred to as the Properties pattern.

JavaScript Patterns
Using Prototype
#
An example of where the Prototype pattern is useful is the initialization of business objects with values that match the default values in the database. The prototype object holds the default values that are copied over into a newly created business object.

Classical languages rarely use the Prototype pattern, but JavaScript being a prototypal language uses this pattern in the construction of new objects and their prototypes.

Diagram
#
Diagram JavaScript Prototype Design Pattern
Participants
#
The objects participating in this pattern are:

Client -- In example code: the run() function.
creates a new object by asking a prototype to clone itself
Prototype -- In example code: CustomerPrototype
creates an interfaces to clone itself
Clones -- In example code: Customer
the cloned objects that are being created
Example
#
In the example code we have a CustomerPrototype object that clones objects given a prototype object. Its constructor function accepts a prototype of type Customer. Calling the clone method will generate a new Customer object with its property values initialized with the prototype values.

This is the classical implementation of the Prototype pattern, but JavaScript can do this far more effectively using its built-in prototype facility. You can learn about these and other techniques in our Dofactory JS.


 copy
function CustomerPrototype(proto) {
    this.proto = proto;

    this.clone = function () {
        var customer = new Customer();

        customer.first = proto.first;
        customer.last = proto.last;
        customer.status = proto.status;

        return customer;
    };
}

function Customer(first, last, status) {

    this.first = first;
    this.last = last;
    this.status = status;

    this.say = function () {
        console.log("name: " + this.first + " " + this.last +
            ", status: " + this.status);
    };
}

function run() {

    var proto = new Customer("n/a", "n/a", "pending");
    var prototype = new CustomerPrototype(proto);

    var customer = prototype.clone();
    customer.say();
}


JavaScript Singleton
The Singleton Pattern limits the number of instances of a particular object to just one. This single instance is called the singleton.

JavaScript Patterns
Using Singleton
#
Singletons are useful in situations where system-wide actions need to be coordinated from a single central place. An example is a database connection pool. The pool manages the creation, destruction, and lifetime of all database connections for the entire application ensuring that no connections are 'lost'.

Singletons reduce the need for global variables which is particularly important in JavaScript because it limits namespace pollution and associated risk of name collisions. The Module pattern (see our Dofactory JS product) is JavaScript's manifestation of the Singleton pattern.

Several other patterns, such as, Factory, Prototype, and Façade are frequently implemented as Singletons when only one instance is needed.

Diagram
#
Diagram JavaScript Singleton Design Pattern
Participants
#
The objects participating in this pattern are:

Singleton -- In example code: Singleton
defines getInstance() which returns the unique instance.
responsible for creating and managing the instance object.
Example
#
The Singleton object is implemented as an immediate anonymous function. The function executes immediately by wrapping it in brackets followed by two additional brackets. It is called anonymous because it doesn't have a name.

The getInstance method is Singleton's gatekeeper. It returns the one and only instance of the object while maintaining a private reference to it which is not accessible to the outside world.

The getInstance method demonstates another design pattern called Lazy Load. Lazy Load checks if an instance has already been created; if not, it creates one and stores it for future reference. All subsequent calls will receive the stored instance. Lazy loading is a CPU and memory saving technique by creating objects only when absolutely necessary.

Singleton is a manifestation of a common JavaScript pattern: the Module pattern. Module is the basis to all popular JavaScript libraries and frameworks (jQuery, Backbone, Ember, etc.). To learn how to benefit from Module, Lazy Load and many other JavaScript patterns in your own projects, check out our unique Dofactory JS.


 copy
var Singleton = (function () {
    var instance;

    function createInstance() {
        var object = new Object("I am the instance");
        return object;
    }

    return {
        getInstance: function () {
            if (!instance) {
                instance = createInstance();
            }
            return instance;
        }
    };
})();

function run() {

    var instance1 = Singleton.getInstance();
    var instance2 = Singleton.getInstance();

    console.log("Same instance? " + (instance1 === instance2));
}


JavaScript Adapter
The Adapter pattern translates one interface (an object‘s properties and methods) to another. Adapters allows programming components to work together that otherwise wouldn&lstqup;t because of mismatched interfaces. The Adapter pattern is also referred to as the Wrapper Pattern.

JavaScript Patterns
Using Adapter
#
One scenario where Adapters are commonly used is when new components need to be integrated and work together with existing components in the application.

Another scenario is refactoring in which parts of the program are rewritten with an improved interface, but the old code still expects the original interface.

Diagram
#
Diagram JavaScript Adapter Design Pattern
Participants
#
The objects participating in this pattern are:

Client -- In example code: the run() function.
calls into Adapter to request a service
Adapter -- In example code: ShippingAdapter
implements the interface that the client expects or knows
Adaptee -- In example code: AdvancedShipping
the object being adapted
has a different interface from what the client expects or knows
Example
#
The example code below shows an online shopping cart in which a shipping object is used to compute shipping costs. The old Shipping object is replaced by a new and improved Shipping object that is more secure and offers better prices.

The new object is named AdvancedShipping and has a very different interface which the client program does not expect. ShippingAdapter allows the client program to continue functioning without any API changes by mapping (adapting) the old Shipping interface to the new AdvancedShipping interface.


 copy

// old interface

function Shipping() {
    this.request = function (zipStart, zipEnd, weight) {
        // ...
        return "$49.75";
    }
}

// new interface

function AdvancedShipping() {
    this.login = function (credentials) { /* ... */ };
    this.setStart = function (start) { /* ... */ };
    this.setDestination = function (destination) { /* ... */ };
    this.calculate = function (weight) { return "$39.50"; };
}

// adapter interface

function ShippingAdapter(credentials) {
    var shipping = new AdvancedShipping();

    shipping.login(credentials);

    return {
        request: function (zipStart, zipEnd, weight) {
            shipping.setStart(zipStart);
            shipping.setDestination(zipEnd);
            return shipping.calculate(weight);
        }
    };
}

function run() {

    var shipping = new Shipping();
    var credentials = { token: "30a8-6ee1" };
    var adapter = new ShippingAdapter(credentials);

    // original shipping object and interface

    var cost = shipping.request("78701", "10010", "2 lbs");
    console.log("Old cost: " + cost);

    // new shipping object with adapted interface

    cost = adapter.request("78701", "10010", "2 lbs");

    console.log("New cost: " + cost);
}


JavaScript Bridge
The Bridge pattern allows two components, a client and a service, to work together with each component having its own interface. Bridge is a high-level architectural pattern and its main goal is to write better code through two levels of abstraction. It facilitates very loose coupling of objects. It is sometimes referred to as a double Adapter pattern.

JavaScript Patterns
Using Bridge
#
An example of the Bridge pattern is an application (the client) and a database driver (the service). The application writes to a well-defined database API, for example ODBC, but behind this API you will find that each driver's implementation is totally different for each database vendor (SQL Server, MySQL, Oracle, etc.).

The Bridge pattern is a great pattern for driver development but it is rarely seen in JavaScript.

Diagram
#
Diagram JavaScript Bridge Design Pattern
Participants
#
The objects participating in this pattern are:

Client -- In example code: the run() function.
calls into Abstraction to request an operation
Abstraction -- not used in JavaScript
declares an interface for first level abstraction
maintains a reference to the Implementor
RefinedAbstraction -- In example code: Gestures, Mouse
implements and extends the interface defined by Abstraction
Implementor -- not used in JavaScript
declares an interface for second level or implementor abstraction
ConcreteImplementor -- In example code: Screen, Audio
implements the Implementor interface and defines its effects
Example
#
The objective of the example is to show that with the Bridge pattern input and output devices can vary independently (without changes to the code); the devices are loosely coupled by two levels of abstraction.

JavaScript does not support abstract classes therefore Abstraction and Implementor are not included. However, their interfaces (properties and methods) are consistently implemented in RefinedAbstraction and ConcreteImplementor. In our example code the Abstraction represents Input devices and the Implementor represents Output devices.

Gestures (finger movements) and the Mouse are very different input devices, but their actions map to a common set of output instructions: click, move, drag, etc. Screen and Audio are very different output devices, but they respond to the same set of instructions. Of course, the effects are totally different, that is, video updates vs. sound effects. The Bridge pattern allows any input device to work with any output device.


 copy

// input devices

var Gestures = function (output) {
    this.output = output;

    this.tap = function () { this.output.click(); }
    this.swipe = function () { this.output.move(); }
    this.pan = function () { this.output.drag(); }
    this.pinch = function () { this.output.zoom(); }
};

var Mouse = function (output) {
    this.output = output;

    this.click = function () { this.output.click(); }
    this.move = function () { this.output.move(); }
    this.down = function () { this.output.drag(); }
    this.wheel = function () { this.output.zoom(); }
};

// output devices

var Screen = function () {
    this.click = function () { console.log("Screen select"); }
    this.move = function () { console.log("Screen move"); }
    this.drag = function () { console.log("Screen drag"); }
    this.zoom = function () { console.log("Screen zoom in"); }
};

var Audio = function () {
    this.click = function () { console.log("Sound oink"); }
    this.move = function () { console.log("Sound waves"); }
    this.drag = function () { console.log("Sound screetch"); }
    this.zoom = function () { console.log("Sound volume up"); }
};

function run() {

    var screen = new Screen();
    var audio = new Audio();

    var hand = new Gestures(screen);
    var mouse = new Mouse(audio);

    hand.tap();
    hand.swipe();
    hand.pinch();

    mouse.click();
    mouse.move();
    mouse.wheel();
}


JavaScript Composite
The Composite pattern allows the creation of objects with properties that are primitive items or a collection of objects. Each item in the collection can hold other collections themselves, creating deeply nested structures.

JavaScript Patterns
Using Composite
#
A tree control is a perfect example of a Composite pattern. The nodes of the tree either contain an individual object (leaf node) or a group of objects (a subtree of nodes).

All nodes in the Composite pattern share a common set of properties and methods which supports individual objects as well as object collections. This common interface greatly facilitates the design and construction of recursive algorithms that iterate over each object in the Composite collection.

Diagram
#
Diagram JavaScript Composite Design Pattern
Participants
#
The objects participating in this pattern are:

Component -- In example code: Node
declares the interface for objects in the composition
Leaf -- In example code: Node
represents leaf objects in the composition. A leaf has no children
Composite -- In example code: Node
represents branches (or subtrees) in the composition
maintains a collection of child components
Example
#
In our example a tree structure is created from Node objects. Each node has a name and 4 methods: add, remove, getChild, and hasChildren. The methods are added to Node's prototype. This reduces the memory requirements as these methods are now shared by all nodes. Node is fully recursive and there is no need for separate Component or Leaf objects.

A small Composite tree is built by adding nodes to parent nodes. Once complete we invoke traverse which iterates over each node in the tree and displays its name and depth (by showing indentation).


 copy
var Node = function (name) {
    this.children = [];
    this.name = name;
}

Node.prototype = {
    add: function (child) {
        this.children.push(child);
    },

    remove: function (child) {
        var length = this.children.length;
        for (var i = 0; i < length; i++) {
            if (this.children[i] === child) {
                this.children.splice(i, 1);
                return;
            }
        }
    },

    getChild: function (i) {
        return this.children[i];
    },

    hasChildren: function () {
        return this.children.length > 0;
    }
}

// recursively traverse a (sub)tree

function traverse(indent, node) {
    console.log(Array(indent++).join("--") + node.name);

    for (var i = 0, len = node.children.length; i < len; i++) {
        traverse(indent, node.getChild(i));
    }
}

function run() {
    var tree = new Node("root");
    var left = new Node("left")
    var right = new Node("right");
    var leftleft = new Node("leftleft");
    var leftright = new Node("leftright");
    var rightleft = new Node("rightleft");
    var rightright = new Node("rightright");

    tree.add(left);
    tree.add(right);
    tree.remove(right);  // note: remove
    tree.add(right);

    left.add(leftleft);
    left.add(leftright);

    right.add(rightleft);
    right.add(rightright);

    traverse(1, tree);
}


JavaScript Decorator
The Decorator pattern extends (decorates) an object’s behavior dynamically. The ability to add new behavior at runtime is accomplished by a Decorator object which ‘wraps itself’ around the original object. Multiple decorators can add or override functionality to the original object.

JavaScript Patterns
Using Decorator
#
An example of a decorator is security management where business objects are given additional access to privileged information depending on the privileges of the authenticated user. For example, an HR manager gets to work with an employee object that has appended (i.e. is decorated with) the employee's salary record so that salary information can be viewed.

Decorators provide flexibility to statically typed languages by allowing runtime changes as opposed to inheritance which takes place at compile time. JavaScript, however, is a dynamic language and the ability to extend an object at runtime is baked into the language itself.

For this reason, the Decorator pattern is less relevant to JavaScript developers. In JavaScript the Extend and Mixin patterns subsume the Decorator pattern. You can learn more about these and other Modern JavaScript patterns in our Dofactory JS.

Diagram
#
Diagram JavaScript Decorator Design Pattern
Participants
#
The objects participating in this pattern are:

Client -- In example code: the run() function
maintains a reference to the decorated Component
Component -- In example code: User
object to which additional functionality is added
Decorator -- In example code: DecoratedUser
'wraps around' Component by maintaining a reference to it
defines an interface that conforms to Component's interface
implements the additional functionality (addedMembers in diagram)
Example
#
In the example code a User object is decorated (enhanced) by a DecoratedUser object. It extends the User with several address-based properties. The original interface must stay the same, which explains why user.name is assigned to this.name. Also, the say method of DecoratedUser hides the say method of User.

JavaScript itself is far more effective in dynamically extending objects with additional data and behavior. You can learn more about extending objects at runtime and other techniques in our Dofactory JS.


 copy

var User = function (name) {
    this.name = name;

    this.say = function () {
        console.log("User: " + this.name);
    };
}

var DecoratedUser = function (user, street, city) {
    this.user = user;
    this.name = user.name;  // ensures interface stays the same
    this.street = street;
    this.city = city;

    this.say = function () {
        console.log("Decorated User: " + this.name + ", " +
            this.street + ", " + this.city);
    };
}

function run() {

    var user = new User("Kelly");
    user.say();

    var decorated = new DecoratedUser(user, "Broadway", "New York");
    decorated.say();
}


JavaScript Façade
The Façade pattern provides an interface which shields clients from complex functionality in one or more subsystems. It is a simple pattern that may seem trivial but it is powerful and extremely useful. It is often present in systems that are built around a multi-layer architecture.

JavaScript Patterns
Using Façade
#
The intent of the Façade is to provide a high-level interface (properties and methods) that makes a subsystem or toolkit easy to use for the client.

On the server, in a multi-layer web application you frequently have a presentation layer which is a client to a service layer. Communication between these two layers takes place via a well-defined API. This API, or façade, hides the complexities of the business objects and their interactions from the presentation layer.

Another area where Façades are used is in refactoring. Suppose you have a confusing or messy set of legacy objects that the client should not be concerned about. You can hide this code behind a Façade. The Façade exposes only what is necessary and presents a cleaner and easy-to-use interface.

Façades are frequently combined with other design patterns. Façades themselves are often implemented as singleton factories.

Diagram
#
Diagram JavaScript Façade Design Pattern
Participants
#
The objects participating in this pattern are:

Façade -- In example code: Mortgage
knows which subsystems are responsible for a request
delegates client requests to appropriate subsystem objects
Sub Systems -- In example code: Bank, Credit, Background
implements and performs specialized subsystem functionality
have no knowledge of or reference to the façade
Example
#
The Mortgage object is the Façade in the example code. It presents a simple interface to the client with only a single method: applyFor. Eut underneath this simple API lies considerable complexity.

The applicant's name is passed into the Mortgage constructor function. Then the applyFor method is called with the requested loan amount. Internally, this method uses services from 3 separate subsystems that are complex and possibly take some time to process; they are Bank, Credit, and Background.

Based on several criteria (bank statements, credit reports, and criminal background) the applicant is either accepted or denied for the requested loan.


 copy
var Mortgage = function (name) {
    this.name = name;
}

Mortgage.prototype = {

    applyFor: function (amount) {
        // access multiple subsystems...
        var result = "approved";
        if (!new Bank().verify(this.name, amount)) {
            result = "denied";
        } else if (!new Credit().get(this.name)) {
            result = "denied";
        } else if (!new Background().check(this.name)) {
            result = "denied";
        }
        return this.name + " has been " + result +
            " for a " + amount + " mortgage";
    }
}

var Bank = function () {
    this.verify = function (name, amount) {
        // complex logic ...
        return true;
    }
}

var Credit = function () {
    this.get = function (name) {
        // complex logic ...
        return true;
    }
}

var Background = function () {
    this.check = function (name) {
        // complex logic ...
        return true;
    }
}

function run() {
    var mortgage = new Mortgage("Joan Templeton");
    var result = mortgage.applyFor("$100,000");

    console.log(result);
}



JavaScript Flyweight
The Flyweight pattern conserves memory by sharing large numbers of fine-grained objects efficiently. Shared flyweight objects are immutable, that is, they cannot be changed as they represent the characteristics that are shared with other objects.

JavaScript Patterns
Using Flyweight
#
Essentially Flyweight is an 'object normalization technique' in which common properties are factored out into shared flyweight objects. (Note: the idea is similar to data model normalization, a process in which the modeler attempts to minimize redundancy).

An example of the Flyweight Pattern is within the JavaScript engine itself which maintains a list of immutable strings that are shared across the application.

Other examples include characters and line-styles in a word processor, or 'digit receivers' in a public switched telephone network application. You will find flyweights mostly in utility type applications such as word processors, graphics programs, and network apps; they are less often used in data-driven business type applications.

Diagram
#
Diagram JavaScript Flyweight Design Pattern
Participants
#
The objects participating in this pattern are:

Client -- In example code: Computer
calls into FlyweightFactory to obtain flyweight objects
FlyweightFactory -- In example code: FlyweightFactory
creates and manages flyweight objects
if requested, and a flyweight does not exist, it will create one
stores newly created flyweights for future requests
Flyweight -- In example code: Flyweight
maintains intrinsic data to be shared across the application
Example
#
In our example code we are building computers. Many models, makes, and processor combinations are common, so these characteristics are factored out and shared by Flyweight objects.

The FlyweightFactory maintains a pool of Flyweight objects. When requested for a Flyweight object the FlyweightFactory will check if one already exists; if not a new one will be created and stored for future reference. All subsequent requests for that same computer will return the stored Flyweight object.

Several different computers are added to a ComputerCollection. At the end we have a list of 7 Computer objects that share only 2 Flyweights. These are small savings, but with large datasets the memory savings can be significant.


 copy

function Flyweight(make, model, processor) {
    this.make = make;
    this.model = model;
    this.processor = processor;
};

var FlyWeightFactory = (function () {
    var flyweights = {};

    return {

        get: function (make, model, processor) {
            if (!flyweights[make + model]) {
                flyweights[make + model] =
                    new Flyweight(make, model, processor);
            }
            return flyweights[make + model];
        },

        getCount: function () {
            var count = 0;
            for (var f in flyweights) count++;
            return count;
        }
    }
})();

function ComputerCollection() {
    var computers = {};
    var count = 0;

    return {
        add: function (make, model, processor, memory, tag) {
            computers[tag] =
                new Computer(make, model, processor, memory, tag);
            count++;
        },

        get: function (tag) {
            return computers[tag];
        },

        getCount: function () {
            return count;
        }
    };
}

var Computer = function (make, model, processor, memory, tag) {
    this.flyweight = FlyWeightFactory.get(make, model, processor);
    this.memory = memory;
    this.tag = tag;
    this.getMake = function () {
        return this.flyweight.make;
    }
    // ...
}

function run() {
    var computers = new ComputerCollection();

    computers.add("Dell", "Studio XPS", "Intel", "5G", "Y755P");
    computers.add("Dell", "Studio XPS", "Intel", "6G", "X997T");
    computers.add("Dell", "Studio XPS", "Intel", "2G", "U8U80");
    computers.add("Dell", "Studio XPS", "Intel", "2G", "NT777");
    computers.add("Dell", "Studio XPS", "Intel", "2G", "0J88A");
    computers.add("HP", "Envy", "Intel", "4G", "CNU883701");
    computers.add("HP", "Envy", "Intel", "2G", "TXU003283");

    console.log("Computers: " + computers.getCount());
    console.log("Flyweights: " + FlyWeightFactory.getCount());
}


JavaScript Proxy
The Proxy pattern provides a surrogate or placeholder object for another object and controls access to this other object.

JavaScript Patterns
Using Proxy
#
In object-oriented programming, objects do the work they advertise through their interface (properties and methods). Clients of these objects expect this work to be done quickly and efficiently. However, there are situations where an object is severely constrained and cannot live up to its responsibility. Typically this occurs when there is a dependency on a remote resource (resulting in network latency) or when an object takes a long time to load.

In situations like these you apply the Proxy pattern and create a proxy object that ‘stands in’ for the original object. The Proxy forwards the request to a target object. The interface of the Proxy object is the same as the original object and clients may not even be aware they are dealing with a proxy rather than the real object

Diagram
#
Diagram JavaScript Proxy Design Pattern
Participants
#
The objects participating in this pattern are:

Client -- In example code: the run() function
calls Proxy to request an operation
Proxy -- In example code: GeoProxy
provides an interface similar to the real object
maintains a reference that lets the proxy access the real object
handles requests and forwards these to the real object
RealSubject -- In example code: GeoCoder
defines the real object for which service is requested
Example
#
The GeoCoder object simulates the Google Maps Geocoding service. In geocoding you provide a location (a place on the earth) and it will return its latitude/longitude (latlng). Our GeoCoder can resolve only 4 locations, but in reality there are millions, because it involves countries, cities, and streets.

The programmer decided to implement a Proxy object because GeoCoder is relatively slow. The proxy object is called GeoProxy. It is known that many repeated requests (for the same location) are coming in. To speed things up GeoProxy caches frequently requested locations. If a location is not already cached it goes out to the real GeoCoder service and stores the results in cache.

Several city locations are queried and many of these are for the same city. GeoProxy builds up its cache while supporting these calls. At the end GeoProxy< has processed 11 requests but had to go out to GeoCoder only 3 times. Notice that the client program has no knowledge about the proxy object (it calls the same interface with the standard getLatLng method).


 copy
function GeoCoder() {

    this.getLatLng = function (address) {

        if (address === "Amsterdam") {
            return "52.3700° N, 4.8900° E";
        } else if (address === "London") {
            return "51.5171° N, 0.1062° W";
        } else if (address === "Paris") {
            return "48.8742° N, 2.3470° E";
        } else if (address === "Berlin") {
            return "52.5233° N, 13.4127° E";
        } else {
            return "";
        }
    };
}

function GeoProxy() {
    var geocoder = new GeoCoder();
    var geocache = {};

    return {
        getLatLng: function (address) {
            if (!geocache[address]) {
                geocache[address] = geocoder.getLatLng(address);
            }
            console.log(address + ": " + geocache[address]);
            return geocache[address];
        },
        getCount: function () {
            var count = 0;
            for (var code in geocache) { count++; }
            return count;
        }
    };
};

function run() {

    var geo = new GeoProxy();

    // geolocation requests

    geo.getLatLng("Paris");
    geo.getLatLng("London");
    geo.getLatLng("London");
    geo.getLatLng("London");
    geo.getLatLng("London");
    geo.getLatLng("Amsterdam");
    geo.getLatLng("Amsterdam");
    geo.getLatLng("Amsterdam");
    geo.getLatLng("Amsterdam");
    geo.getLatLng("London");
    geo.getLatLng("London");

    console.log("\nCache size: " + geo.getCount());
    
}


JavaScript Chain of Responsibility
The Chain of Responsibility pattern provides a chain of loosely coupled objects one of which can satisfy a request. This pattern is essentially a linear search for an object that can handle a particular request.

JavaScript Patterns
Using Chain of Responsibility
#
An example of a chain-of-responsibility is event-bubbling in which an event propagates through a series of nested controls one of which may choose to handle the event.

The Chain of Responsiblity patterns is related to the Chaining Pattern which is frequently used in JavaScript (jQuery makes extensive use of this pattern).

To learn more about the Chaining patterns and its benefits see our Dofactory JS product.

Diagram
#
Diagram JavaScript Chain of Responsibility Design Pattern
Participants
#
The objects participating in this pattern are:

Client -- In example code: Request
initiates the request to a chain of handler objects
Handler -- In example code: Request.get() method
defines an interface for handling the requests
implements the successor link (returning 'this')
Example
#
This example differs slightly from the classic Chain of Responsibility pattern in that not one, but all handlers participate in handling the request.

The code demonstrates an elegant solution to a money dispensing machine problem. Say, a customer requires $247 from an ATM machine. What is the combination of bank notes ($100, $50, $20, $10, $5, $1) that satisfies that request?

A Request is created with the amount requested. Next, a series of get calls are chained together, each one handling a particular denomination. Each handler determines the number of bank notes dispensed and substracts this amount from the remaining amount. The request object is passed through the chain by returning this in the get method.


 copy

var Request = function (amount) {
    this.amount = amount;
    console.log("Requested: $" + amount + "\n");
}

Request.prototype = {
    get: function (bill) {
        var count = Math.floor(this.amount / bill);
        this.amount -= count * bill;
        console.log("Dispense " + count + " $" + bill + " bills");
        return this;
    }
}
function run() {
    var request = new Request(378);

    request.get(100).get(50).get(20).get(10).get(5).get(1);
}


JavaScript Command
The Command pattern encapsulates actions as objects. Command objects allow for loosely coupled systems by separating the objects that issue a request from the objects that actually process the request. These requests are called events and the code that processes the requests are called event handlers.

JavaScript Patterns
Using Command
#
Suppose you are building an application that supports the Cut, Copy, and Paste clipboard actions. These actions can be triggered in different ways throughout the app: by a menu system, a context menu (e.g. by right clicking on a textbox), or by a keyboard shortcut.

Command objects allow you to centralize the processing of these actions, one for each operation. So, you need only one Command for processing all Cut requests, one for all Copy requests, and one for all Paste requests.

Because commands centralize all processing, they are also frequently involved in handling Undo functionality for the entire application.

Diagram
#
Diagram JavaScript Command Design Pattern
Participants
#
The objects participating in this pattern are:

Client -- In example code: the run() function
references the Receiver object
Receiver -- In example code: Calculator
knows how to carry out the operation associated with the command
(optionally) maintains a history of executed commands
Command -- In example code: Command
maintains information about the action to be taken
Invoker -- In our example code: the user pushing the buttons
asks to carry out the request
Example
#
In our example we have a calculator with 4 basic operations: add, subtract, multiply and divide. Each operation is encapsulated by a Command object.

The Calculator maintains a stack of commands. Each new command is executed and pushed onto the stack. When an undo request arrives, it simply pops the last command from the stack and executes the reverse action.

JavaScript's function objects (and callbacks) are native command objects. They can be passed around like objects; in fact, they are true objects. To learn more about JavaScript's eventing system and how callbacks work we recommend you have a look at our Dofactory JS.


 copy

function add(x, y) { return x + y; }
function sub(x, y) { return x - y; }
function mul(x, y) { return x * y; }
function div(x, y) { return x / y; }

var Command = function (execute, undo, value) {
    this.execute = execute;
    this.undo = undo;
    this.value = value;
}

var AddCommand = function (value) {
    return new Command(add, sub, value);
};

var SubCommand = function (value) {
    return new Command(sub, add, value);
};

var MulCommand = function (value) {
    return new Command(mul, div, value);
};

var DivCommand = function (value) {
    return new Command(div, mul, value);
};

var Calculator = function () {
    var current = 0;
    var commands = [];

    function action(command) {
        var name = command.execute.toString().substr(9, 3);
        return name.charAt(0).toUpperCase() + name.slice(1);
    }

    return {
        execute: function (command) {
            current = command.execute(current, command.value);
            commands.push(command);
            console.log(action(command) + ": " + command.value);
        },

        undo: function () {
            var command = commands.pop();
            current = command.undo(current, command.value);
            console.log("Undo " + action(command) + ": " + command.value);
        },

        getCurrentValue: function () {
            return current;
        }
    }
}

function run() {

    var calculator = new Calculator();

    // issue commands

    calculator.execute(new AddCommand(100));
    calculator.execute(new SubCommand(24));
    calculator.execute(new MulCommand(6));
    calculator.execute(new DivCommand(2));

    // reverse last two commands

    calculator.undo();
    calculator.undo();

    console.log("\nValue: " + calculator.getCurrentValue());
}


JavaScript Interpreter
The Interpreter pattern offers a scripting language that allows end-users to customize their solution.

JavaScript Patterns
Using Interpreter
#
Some applications are so complex that they require advanced configuration. You could offer a basic scripting language which allows the end-user to manipulate your application through simple instructions. The Interpreter pattern solves this particular problem – that of creating a simple scripting language.

Certain types of problems lend themselves to be characterized by a language. This language describes the problem domain which should be well-understood and well-defined. To implement this you need to map the language to a grammar. Grammars are usually hierarchical tree-like structures that step through multiple levels and then end up with terminal nodes (also called literals).

Problems like this, expressed as a grammar, can be implemented using the Interpreter design pattern.

Today, if you really need this type of control in JavaScript it is probably easier to use a code generator like ANTLR which will allow you to build your own command interpreters based on a grammar that you provide.

Diagram
#
Diagram JavaScript Interpreter Design Pattern
Participants
#
The objects participating in this pattern are:

Client -- In example code: the run() program.
builds (or is given) a syntax tree representing the grammar
establishes the initial context
invokes the interpret operations
Context -- In example code: Context
contains state information to the interpreter
TerminalExpression -- In example code: Expression
implements an interpret operation associated with terminal symbols in the grammar
one instance for each terminal expression in the sentence
NonTerminalExpression -- In example code: not used
implements an interpret operation associated for non-terminal symbols in the grammar
Example
#
The objective of this example is to build an interpreter which translates roman numerals to decimal numbers: for example, XXXVI = 36.

The Context object maintains the input (the roman numeral) and the resulting output as it is being parsed and interpreted. The Expression object represents the nodes in the grammar tree; it supports the interpret method.

When running the program, a simple grammar tree is being built which then processes a roman numeral and translates it into a numeric.


 copy
var Context = function (input) {
    this.input = input;
    this.output = 0;
}

Context.prototype = {
    startsWith: function (str) {
        return this.input.substr(0, str.length) === str;
    }
}

var Expression = function (name, one, four, five, nine, multiplier) {
    this.name = name;
    this.one = one;
    this.four = four;
    this.five = five;
    this.nine = nine;
    this.multiplier = multiplier;
}

Expression.prototype = {
    interpret: function (context) {
        if (context.input.length == 0) {
            return;
        }
        else if (context.startsWith(this.nine)) {
            context.output += (9 * this.multiplier);
            context.input = context.input.substr(2);
        }
        else if (context.startsWith(this.four)) {
            context.output += (4 * this.multiplier);
            context.input = context.input.substr(2);
        }
        else if (context.startsWith(this.five)) {
            context.output += (5 * this.multiplier);
            context.input = context.input.substr(1);
        }
        while (context.startsWith(this.one)) {
            context.output += (1 * this.multiplier);
            context.input = context.input.substr(1);
        }
    }
}

function run() {
    var roman = "MCMXXVIII"
    var context = new Context(roman);
    var tree = [];

    tree.push(new Expression("thousand", "M", " ", " ", " ", 1000));
    tree.push(new Expression("hundred", "C", "CD", "D", "CM", 100));
    tree.push(new Expression("ten", "X", "XL", "L", "XC", 10));
    tree.push(new Expression("one", "I", "IV", "V", "IX", 1));

    for (var i = 0, len = tree.length; i < len; i++) {
        tree[i].interpret(context);
    }

    console.log(roman + " = " + context.output);
}


JavaScript Iterator
The Iterator pattern allows clients to effectively loop over a collection of objects.

JavaScript Patterns
Using Iterator
#
A common programming task is to traverse and manipulate a collection of objects. These collections may be stored as an array or perhaps something more complex, such as a tree or graph structure. In addition, you may need to access the items in the collection in a certain order, such as, front to back, back to front, depth first (as in tree searches), skip evenly numbered objects, etc.

The Iterator design pattern solves this problem by separating the collection of objects from the traversal of these objects by implementing a specialized iterator.

Today, many languages have Iterators built-in by supporting 'for-each'-type constructs and IEnumerable and IEnumerator interfaces. However, JavaScript only supports basic looping in the form of for, for-in, while, and do while statements.

The Iterator pattern allows JavaScript developers to design looping constructs that are far more flexible and sophisticated.

Diagram
#
Diagram JavaScript Iterator Design Pattern
Participants
#
The objects participating in this pattern are:

Client -- In example code: the run() function
references and invokes Iterator with collection of objects
Iterator -- In example code: Iterator
implements iterator interface with methods first(), next(), etc
keeps track of current position when traversing collection
Items -- In example code: Items
individual objects of the collection being traversed
Example
#
The Iterator object maintains a reference to the collection and the current position. It also implements the 'standard' Iterator interface with methods like: first, next, hasNext, reset, and each.

Two looping methods are used: a built-in for loop and a newly created each method. The for loop uses the first, hasNext, and next methods to control the iteration. The each method does internally exactly the same (i.e. runs a for loop), but to the client the syntax has been greatly simplified.


 copy
var Iterator = function (items) {
    this.index = 0;
    this.items = items;
}

Iterator.prototype = {
    first: function () {
        this.reset();
        return this.next();
    },
    next: function () {
        return this.items[this.index++];
    },
    hasNext: function () {
        return this.index <= this.items.length;
    },
    reset: function () {
        this.index = 0;
    },
    each: function (callback) {
        for (var item = this.first(); this.hasNext(); item = this.next()) {
            callback(item);
        }
    }
}

function run() {

    var items = ["one", 2, "circle", true, "Applepie"];
    var iter = new Iterator(items);

    // using for loop

    for (var item = iter.first(); iter.hasNext(); item = iter.next()) {
        console.log(item);
    }
    console.log("");

    // using Iterator's each method

    iter.each(function (item) {
        console.log(item);
    });
}


JavaScript Mediator
The Mediator pattern provides central authority over a group of objects by encapsulating how these objects interact. This model is useful for scenarios where there is a need to manage complex conditions in which every object is aware of any state change in any other object in the group.

JavaScript Patterns
Using Mediator
#
The Mediator patterns are useful in the development of complex forms. Take for example a page in which you enter options to make a flight reservation. A simple Mediator rule would be: you must enter a valid departure date, a valid return date, the return date must be after the departure date, a valid departure airport, a valid arrival airport, a valid number of travelers, and only then the Search button can be activated.

Another example of Mediator is that of a control tower on an airport coordinating arrivals and departures of airplanes.

Diagram
#
Diagram JavaScript Mediator Design Pattern
Participants
#
The objects participating in this pattern are:

Mediator -- In example code: Chatroom
defines an interface for communicating with Colleague objects
maintains references to Colleague objects
manages central control over operations
Colleagues -- In example code: Participants
objects that are being mediated by the Mediator
each instance maintains a reference to the Mediator
Example
#
In the example code we have four participants that are joining in a chat session by registering with a Chatroom (the Mediator). Each participant is represented by a Participant object. Participants send messages to each other and the Chatroom handles the routing.

This example is simple, but other complex rules could have been added, such as a 'junk filter' to protect participants from receiving junk messages.


 copy
var Participant = function (name) {
    this.name = name;
    this.chatroom = null;
};

Participant.prototype = {
    send: function (message, to) {
        this.chatroom.send(message, this, to);
    },
    receive: function (message, from) {
        console.log(from.name + " to " + this.name + ": " + message);
    }
};

var Chatroom = function () {
    var participants = {};

    return {

        register: function (participant) {
            participants[participant.name] = participant;
            participant.chatroom = this;
        },

        send: function (message, from, to) {
            if (to) {                      // single message
                to.receive(message, from);
            } else {                       // broadcast message
                for (key in participants) {
                    if (participants[key] !== from) {
                        participants[key].receive(message, from);
                    }
                }
            }
        }
    };
};

function run() {

    var yoko = new Participant("Yoko");
    var john = new Participant("John");
    var paul = new Participant("Paul");
    var ringo = new Participant("Ringo");

    var chatroom = new Chatroom();
    chatroom.register(yoko);
    chatroom.register(john);
    chatroom.register(paul);
    chatroom.register(ringo);

    yoko.send("All you need is love.");
    yoko.send("I love you John.");
    john.send("Hey, no need to broadcast", yoko);
    paul.send("Ha, I heard that!");
    ringo.send("Paul, what do you think?", paul);
}


JavaScript Memento
The Memento pattern provides temporary storage as well as restoration of an object. The mechanism in which you store the object’s state depends on the required duration of persistence, which may vary.

JavaScript Patterns
Using Memento
#
You could view a database as an implementation of the Memento design pattern in which objects are persisted and restored. However, the most common reason for using this pattern is to capture a snapshot of an object’s state so that any subsequent changes can be undone easily if necessary.

Essentially, a Memento is a small repository that stores an object’s state. Scenarios in which you may want to restore an object into a state that existed previously include: saving and restoring the state of a player in a computer game or the implementation of an undo operation in a database.

In JavaScript Mementos are easily implemented by serializing and de-serializing objects with JSON.

Diagram
#
Diagram JavaScript Memento Design Pattern
Participants
#
The objects participating in this pattern are:

Originator -- In example code: Person
implements interface to create and restore mementos of itself
    -- in example code: hydrate and dehydrate
the object which state is temporary being saved and restored
Memento -- In example code: JSON representation of Person
internal state of the Originator object in some storage format
CareTaker -- In example code: CareTaker
responsible for storing mementos
just a repository; does not make changes to mementos
Example
#
The example code creates two persons named Mike and John are created using the Person constructor function. Next, their mementos are created which are maintained by the CareTaker object.

We assign Mike and John bogus names before restoring them from their mementos. Following the restoration we confirm that the person objects are back to their original state with valid names.

The Memento pattern itself with CareTaker etc. is rarely used in JavaScript. However, JSON is a highly effective data format that is extremely useful in many different data exchange scenarios.


 copy
var Person = function (name, street, city, state) {
    this.name = name;
    this.street = street;
    this.city = city;
    this.state = state;
}

Person.prototype = {

    hydrate: function () {
        var memento = JSON.stringify(this);
        return memento;
    },

    dehydrate: function (memento) {
        var m = JSON.parse(memento);
        this.name = m.name;
        this.street = m.street;
        this.city = m.city;
        this.state = m.state;
    }
}

var CareTaker = function () {
    this.mementos = {};

    this.add = function (key, memento) {
        this.mementos[key] = memento;
    },

        this.get = function (key) {
            return this.mementos[key];
        }
}

function run() {

    var mike = new Person("Mike Foley", "1112 Main", "Dallas", "TX");
    var john = new Person("John Wang", "48th Street", "San Jose", "CA");
    var caretaker = new CareTaker();

    // save state

    caretaker.add(1, mike.hydrate());
    caretaker.add(2, john.hydrate());

    // mess up their names

    mike.name = "King Kong";
    john.name = "Superman";

    // restore original state

    mike.dehydrate(caretaker.get(1));
    john.dehydrate(caretaker.get(2));

    console.log(mike.name);
    console.log(john.name);
}


JavaScript Observer
The Observer pattern offers a subscription model in which objects subscribe to an event and get notified when the event occurs. This pattern is the cornerstone of event driven programming, including JavaScript. The Observer pattern facilitates good object-oriented design and promotes loose coupling.

JavaScript Patterns
Using Observer
#
When building web apps you end up writing many event handlers. Event handlers are functions that will be notified when a certain event fires. These notifications optionally receive an event argument with details about the event (for example the x and y position of the mouse at a click event).

The event and event-handler paradigm in JavaScript is the manifestation of the Observer design pattern. Another name for the Observer pattern is Pub/Sub, short for Publication/Subscription.

Diagram
#
Diagram JavaScript Observer Design Pattern
Participants
#
The objects participating in this pattern are:

Subject -- In example code: Click
maintains list of observers. Any number of Observer objects may observe a Subject
implements an interface that lets observer objects subscribe or unsubscribe
sends a notification to its observers when its state changes
Observers -- In example code: clickHandler
has a function signature that can be invoked when Subject changes (i.e. event occurs)
Example
#
The Click object represents the Subject. The clickHandler function is the subscribing Observer. This handler subscribes, unsubscribes, and then subscribes itself while events are firing. It gets notified only of events #1 and #3.

Notice that the fire method accepts two arguments. The first one has details about the event and the second one is the context, that is, the this value for when the eventhandlers are called. If no context is provided this will be bound to the global object (window).


 copy
function Click() {
    this.handlers = [];  // observers
}

Click.prototype = {

    subscribe: function (fn) {
        this.handlers.push(fn);
    },

    unsubscribe: function (fn) {
        this.handlers = this.handlers.filter(
            function (item) {
                if (item !== fn) {
                    return item;
                }
            }
        );
    },

    fire: function (o, thisObj) {
        var scope = thisObj || window;
        this.handlers.forEach(function (item) {
            item.call(scope, o);
        });
    }
}

function run() {

    var clickHandler = function (item) {
        console.log("fired: " + item);
    };

    var click = new Click();

    click.subscribe(clickHandler);
    click.fire('event #1');
    click.unsubscribe(clickHandler);
    click.fire('event #2');
    click.subscribe(clickHandler);
    click.fire('event #3');
}


JavaScript State
The State pattern provides state-specific logic to a limited set of objects in which each object represents a particular state. This is best explained with an example.

JavaScript Patterns
Using State
#
Say a customer places an online order for a TV. While this order is being processed it can in one of many states: New, Approved, Packed, Pending, Hold, Shipping, Completed, or Canceled. If all goes well the sequence will be New, Approved, Packed, Shipped, and Completed. However, at any point something unpredictable may happen, such as no inventory, breakage, or customer cancelation. If that happens the order needs to be handled appropriately.

Applying the State pattern to this scenario will provide you with 8 State objects, each with its own set of properties (state) and methods (i.e. the rules of acceptable state transitions). State machines are often implemented using the State pattern. These state machines simply have their State objects swapped out with another one when a state transition takes place.

Two other examples where the State pattern is useful include: vending machines that dispense products when a correct combination of coins is entered, and elevator logic which moves riders up or down depending on certain complex rules that attempt to minimize wait and ride times.

Diagram
#
Diagram JavaScript State Design Pattern
Participants
#
The objects participating in this pattern are:

Context -- In example code: TrafficLight
exposes an interface that supports clients of the service
maintains a reference to a state object that defines the current state
allows State objects to change its current state to a different state
State -- In example code: Red, Yellow, Green
encapsulates the state values and associated behavior of the state
Example
#
Our example is a traffic light (i.e. TrafficLight object) with 3 different states: Red, Yellow and Green, each with its own set of rules. The rules go like this: Say the traffic light is Red. After a delay the Red state changes to the Green state. Then, after another delay, the Green state changes to the Yellow state. After a very brief delay the Yellow state is changed to Red. And on and on.

It is important to note that it is the State object that determines the transition to the next state. And it is also the State object that changes the current state in the TrafficLight -- not the TrafficLight itself.

For demonstration purposes, a built-in counter limits the number of state changes, or else the program would run indefinitely.


 copy
var TrafficLight = function () {
    var count = 0;
    var currentState = new Red(this);

    this.change = function (state) {
        // limits number of changes
        if (count++ >= 10) return;
        currentState = state;
        currentState.go();
    };

    this.start = function () {
        currentState.go();
    };
}

var Red = function (light) {
    this.light = light;

    this.go = function () {
        console.log("Red --> for 1 minute");
        light.change(new Green(light));
    }
};

var Yellow = function (light) {
    this.light = light;

    this.go = function () {
        console.log("Yellow --> for 10 seconds");
        light.change(new Red(light));
    }
};

var Green = function (light) {
    this.light = light;

    this.go = function () {
        console.log("Green --> for 1 minute");
        light.change(new Yellow(light));
    }
};

function run() {

    var light = new TrafficLight();
    light.start();
}


JavaScript Strategy
The Strategy pattern encapsulates alternative algorithms (or strategies) for a particular task. It allows a method to be swapped out at runtime by any other method (strategy) without the client realizing it. Essentially, Strategy is a group of algorithms that are interchangeable.

JavaScript Patterns
Using Strategy
#
Say we like to test the performance of different sorting algorithms to an array of numbers: shell sort, heap sort, bubble sort, quicksort, etc. Applying the Strategy pattern to these algorithms allows the test program to loop through all algorithms, simply by changing them at runtime and test each of these against the array. For Strategy to work all method signatures must be the same so that they can vary without the client program knowing about it.

In JavaScript the Strategy pattern is widely used as a plug-in mechanism when building extensible frameworks. This can be a very effective approach. To learn more check our Dofactory JS.

Diagram
#
Diagram JavaScript Strategy Design Pattern
Participants
#
The objects participating in this pattern are:

Context -- In example code: Shipping
maintains a reference to the current Strategy object
supports interface to allow clients to request Strategy calculations
allows clients to change Strategy
Strategy -- In example code: UPS, USPS, Fedex
implements the algorithm using the Strategy interface
Example
#
In this example we have a product order that needs to be shipped from a warehouse to a customer. Different shipping companies are evaluated to determine the best price. This can be useful with shopping carts where customers select their shipping preferences and the selected Strategy returns the estimated cost.

Shipping is the Context and the 3 shipping companies UPS, USPS, and Fedex are the Strategies. The shipping companies (strategies) are changed 3 times and each time we calculate the cost of shipping. In a real-world scenario the calculate methods may call into the shipper's Web service. At the end we display the different costs.


 copy
var Shipping = function () {
    this.company = "";
};

Shipping.prototype = {
    setStrategy: function (company) {
        this.company = company;
    },

    calculate: function (package) {
        return this.company.calculate(package);
    }
};

var UPS = function () {
    this.calculate = function (package) {
        // calculations...
        return "$45.95";
    }
};

var USPS = function () {
    this.calculate = function (package) {
        // calculations...
        return "$39.40";
    }
};

var Fedex = function () {
    this.calculate = function (package) {
        // calculations...
        return "$43.20";
    }
};

function run() {

    var package = { from: "76712", to: "10012", weigth: "lkg" };

    // the 3 strategies

    var ups = new UPS();
    var usps = new USPS();
    var fedex = new Fedex();

    var shipping = new Shipping();

    shipping.setStrategy(ups);
    console.log("UPS Strategy: " + shipping.calculate(package));
    shipping.setStrategy(usps);
    console.log("USPS Strategy: " + shipping.calculate(package));
    shipping.setStrategy(fedex);
    console.log("Fedex Strategy: " + shipping.calculate(package));
}


JavaScript Template Method
The Template Method pattern provides an outline of a series of steps for an algorithm. Objects that implement these steps retain the original structure of the algorithm but have the option to redefine or adjust certain steps. This pattern is designed to offer extensibility to the client developer.

JavaScript Patterns
Using Template Method
#
Template Methods are frequently used in general purpose frameworks or libraries that will be used by other developer An example is an object that fires a sequence of events in response to an action, for example a process request. The object generates a 'preprocess' event, a 'process' event and a 'postprocess' event. The developer has the option to adjust the response to immediately before the processing, during the processing and immediately after the processing.

An easy way to think of Template Method is that of an algorithm with holes (see diagram below). It is up to the developer to fill these holes with appropriate functionality for each step.

Diagram
#
Diagram JavaScript Template Method Design Pattern
Participants
#
The objects participating in this pattern are:

AbstractClass -- In example code: datastore
offers an interface for clients to invoke the templateMethod
implements template method which defines the primitive Steps for an algorithm
provides the hooks (through method overriding) for a client developer to implement the Steps
ConcreteClass -- In example code: mySql
implements the primitive Steps as defined in AbstractClass
Example
#
This is an example where we use JavaScript's prototypal inheritance. The inherit function helps us establish the inheritance relationship by assigning a base object to the prototype of a newly created descendant object.

The datastore function represents the AbstractClass and mySql represents the ConcreteClass. mySql overrides the 3 template methods: connect, select, and disconnect with datastore-specific implementations.

The template methods allow the client to change datastore (SQL Server, Oracle, etc.) by adjusting (filling in the blanks) only the template methods. The rest, such as, the order of the steps, stays the same for any datastore.


 copy
var datastore = {
    process: function () {
        this.connect();
        this.select();
        this.disconnect();
        return true;
    }
};

function inherit(proto) {
    var F = function () { };
    F.prototype = proto;
    return new F();
}

function run() {
    var mySql = inherit(datastore);

    // implement template steps

    mySql.connect = function () {
        console.log("MySQL: connect step");
    };

    mySql.select = function () {
        console.log("MySQL: select step");
    };

    mySql.disconnect = function () {
        console.log("MySQL: disconnect step");
    };

    mySql.process();
}


JavaScript Visitor
The Visitor pattern defines a new operation to a collection of objects without changing the objects themselves. The new logic resides in a separate object called the Visitor.

JavaScript Patterns
Using Visitor
#
Visitors are useful when building extensibility in a library or framework. If the objects in your project provide a 'visit' method that accepts a Visitor object which can make changes to the receiving object then you are providing an easy way for clients to implement future extensions.

In most programming languages the Visitor pattern requires that the original developer anticipates functional adjustments in the future. This is done by including methods that accept a Visitor and let it operate on the original collection of objects.

Visitor is not important to JavaScript because it offers far more flexibility by the ability to add and remove methods at runtime. To learn more about this flexibility and how it benefits JavaScript patterns and pattern architectures see our Dofactory JS.

Diagram
#
Diagram JavaScript Visitor Design Pattern
Participants
#
The objects participating in this pattern are:

ObjectStructure -- In example code: employees array
maintains a collection of Elements which can be iterated over
Elements -- In example code: Employee objects
defines an accept method that accepts visitor objects
in the accept method the visitor's visit method is invoked with 'this' as a parameter
Visitor -- In example code: ExtraSalary, ExtraVacation
implements a visit method. The argument is the Element being visited. This is where the Element's changes are made
Example
#
In this example three employees are created with the Employee constructor function. Each is getting a 10% salary raise and 2 more vacation days. Two visitor objects, ExtraSalary and ExtraVacation, make the necessary changes to the employee objects.

Note that the visitors, in their visit methods, access the closure variables salary and vacation through a public interface. It is the only way because closures are not accessible from the outside. In fact, salary and vacation are not variables, they are function arguments, but it works because they are also part of the closure.

Notice the self variable. It is used to maintain the current context (stored as a closure variable) and is used in the visit method.

To learn more about these and other more advanced JavaScript concepts check our Dofactory JS.


 copy
var Employee = function (name, salary, vacation) {
    var self = this;

    this.accept = function (visitor) {
        visitor.visit(self);
    };

    this.getName = function () {
        return name;
    };

    this.getSalary = function () {
        return salary;
    };

    this.setSalary = function (sal) {
        salary = sal;
    };

    this.getVacation = function () {
        return vacation;
    };

    this.setVacation = function (vac) {
        vacation = vac;
    };
};

var ExtraSalary = function () {
    this.visit = function (emp) {
        emp.setSalary(emp.getSalary() * 1.1);
    };
};

var ExtraVacation = function () {
    this.visit = function (emp) {
        emp.setVacation(emp.getVacation() + 2);
    };
};

function run() {

    var employees = [
        new Employee("John", 10000, 10),
        new Employee("Mary", 20000, 21),
        new Employee("Boss", 250000, 51)
    ];

    var visitorSalary = new ExtraSalary();
    var visitorVacation = new ExtraVacation();

    for (var i = 0, len = employees.length; i < len; i++) {
        var emp = employees[i];

        emp.accept(visitorSalary);
        emp.accept(visitorVacation);
        console.log(emp.getName() + ": $" + emp.getSalary() +
            " and " + emp.getVacation() + " vacation days");
    }
}


JavaScript Reference
JavaScript specifies a list of keywords that should not be used as names to identify variables, objects, and other elements in the code. In addition, a set of reserved keywords is allocated for future use. These should not be used either.

JavaScript Tutorial
Keywords
#
Below are the JavaScript keywords. These cannot be used as variables, functions, or object identifiers.

 JAVASCRIPT KEYWORDS
break	do	instanceof	typeof
case	else	new	var
catch	finally	return	void
continue	for	switch	while
debugger	function	this	with
default	if	throw	
delete	in	try	
In addition, the literals null, true, and false are reserved for their standard usage.

Reserved Keywords
#
The EcmaScript specification has the following list of words reserved for future use. You should not use these as identifiers in your JavaScript code.

 JAVASCRIPT RESERVED KEYWORDS
class	implements	package	static
enum	import	private	super
export	interface	protected	yield
extends	let	public	








