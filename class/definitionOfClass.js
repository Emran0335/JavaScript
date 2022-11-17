// Classes
// JavaScript is an object oriented programming language. Everything in JavaScript is an object, with its properties and methods. We create class to create an object. A Class is like an object constructor, or a "Blueprint" for creating objects. We instantiate a class create an object. The class defines attributes and the behavior of the object, while the object, on the other hand, represents the class.

// Once we create a class, we can create object from it whenever we want. Creating an object from a class is called class instantiation.

// In the object section, we saw how to create an object literal. Object literal is a singleton. If we want to get a similar object, we have to write it. However, class allows to create many objects. This helps to reduce amount of code and repetition of code.

// Defining a Classes

// To define a class in JavaScript, we need the keyword class. The name of a class in CamelCase and block code(two curly brackets). Let us create a class name Person.

/*
syntax
class ClassName {
    code goes here
}

class Person {
    // code goes here.
}
*/
// We have already created an Person class but it does not have any thing inside it.


// Class Instantiation
// Instantiation class means creating an object from a class. We need the keyword new and we call the name of the class after the keyword new.
// Let us create a dog object from our Person class.

/*
const person = new Person()
console.log(person); // Person {}
*/

// we have already created person object. Since the class did not have any properties yet, the object is also empty.

// Let us use the class constructor to pass different properties for the class.

// Class Constructor
// The constructor is a built-in function which allows us to create a blueprint for our object. The constructor function starts with a keyword constructor followed by a parenthesis. Inside the parenthesis, we pass the properties of the object as parameter. We use the (this) keyword to attach the constructor parameters with the class.

// The following Person class constructor has firstName and lastName property. These properties are attached to the Person class using (this) keyword. This (this) keyword refers to the class itself.

class Person {
  constructor(firstName, lastName) {
    console.log(this); // Perosn {}
    this.firstName = firstName;
    this.lastName = lastName;
  }
}

const person = new Person();
console.log(person);  // Perosn { firstName: undefined, lastName: undefined }
// All the keys of the object are undefined. Whenever we instantiate, we should pass the value of the properties. Let us pass values at this time when we instantiate the class.

class PersonClass {
  constructor(firstName, lastName) {
    console.log(this); // PersonClass {}

    this.firstName = firstName;
    this.lastName = lastName;
  }
}

const person1 = new PersonClass('Emran', 'Hossain')
console.log(person1); // PersonClass { firstName: 'Emran', lastName: 'Hossain' }

// We have stated at the very beginning that onece we create a class, we can create many objects using the class. Now, let us create many objects using the PersonClass class.
const person2 = new PersonClass('Mahabub', 'Rony')
const person3 = new PersonClass('Nusaiba', 'Sadifa')
const person4 = new PersonClass('Asraful', 'Alam')
console.log(person2); // PerosnClass {firstName: 'Mahabub', lastName: 'Rony'}
console.log(person3); // PerosnClass {firstName: 'Nusaiba', lastName: 'Sadifa'}
console.log(person4); // PerosnClass {firstName: 'Asraful', lastName: 'Alam'}

// Using the class PersonClass, we created three person objects. We did not use many properties in our PersonClass. Let us use more properties in it.

class PersonClassAgain  {
    constructor(firstName, lastName, age, country, city) {
      console.log(this); // PersonClassAgain {}

      this.firstName = firstName;
      this.lastName = lastName;
      this.age = age;
      this.country = country;
      this.city = city;
    }
}
const personAgain = new PersonClassAgain('Emran', 'Hossain', 34, 'Bangladesh', 'Dhaka')
console.log(personAgain); // PersonClassAgain {firstName: 'Emran',lastName: 'Hossain', age: 34,country: 'Bangladesh', city: 'Dhaka'}

// Default Values With Constructor
// The constructor function properties may have a default value like other regular functions.

class PersonClassWithDefaultValue  {
    constructor(
        firstName = 'Emran',
        lastName = 'Hossain',
        age = 32,
        country = 'Bangladesh',
        city = 'Dhaka'
    ) {
        this.firstName = firstName
        this.lastName = lastName
        this.age = age
        this.country = country
        this.city = city
    }
}
const personWithDefaultValue = new PersonClassWithDefaultValue() // it will take the default values.
console.log(personWithDefaultValue); // PersonClassAgain {firstName: 'Emran',lastName: 'Hossain', age: 34,country: 'Bangladesh', city: 'Dhaka'}
const personWithGivenValue = new PersonClassWithDefaultValue('Asraful', 'Alam', 28, 'Bangladesh', 'Dhaka')
console.log(personWithGivenValue); //PersonClassWithDefaultValue{firstName: 'Asraful', lastName: 'Alam', age: 28, country: 'Bangladesh',city: 'Dhaka'}