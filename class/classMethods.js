// The constructor inside a class is a built-in function which allows us to create a blueprint for the object. In a class, we can create methods. Methods are JavaScript functions inside the class. Let us create some class methods.

class Person {
    constructor(fisrtName, lastName, age, country, city) {
        this.fisrtName = fisrtName
        this.lastName = lastName
        this.age = age
        this.country = country
        this.city = city
    }

    getFullName() {
        const fullName = this.fisrtName + " " + this.lastName
        return fullName
    }
}

const person1 = new Person('Emran', 'Hossain', 32, 'Bangladesh', 'Dhaka')
const person2 = new Person('Ruhul', 'Amin', 40, 'Bangladesh', 'Dhaka')
console.log(person1); // Person{fisrtName: 'Emran',lastName: 'Hossain', age: 32,country: 'Bangladesh',city: 'Dhaka'}
console.log(person2); // Person{fisrtName: 'Ruhul',lastName: 'Amin', age: 32,country: 'Bangladesh',city: 'Dhaka'}
console.log(person1.getFullName()); // Emran Hossain
console.log(person2.getFullName()); // Ruhul Amin

// Properties With Initial Value
// When we create a class for some properties, we may have an initial value. For instance, if we play a game, we score from zero. So, we may have a starting score or some score which is zero. In other way, we may have an initial skill and we will acquire some skills after some time.

class PersonAgain {
    constructor(fisrtName, lastName, age, country, city) {
        this.fisrtName = fisrtName
        this.lastName = lastName
        this.age = age
        this.country = country
        this.city = city
        this.score = 0
        this.skills = []
    }
    getFullName() {
        const fullName = this.fisrtName + " " + this.lastName
        return fullName
    }
}
const personAgain1 = new PersonAgain('Emran', 'Hossain', 30, 'Bangladesh', 'Dhaka')
const personAgain2 = new PersonAgain('Asraful', 'Alam', 26, 'Bangladesh', 'Dhaka')

console.log(personAgain1); // PersonAgain{fisrtName: 'Emran',lastName: 'Hossain', age: 30, country: 'Bangladesh', city: 'Dhaka',s core: 0, skills: []}
console.log(personAgain2); // PersonAgain{fisrtName: 'Asraful',lastName: 'Alam', age: 26, country: 'Bangladesh', city: 'Dhaka',s core: 0, skills: []}

console.log(personAgain1.score); // 0
console.log(personAgain2.score); // 0

console.log(personAgain1.skills); // []
console.log(personAgain2.skills); // []


// getter
// The (get) method allows us to access value from the object. We write a get method using keyword (get) followed by a function. Instead of accessing properties directly from the object, we use getter to get the value. See the example below.

class PersonOnceAgain {
    constructor(fisrtName, lastName, age, country, city) {
        this.fisrtName = fisrtName
        this.lastName = lastName
        this.age = age
        this.country = country
        this.city = city
        this.score = 0
        this.skills = []
    }

    getFullNameAgain() {
        const fullNameAgain = this.fisrtName + " " + this.lastName
        return fullNameAgain
    }
    get getScore() { // this getScore is a getter method
        return this.score
    }
    get getSkills() {
        return this.skills
    }
}

const personOnceAgain1 = new PersonOnceAgain('Emran', 'Hossain', 30, 'Bangladesh', 'Dhaka')
const personOnceAgain2 = new PersonOnceAgain('Ruhul', 'Amin', 40, 'Bangladesh', 'Dhaka')

console.log(personOnceAgain1.getScore); //0, do not need to use parenthesis to call a getter method.
console.log(personOnceAgain2.getScore); //0, do not need to use parenthesis to call a getter method.

console.log(personOnceAgain1.getSkills); //[], do not need to use parenthesis to call a getter method.
console.log(personOnceAgain2.getSkills); //[], do not need to use parenthesis to call a getter method.
