//** JavaScript Objects **

/*
  A JavaScript Object is a standalone container that holds multiple properties with values and methods (functions). An example is a customer object with firstName, lastName, and email properties, and a sendMessage method.


// Object Literals
01. Object Literals
  A JavaScript object is a collection of properties and methods similar to Hash, Map, or Dictionary in other languages. The name of a property can be any string, including an empty string. The value can be any value, such as a string, boolean, number, and null, but it cannot be undefined. The object's properties can be defined even after you start using the object. But first, let's look at how we create objects in JavaScript.

  The easiest way is to create a new object is with object literal notation which is bracketed by a pair of curly braces: {}. Properties and their values can be added as you go. In the example b elow we create an empty object, using object literal notation, and we are adding two properties after that:

  var rect = {};           // creates an empty object
  rect.width = 20;
  rect.height = 10;

  console.log(rect.width);  // 20
  console.log(rect.height); // 10

  As an alternative you can immediately assign properties and their values in the literal notation.

  var rect = {width: 20, height: 10};
  console.log(rect.width);    // 20
  console.log(rect.height);   // 10

  JavaScript objects are mutable, meaning you can modify their values.

  var rect = {width: 20, height: 10};
  rect.width = 30;                      // modify value

  console.log(rect.width);              // 30
  console.log(rect.height);             // 10

  Property values are not limited to primitive types, like number or string; you can also add properties that are other objects, including functions. When a function is added to an object it is called a method.

  var rect = {width: 20, height: 10};

  // add new object
  rect.color = {red: 0, green: 255, blue: 128};

  // add new method
  rect.getArea = function() {
    return this.width * this.height;
  };

  console.log(rect.color.red);        // 0
  console.log(rect.color.green);      // 255
  console.log(rect.color.blue);       // 128
  console.log(rect.getArea());        // 200

  You can define objects and all their member properties and methods in a single statement as object literal. Below we create a rectangle with two numeric properties, one object property, and a method.

  var rect = {
    width: 20,
    height: 10,
    color: {red: 0, green: 255, blue: 128},     // object property
    getArea: function() {
      return this.width * this.height;
    }
  };

  console.log(rect.widht);            // 20
  console.log(rect.height);           // 10
  console.log(rect.color.red);        // 0
  console.log(rect.color.green);      // 255
  console.log(rect.color.blue);       // 128
  console.log(rect.getArea());        // 200



// Object Properties
02. Object Properties

  In this section we look at accessing, retrieving, and deleting object properties.

  ** Accessing properties **
  Property values can be retrieved in one of two ways; dot notation and bracket notation. Below are examples of each:

  var rect = {width: 20, height: 10};
  console.log(rect.width);                // 20 ( dot notation )
  console.log(rect["width"]);             // 20 ( bracket notation )

  Dot notation is used more often because it is easier to read and more compact. So when would you use bracket notation? Square brackets allow you to use property names that are not valid identifiers and don't work with dot notation, for example when they have spaces in them or start with a number. Also, bracket notation allows you to use property names that are variables. Examples of both are below:

  var shape = {
    "bounding box width": 20,
    "bounding box height": 10,
    side1: 5,
    side2: 15,
    side3: 25,
    side4: 7,
    side5: 15
  };

  // could not be done with dot notation
  console.log(shape["bounding box width"])        // 20

  for (var i = 1; i < 6; i++) {
    var prop = "side" + i;                      // side1, side2... ( variable property name)
    console.log(shape[prop]);                   // 5, 15, 25, 7, 12
  }

  var property = "side1";
  console.log(shpae.property);              // undefined ( dot notation does not work )
  The last two statements are included to demonstrate that dot notation does not work with the property being a variable.



// Property Names
03. Property Names
  To get a list of property names from an object use the for-in loop.

  var car = {make: "Toyota", model: "Camry"};
  
  for (var prop in car) {
    // make: Toyota, and model: Camry
    console.log(prop + ": " + car[prop]);
  };

  The for-in loop returns all members of the object, that is, all properties and methods. If you don't need certain members or data types, you can exclude these from enumeration using the typeof operator. In the example below we skip functions.

  var car = {
    make: "Toyota",
    model: "Camry",
    print: function() {
      console.log(this.make + " " + this.model);
    }
  };

  for (var prop in car) {   // for ... in (loop)
    if(typeof car[prop] !== "function") {
      console.log(prop);                   // make, and model
    }
  }

  Be aware that the order in which the properties are returned by a for-in loop is not guaranteed. If order is important you will need to manage your own list of properties (probably as an internal array).


// Deleting Properties
04. Deleting Properties

  Use the delete operator to remove a property from an object, like so:
  
  var circle = {radius: 8};
  console.log(circle.radius);           // 8
  console.log(delete circle.radius);    // true
  console.log(circle.radius);           // undefined



// Constructor Ffunctions
05. Constructor Ffunctions

  Object literal notation, such as var x = {}, is preferred if all you need is a single object and there is no need for multiple instances. However, if you need multiple instances, it is better to use a constructor function. Here is an example of a book constructor function.

  function Book(isbn) {
    this.isbn = isbn;
    this.getIsbn = function() {
      return "Isbn is " + this.isbn;
    }
  }

  Properties, including methods, are assigned to the 'this' value in the function's body. In the above example a property and a function are assigned. Also notice that this function is capitalized (i.e. Book); constructor functions are capitalized by convention in JavaScript

  To create a new object with this function you use the new operator followed by a function invocation. A function that is invoked this way is called a constructor function whose main purpose is to create and initialize a new object. Here we are creating a new book object:

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

  function Book(isbn) {
    this.isbn = isbn;
  }

  Book.prototype.getIsbn = function () {
    return "Isbn is " + this.isbn;
  };

  var book = new Book("901-3865");

  console.log(book.getIsbn());    // => Isbn is 901-3865


*/


