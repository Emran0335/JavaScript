
// function NewObj(firstName, lastName, age) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.age = age;
// }

// let getObj = new NewObj("Emran", "Hossain", 34);

// console.log(getObj.firstName + " " + getObj.lastName);
// // delete getObj.firstName;
// console.log(getObj.firstName + " " + getObj.lastName);


// for (let prop in getObj) {
//     console.log("Property name: " + prop + ", value: " + getObj[prop] + " type: " +typeof getObj[prop]);
// }

// function say(name) {
//     console.log("Hello", name);
// }

// console.log(typeof say);
// console.log(say instanceof Object);    // true

// say.volume = "hight"
// // console.log(say.volume);
// console.log(say);   // [Function: say] { volume: 'hight' }

// let anotherObj = new NewObj()
// console.log(anotherObj);

function Book(title, author) {
    this.title = title;
    this.author = author;

    this.details = function() {
        return this.title + "by" + this.author;
    }
}

console.log(Book.prototype); // {}-> object


let book  = new Book("Ulysses", "James Joyce");
console.log(book);


function Rectangle(width, height) {
    this.width = width;
    this.height = height;
}

Rectangle.prototype.area = function() {
    return this.width * this.height;
}

let r1 = new Rectangle(10,12)
let r2 = new Rectangle(10,15)

console.log(r1.area());    // 120
console.log(r2.area());     // 150


let date = new Date();
let today = date.getDay();
console.log(today);


function Person(n) {
    let name = n;

    this.__defineGetter__("name", function() { // getter()
        return name;
    })

    this.__defineSetter__("name", function(val) {
        name = val;
    })
}

let person = new Person("Emran"); 
console.log(person.name);  // Emran using getter()

person.name = "Farzana"   // to use setter()
console.log(person.name);


let car = {};
// console.log(typeof Object);

Object.defineProperty(car, "wheels", {
    value: 4,
    writable: false,  // if it is true
    enumerable: true,
    configurable: false
});

console.log(car.wheels); // 4

car.wheels = 3; // writeable is not true, so 3 cannot be assigned
console.log(car.wheels);  // 4

for (let prop in car) {
    console.log(prop); // as enumerable is true
}

delete car.wheels // not allowed as configurable is false

let rect = {};
rect.width = 10;
rect.height = 8;

if(Object.isExtensible(rect)) {
    rect.newProperty = 12;
    console.log(rect);
}

if(Object.preventExtensions(rect)) {
    rect.anotherProperty = 10  // prevent to property
    rect.height = 6
    console.log(rect);
}


let employee = {
    firstName: "Emran",
    lastName: "Hossain"
}

Object.seal(employee);
console.log(Object.isSealed(employee)); // true

employee.firstName = "Imran"   // okay
console.log(employee);


console.log(eval());







