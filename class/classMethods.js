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


// Getter
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


// Setter
// The setter method allows us to modify the value of certain properties. We write a setter method using keyword (set) followed by a function. See the example below.

class PersonWithSetter {
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
    get getScore() {
        return this.score
    }
    get getSkills() {
        return this.skills
    }
    set setScore(score) {
        this.score +=score
    }
    set setSkill(skill) {
        this.skills.push(skill)
    }
}

const personWithSetter1 = new PersonWithSetter('Emran', 'Hossain', 32, 'Bangladesh', 'Dhaka')
const personWithSetter2 = new PersonWithSetter('Asraful', 'Alam', 28, 'Bangladesh', 'Dhaka')

personWithSetter1.setScore = 1
personWithSetter1.setSkill = 'HTML'
personWithSetter1.setSkill = 'CSS'
personWithSetter1.setSkill = 'JavaScript'

personWithSetter2.setScore = 1
personWithSetter2.setSkill = 'Browsing'
personWithSetter2.setSkill = 'Typing'
personWithSetter2.setSkill = 'MS Office'

console.log(personWithSetter1.score); // 1
console.log(personWithSetter2.score); // 1

console.log(personWithSetter1.skills); // [ 'HTML', 'CSS', 'JavaScript' ]
console.log(personWithSetter2.skills); // [ 'Browsing', 'Typing', 'MS Office' ]

// Do not be puzzled by the difference between regular method and a getter. If you know how to make a regular method, you are good enough. Let us add regular method called perPersonInfo in the Person class.

class PersonWithSetterAndRegularFunc {
    constructor(fisrtName, lastName, age, country, city) {
        this.fisrtName = fisrtName
        this.lastName = lastName
        this.age = age
        this.country = country
        this.city = city
        this.score = 0
        this.skills = []
    }
    getFullName() { // regular function
        const fullName = this.fisrtName + " " + this.lastName
        return fullName
    }
    get getScore() { // getter
        return this.score
    }
    get getSkills() {
        return this.skills
    }
    set setScore(score) { // setter
        this.score +=score
    }
    set setSkill(skill) {
        this.skills.push(skill)
    }
    getPersonInfo() {
        let fullName = this.getFullName()
        let skills = this.skills.length > 0 && this.skills.slice(0, this.skills.length - 1).join(", ") + ` and ${this.skills[this.skills.length - 1]}` // && ampersand operator(if true). Slice(0, length -1), length -1 is not included.
        let formattedSkills = skills ? `He knows ${skills}` : " " // ternary operator(if true or false)
        let info = `${fullName} is ${this.age}. He lives ${this.city}, ${this.country}. ${formattedSkills}.`
        return info
    }
}

const personWithSetterAndRegular1 = new PersonWithSetterAndRegularFunc('Emran', 'Hossain', 30, 'Bangladesh', 'Dhaka')
const personWithSetterAndRegular2 = new PersonWithSetterAndRegularFunc('Asraful', 'Alam', 20, 'Bangladesh', 'Dhaka')
const personWithSetterAndRegular3 = new PersonWithSetterAndRegularFunc('Ruhul', 'Amin', 39, 'Bangladesh', 'Dhaka')

personWithSetterAndRegular1.setScore = 1
personWithSetterAndRegular1.setSkill = 'HTML'
personWithSetterAndRegular1.setSkill = 'CSS'
personWithSetterAndRegular1.setSkill = 'JavaScript'

personWithSetterAndRegular2.setScore = 1;
personWithSetterAndRegular2.setSkill = "Internet Browsing";
personWithSetterAndRegular2.setSkill = "Typing";
personWithSetterAndRegular2.setSkill = "MS Office";

personWithSetterAndRegular3.setScore = 1;
personWithSetterAndRegular3.setSkill = "Typing";
personWithSetterAndRegular3.setSkill = "Operating";
personWithSetterAndRegular3.setSkill = "Presentation";

console.log(personWithSetterAndRegular1.getScore); // 1
console.log(personWithSetterAndRegular2.getScore); // 1
console.log(personWithSetterAndRegular3.getScore); // 1

console.log(personWithSetterAndRegular1.getSkills); // [ 'HTML', 'CSS', 'JavaScript' ]
console.log(personWithSetterAndRegular2.getSkills); // [ 'HTML', 'CSS', 'JavaScript' ]
console.log(personWithSetterAndRegular3.getSkills); // [ 'Typing', 'Operating', 'Presentation' ]