const tokensDark = {
  grey: {
    0: "#ffffff",
    10: "#f6f6f6",
    50: "#f0f0f0",
    100: "#e0e0e0",
  },
  primary: {
    //blue
    100: "#d3d4de",
    200: "#a6a9be",
    300: "#7a7f9d",
  },
  secondary: {
    //yellow:
    50: "#f0f0f0",
    100: "#fff6e0",
    200: "#ffedc2",
  },
};

const another =(mode)=> {
    return {
        mode: mode,
        pallete: {
            ...(mode === 'dark' ? {
                ...tokensDark,
                main: tokensDark.grey[0]
            }: {
                ...tokensDark,
                default: tokensDark.secondary[50]
            })
        } 
    }
}

/*
console.log(another('dark'));
{
  mode: 'dark',
  pallete: {
    grey: {
      '0': '#ffffff',
      '10': '#f6f6f6',
      '50': '#f0f0f0',
      '100': '#e0e0e0'
    },
    primary: { '100': '#d3d4de', '200': '#a6a9be', '300': '#7a7f9d' },
    secondary: { '50': '#f0f0f0', '100': '#fff6e0', '200': '#ffedc2' },
    main: '#ffffff'
  }
}
*/

/*
console.log(another('light'));
{
  mode: 'light',
  pallete: {
    grey: {
      '0': '#ffffff',
      '10': '#f6f6f6',
      '50': '#f0f0f0',
      '100': '#e0e0e0'
    },
    primary: { '100': '#d3d4de', '200': '#a6a9be', '300': '#7a7f9d' },
    secondary: { '50': '#f0f0f0', '100': '#fff6e0', '200': '#ffedc2' },
    default: '#f0f0f0'
  }
}
*/

// object can be found in another function if you destructure it 
const myFuncWithObj = () => {
    return {
        pallete: {
            ...tokensDark,
            main: tokensDark.grey[0],
            default: tokensDark.secondary[50]
        }
    }
}
/*
console.log(myFuncWithObj());
{
  pallete: {
    grey: {
      '0': '#ffffff',
      '10': '#f6f6f6',
      '50': '#f0f0f0',
      '100': '#e0e0e0'
    },
    primary: { '100': '#d3d4de', '200': '#a6a9be', '300': '#7a7f9d' },
    secondary: { '50': '#f0f0f0', '100': '#fff6e0', '200': '#ffedc2' },
    main: '#ffffff',
    default: '#f0f0f0'
  }
}
*/




