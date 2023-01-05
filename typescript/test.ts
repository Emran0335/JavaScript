let name: string;
let age: number;

// union type
let myage: number | string;
myage = "thirty four";

// function
function printName(name: string) {
  console.log(name);
}
printName("Emran")

// boolean
let isStudent: boolean;
let hobbies: string[];
hobbies = ["e", "d", "c"];

//tuple
let role: [number, string];
role = [5, "string"];

//object
type Person = {
  name: string;
  age: number;
};
let person: Person = {
  name: "Emran",
  age: 34,
};
// optional
type AnotherPerson = {
  name: string;
  age?: number;
};
let anotherperson: AnotherPerson = {
  name: "Emran",
};

//array of person
let lotsOfPeople: Person[];
lotsOfPeople = [{ name: "Emran", age: 34 }];

// interface
interface Man {
  name: string;
  age?: number; // optional
}

interface Guy extends Man {
  profession: string;
}

let human: Guy = {
  name: "emran",
  profession:"teaching",
  age: 34 // optional
}