console.log(personWithSetterAndRegular1.getPersonInfo()); // Emran Hossain is 30. He lives Dhaka, Bangladesh. He knows HTML, CSS and JavaScript.
console.log(personWithSetterAndRegular2.getPersonInfo()); // Asraful Alam is 20. He lives Dhaka, Bangladesh. He knows Internet Browsing, Typing and MS Office.
console.log(personWithSetterAndRegular3.getPersonInfo()); // Ruhul Amin is 39. He lives Dhaka, Bangladesh. He knows Typing, Operating and Presentation.



// Static Method
// The static keyword defines a static method for a class. Static methods are not called on instances of the class. Instead, they are called on the class itself. These are often utility fuctions such as funstions to create or clone objects. An example of statc method is Date.now(). The (now method) is called directly from the class.

class PersonWithStatic {
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
    get getScore() {
        return this.score
    }
    get getSkill() {
        return this.skills
    }
    set setScore(score) {
        this.score += score
    }
    set setSkill(skill) {
        this.skills.push(skill)
    }

    getPersonInfo() { // regular function
        let fullName = this.getFullName()
        let skills = this.skills.length > 0 && this.skills.slice(0, this.skills.length - 1).join(", ") + ` and ${this.skills[this.skills.length - 1]}`
        let formattedSkills = skills ? `He knows ${skills}` : " "
        let info = `${fullName} is ${this.age}. He lives ${this.city}, ${this.country}. ${formattedSkills}.`
        return info
    }

    static favouriteSkill() {
        const skills = ["HTML", "CSS", "JS", "React", "Python", "Node"];
        const index = Math.floor(Math.random() * skills.length)
        return skills[index]
    }

    static showDateTime() {
        let now = new Date()
        let year = now.getFullYear()
        let month = now.getMonth() + 1 // as it begins from 0(January)
        let date = now.getDate()
        let hours = now.getHours()
        let minutes = now.getMinutes()
        if (hours < 10) {
            hours = '0' + hours // one digit will be two digits i.e 09,08,07....
        }
        if (minutes < 10) {
            minutes = '0' + minutes
        }
        let dateMonthYear = date + '.' + month + '.' + year
        let time = hours + ':' + minutes
        let fullTime = dateMonthYear + ' ' + time
        return fullTime
    }
}

console.log(PersonWithStatic.favouriteSkill()); // any skills will be printed as there is random numbers.
console.log(PersonWithStatic.showDateTime()); // current time will be printed with these static methods.

// The static methods are methods which can be used as utility functions.

// Overriding Methods
// We manage to access all the methods in the Person Class. We can also create Child Class from Parent Class. We can customize the parent methods. We can add additional properties to a Child Class. If we want to customize the methods and if we want to add extra properties, we need to use the constructor function in the Child Class too. Inside the constructor function, we call the super() function to access to the all properties from the Parent Class. The Person Class did not have gender property. But now, let us create gender propety for the Chill Class, Student. If the same method name/names used in the the Child Class, the Parent Class method/methods will be overridden.

// Student Class will be extended from PersonWithSetterAndRegularFunc

class Student extends PersonWithSetterAndRegularFunc {
    constructor(fisrtName, lastName, age, country, city, gender) {
        super(fisrtName, lastName, age, country, city) // super func is called to get access to Parent Class.
        this.gender = gender
    }

    saySomething() {
        console.log('I am a child of the Parent Class.'); // In Javascript, if nothing is returned from the function with the keyword (return), undefined is the returned by default
        let whoIam = 'I am a child of the Parent Class.' // if it is not used, undefined is also returned with the result of console.log().
        return whoIam
    }
    getPersonInfo() {
        let fullName = this.getFullName()
        let skills = this.skills.length > 0 && this.skills.slice(0, this.skills.length - 1).join(", ") +
            ` and ${this.skills[this.skills.length - 1]}`
        let pronuon = this.gender === 'Male' ? 'He' : 'She'
        let formattedSkills = skills ? `${pronuon} knows ${skills}` : ""
        let info = `${fullName} is ${this.age}. ${pronuon} lives in ${this.city}, ${this.country}. ${formattedSkills}.`

        return info
    }
}

const s1 = new Student('Emran', 'Hossain', 28, 'Bangladesh', 'Dhaka', 'Male')
console.log(s1);
s1.setScore = 1
s1.setSkill = 'HTML'
s1.setSkill = 'CSS'
s1.setSkill = 'JavaScript'

const s2 = new Student('Farjana', 'Akter', 22, 'Bangladesh', 'Dhaka', 'Female')
console.log(s2);

s2.setScore = 1
s2.setSkill = "English Leterature";
s2.setSkill = "Sewing";
s2.setSkill = "Rearing Children";



console.log(s1.saySomething());
console.log(s1.getFullName());
console.log(s1.getPersonInfo());

console.log(s2.saySomething());
console.log(s2.getFullName());
console.log(s2.getPersonInfo());