// JavaScript Advanced Objects
/*
01. Namespaces
  Unlike many other languages, JavaScript does not support namespaces. Namespaces are important because they help reduce the number of identifiers for variables, objects, and functions that are added to the global scope in your application. JavaScript is a flexible language and there are ways to work around this limitation and implement your own namespaces. First, let's explore the need for namespaces a bit more.

  In JavaScript, all the code shares a single global namespace which is simply a single global object that holds all global variables and functions as properties. In the browser this is the window object. This tends to pollute the global scope if you have many objects. In the example below, num, obj, str, total, numr, and sum are all added to the global object

  var num = 5;
  var obj = {};
  var str = "Good Morning"

  function sum(x, y) {
    total = x + y;
    return total;
  }

  numr = sum(4, 3);

  Anything that is not properly declared, such as undeclared function variables, also ends up on the global object. In the example above, the identifiers num, obj, str, and sum are properly declared using the var keyword, but the function scoped variable total is missing a var and numr is a misspelling of num. JavaScript will add both total and numr to the global name space, which most likely is not what you want.

  Suppose that your web app includes a third party JavaScript library that creates beautifully animated buttons. You deploy your app and the next thing you know is there are complaints from a client: they don't want 125,000 teddy bears. You start investigating and after many hours of intense pressure you discover that the animation library uses a global variable named number to iterate over the animations. But you also use number to hold the number of items ordered in a shopping cart. This is an example of a name collision. Name collisions can create bugs that are often very hard to trace.

  Name collisions can be a significant problem in JavaScript. So, how do you avoid this? A quick and easy solution is offered by the Namespace Design Pattern. You create a single global object for your application and add all your variables and functions to this object. This allows you to namespace your code, make things tidier, and significantly reduce your chances of naming conflicts with third-party JavaScript libraries, widgets, etc.

  Note that the namespace name itself is added to the global scope, so it is best that you create a unique name. Our example below uses MYAPP in uppercase, to emphasize the namespace.

  var MYAPP = {};         // our unique namespace
  MYAPP.num = 5;
  MYAPP.obj = {};
  MYAPP.str = "Good Morning";
  MYAPP.sum = function(x, y){
    var total = x + y;
    return total;
  }

  MYAPP.num = MYAPP.sum(4, 3)


// Modules
02. Modules
  Java (not JavaScript) has a keyword called package that provides a way to group semantically-related classes. This helps in the organization of a large number of classes. For instance, in a graphical drawing application, Ellipse, Rectangle, and Polygon are logically-related classes. So you'd like to bundle these in the same package called Draw. Unlike Java, JavaScript does not provide any special keyword for packages.

  The solution in JavaScript is to build modules in which to organize your code. What is a module? A module is a self-contained piece of code that groups semantically-related variables and functions. Modules are not built-in constructs in JavaScript, but the JavaScript Module Pattern provides a way to create modules which have well-defined interfaces that are exposed to clients of the module.

  An important advantage of modules is that the internal functionality can be modified whenever necessary without affecting the rest of your program. This promotes encapsulation and information hiding.

  To define a module in JavaScript, you take advantage of anonymous closures by creating an anonymous immediate function. That is a mouthful, but in reality it is not too complicated. Once you've seen a few modules, you'll understand how they work.

  Here is the outline of a module:
  
  var MODULE = (function() {
    var module = {};
    var privateVariable = 4;
    function privateMethod() {
      // ..
    };
    return module;
  }())
  This is a simple but good example that demonstrates the principles of building JavaScript modules. The anonymous immediate function is the function wrapped in parentheses, like so (function() { … })(). It is anonymous because it has no name, and it is immediate because when JavaScript encounters it, it gets executed immediately and its return value is assigned to MODULE.

  The function's variables privateVariable and privateMethod are private to the function meaning that external code has no access to these variables. The moduleProperty and moduleMethod are part of the module object which is returned, so that part is public in the sense that outside code will have access to these properties.

  Modules are fundamental to building modern JavaScript applications. Unfortunately, a full discussion of the Module pattern is beyond the scope of this tutorial. To learn more you will find a solid review of the Module pattern with plenty of examples in our Dofactory JS. To learn more


// Chaining
03. Chaining

  JavaScript allows you to invoke multiple methods on an object in a single expression. This is called chaining and is accomplished by stringing the method calls together with dots between them, like so:

  object.method1().method2().method3()

  JavaScript allows you to invoke multiple methods on an object in a single expression. This is called chaining and is accomplished by stringing the method calls together with dots between them, like so:

  object.method1().method2().method3();

  When building a chain the object is named only once and then multiple methods are called on it. For this to work, your methods must return the object that they operate on. Each method works on the object and when it is done it returns it to the next call. This gives rise to a chain of method calls in a single expression.

  Here is a real-world example of a banking account in which the account number, the balance, and a line of credit are set:

  account.number("01022290").setBalance(19130).applyCredit(10000);

  Chaining in JavaScript can improve performance as well as readability.


// Closures
04. Closures

  Unlike most object-oriented programming languages, JavaScript does not support access modifiers such as, private, protected, and public to specify the accessibility of properties and methods in objects. In JavaScript, all object members are public. In the following example, both the author property and the getAuthor() method are public and therefore can be accessed from anywhere in the program.

  var book = {
    author: "James Joyce",
    getAuthor: function() {
      return this.author;
    }
  };

  console.log(book.author);       // James Joyce (public property)
  console.log(book.getAuthor());    // James Joyce (public method)

  You may think that this is because we are using an object literal to create the book instance. However, creating an instance using a Book constructor function will also result in public properties and public methods as the following example demonstrates.

  function Book() {
    this.author = "James Joyce";
    this.getAuthor = function() {
      return this.author;
    }
  }

  var book = new Book();
  console.log(book.auther);       // James Joyce (public property)
  console.log(book.getAuthor());    // James Joyce (public method)

  With object members being so exposed, is there perhaps a way to protect these in JavaScript? The answer is yes, by using function closures.

  Going back to the Book example, the objective is to keep the author data private without exposing it to the outside world. The way to do this is to define an author variable within the function. The functions closure ensures that it is only accessible within the function's scope. So, instead of assigning author to this, you create a local variable called author.

  function Book() {
    var author = "James Joyce";      // private
    this.getAuthor = function() {   // privileged method
      return author;
    }
  }

  var book = new Book();
  console.log(book.author)          // undefined (i.e. private)
  console.log(book.getAuthor())       // "James Joyce"

  Closure is an important and powerful concept in JavaScript. Here it allows us to keep author private. The getAuthor() method is called a privileged method because it has access to the private author variable and is itself accessible to the outside world as a public method on the book instance.


// Object Literals
05. Object Literals

  You can achieve the same privacy level by using an anonymous immediate function. An immediate function is wrapped in brackets and executes immediately. The example below demonstrates enclosure with an immediate function. The function's closure maintains the value of author. Furthermore, notice that the book object is created with object literal notation.

  var book;                       // public object declaration

  (function() {                   // anonymous immediate function 
    var author = "James Joyce";   // private member
    book = {
      getAuthor: function() {     // privileged method
        return author;
      }
    };
  }());

  console.log(book.author);       // undefined (author is private)
  console.log(book.getAuthor())   // "James Joyce" (privileged method)

  Similar to the earlier example, the getAuthor() method is also privileged with privileged access to the local private variable author.
  Anonymous immediate functions are frequently used in modern JavaScript applications.
  
  

// Sharing Private Members
06. Sharing Private Members

  Suppose you have a variable that is common to all object instances, but you want to keep that private. In other languages you would create a static variable. Unfortunately, JavaScript does not support static or class variables.

  You can obtain similar results in JavaScript by adding the common (i.e. shared) members to the prototype property of the constructor. In the example below, the label variable is shared among all the object instances created using the Book() constructor function. The label property is only accessible through the getLabel() prototype method.

  function Book(author) {
    var author = author;          // private instance variable
    this.getAuthor = function() {
      return author;              // privileged instance method
    };
  }

  Book.prototype = (function() {
    var label = "Author: ";       // private prototype variable
    return {
      getLabel: function() {      // privileged prototype method
        return label;
      }
    };
  }());

  var book1 = new Book("James Joyce");
  console.log(book1.getLabel() + book1.getAuthor());  // Author: James Joyce

  var book2 = new Book("Virginia Woolf");
  console.log(book2.getLabel() + book2.getAuthor());  // Author: Virginia Woolf

  Prototype functions are shared by all object instances. They are often used because it removes the need to create a function for each instance which saves memory and performs better. It is important to note that prototype functions have only access to prototype variables and not to private variables, such as the author variable in the example above.



// Privacy
07. Privacy

  In the example above, the private variable author is a string. However, if author was an object, then the getAuthor method would return it by reference to the outside world (remember that primitive variables are passed by value and objects are passed by reference). Directly returning a private object reference from a privileged method essentially cancels privacy. Anyone can now make changes to the author object. Let's look at an example.

  function Book(author, price) {
    var details = {
      "author": author,
      "price": price
    };
    this.getDetails = function() {      // anti pattern
      return details;                   // returns reference to details
    };
  }

  var book = new Book("James Joyce", "29.50");
  var bookDetails = book.getDetails();

  console.log(book.getDetails().author);  // James Joyce
  console.log(book.getDetails().price);   // 29.50

  bookDetails.author = "Jane Austen";     // modifies private data
  bookDetails.price = "99.95";

  console.log(book.getDetails().author);  // Jane Austen
  console.log(book.getDetails().price);   // 99.95

  Although the details variable is private, the method getDetails() passes it by reference to the code outside the object. Therefore it is exposed to modification by clients of the Book which is shown in the last four statements in which both the author and price are updated.

  One possible solution would be to clone the details object in the getAuthor() method and then return the clone. Alternatively you could return a new object that contains only those properties of the details object that the outside code is interested in and return it.
/*
