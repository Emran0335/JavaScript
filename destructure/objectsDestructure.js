// Object Destructure
// When we destructure the name of the variable, we have to destructure exactly the same as the key or property of the object. Let see the example below

const rectangle = {
  width: 20,
  height: 10,
  area: 200,
};

let { width, height, area, perimeter } = rectangle;
console.log(width, height, area, perimeter); // 20 10 200 undefined(the value of perimeter is not given)

let { width: w, height: h, area: a, perimeter: p } = rectangle;
console.log(w, h, a, p); // 20 10 200 undefined
// If the key is not found in the object, the variable will be assigned to undefined. Sometimes the key might not be in the  object, in that case, we can give a default value during declaration. See the exapmle.
const rectangleWithValue = {
  widthValue: 20,
  heightValue: 10,
  areaValue: 200,
};
let {
  widthValue,
  heightValue,
  areaValue,
  perimeterValue = 60,
} = rectangleWithValue;
console.log(widthValue, heightValue, areaValue, perimeterValue); // 20 10 200 60

// Let us modify the object -> width value to 30 and perimeter to 80

const anotherRectangle = {
  anotherWidth: 30,
  anotherHeight: 10,
  anotherArea: 200,
  anotherPerimeter: 80,
};

let { anotherWidth, anotherHeight, anotherArea, anotherPerimeter } =
  anotherRectangle;
console.log(anotherWidth, anotherHeight, anotherArea, anotherPerimeter); // 30 10 200 80

// Destructure keys as a function parameter. Let us create a function which takes a rectangle object and it returns a perimeter of a rectangle.

// Object Parameter Without Destructuring

const rect = {
  rectWidth: 20,
  rectHeight: 10,
};

const calculatePerimeter = (rectangle) => {
  return 2 * (rectangle.rectWidth + rectangle.rectHeight);
};
console.log(calculatePerimeter(rect)); // 60

// Another Example
const person = {
  firstName: "Emran",
  lastName: "Hossain",
  age: 34,
  country: "Bangladesh",
  job: "Teacher",
  skills: [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Redux",
    "Node",
    "MongoDB",
    "Python",
  ],
  languages: ["Bangla", "English"],
};

// let's create a function which can provide information about the person object without destructuring.

const getPersonInfo = (obj) => {
  const skills = obj.skills;
  const formattedSkills = skills.slice(0, -1).join(" ,"); // -1(not included, so python is omitted.)
  const languages = obj.languages;
  const formattedLanguages = languages.slice(0, -1).join(",");

  const personInfo = `${obj.firstName} ${obj.lastName} lives in ${
    obj.country
  }. He is  ${obj.age} years old. He is a ${
    obj.job
  }. He teaches ${formattedSkills} and ${
    skills[skills.length - 1]
  }. He speaks ${formattedLanguages} and ${languages[1]} fluently.`;
  return personInfo;
};
console.log(getPersonInfo(person));

// Destructuring Object During Iteration
const todoList = [
  {
    task: "Prepare JS Test",
    time: "8/10/2020 8:30",
    completed: true,
  },
  {
    task: "Give JS Test",
    time: "8/10/2020 10:00",
    completed: false,
  },
  {
    task: "Assesss JS Test",
    time: "8/10/2020 1:00",
    completed: false,
  },
];

for (const { task, time, completed } of todoList) {
    console.log(task, time, completed);
}
/*Prepare JS Test 8/10/2020 8:30 true
Give JS Test 8/10/2020 10:00 false
Assesss JS Test 8/10/2020 1:00 false */