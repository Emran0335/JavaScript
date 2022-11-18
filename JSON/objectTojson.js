// Converting Object to JSON

// When we want to change the object to JSON, we use JSON.stringify(). The stringify method takes one required parameter and two optional paramters. The replacer is used as filter and the space is an indentations. If we don't want to filter out any of the keys from the object, we can just pass undefined.

// JOSN>stringify(obj, replacer, space)
// json or text, the data,
// reviver is an optional callback function

// Let us convert the following object to a string. First, let us keep all the keys and also have 4 space as indentation.
/*
const user = `{
    "Emran": {
        "email": "emran@gmail.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript"
        ],
        "age": 28,
        "isLoggedIn": false,
        "points": 30
    },
    "Hossain": {
        "email": "hossain@gmail.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "Redux",
            "MongoDB",
            "Express",
            "React",
            "Node"
        ],
        "age": 32,
        "isLoggedIn": false,
        "points": 50
    },
    "Rony": {
        "email": "rony@gmail.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "React",
            "Redux"
        ],
        "age": 30,
        "isLoggedIn": true,
        "points": 50
    },
    "Ruhul": {
        "email": "ruhul@gmail.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "Python"
        ],
        "age": 41,
        "isLoggedIn": false,
        "points": 40
    },
    "Amin": {
        "email": "amin@gmail.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "React",
            "Redux",
            "Node.js"
        ],
        "age": 40,
        "isLoggedIn": true,
        "points": 50
    },
    "Mahbub": {
        "email": "mahbub@gmail.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "React"
        ],
        "age": 40,
        "isLoggedIn": false,
        "points": 40
    },
    "Nusaiba": {
        "email": "nusaiba@gmail.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "MongoDB",
            "Express",
            "React",
            "Node"
        ],
        "age": 2,
        "isLoggedIn": false,
        "points": 40
    }
}`

const jsonToObj = JSON.parse(user)
console.log(jsonToObj);
*/
const users = {
  Emran: {
    email: 'emran@gmail.com',
    skills: [ 'HTML', 'CSS', 'JavaScript' ],
    age: 28,
    isLoggedIn: false,
    points: 30
  },
  Hossain: {
    email: 'hossain@gmail.com',
    skills: [
      'HTML',
      'CSS',
      'JavaScript',
      'Redux',
      'MongoDB',
      'Express',
      'React',
      'Node'
    ],
    age: 32,
    isLoggedIn: false,
    points: 50
  },
  Rony: {
    email: 'rony@gmail.com',
    skills: [ 'HTML', 'CSS', 'JavaScript', 'React', 'Redux' ],
    age: 30,
    isLoggedIn: true,
    points: 50
  },
  Ruhul: {
    email: 'ruhul@gmail.com',
    skills: [ 'HTML', 'CSS', 'JavaScript', 'Python' ],
    age: 41,
    isLoggedIn: false,
    points: 40
  },
  Amin: {
    email: 'amin@gmail.com',
    skills: [ 'HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node.js' ],
    age: 40,
    isLoggedIn: true,
    points: 50
  },
  Mahbub: {
    email: 'mahbub@gmail.com',
    skills: [ 'HTML', 'CSS', 'JavaScript', 'React' ],
    age: 40,
    isLoggedIn: false,
    points: 40
  },
  Nusaiba: {
    email: 'nusaiba@gmail.com',
    skills: [
      'HTML',
      'CSS',
      'JavaScript',
      'MongoDB',
      'Express',
      'React',
      'Node'
    ],
    age: 2,
    isLoggedIn: false,
    points: 40
  }
}

const txt = JSON.stringify(users, undefined, 4)
console.log(txt); // text means JSON-> because json is a string form of an object.
/*
// object is changed to JSON
{
    "Emran": {
        "email": "emran@gmail.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript"
        ],
        "age": 28,
        "isLoggedIn": false,
        "points": 30
    },
    "Hossain": {
        "email": "hossain@gmail.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "Redux",
            "MongoDB",
            "Express",
            "React",
            "Node"
        ],
        "age": 32,
        "isLoggedIn": false,
        "points": 50
    },
    "Rony": {
        "email": "rony@gmail.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "React",
            "Redux"
        ],
        "age": 30,
        "isLoggedIn": true,
        "points": 50
    },
    "Ruhul": {
        "email": "ruhul@gmail.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "Python"
        ],
        "age": 41,
        "isLoggedIn": false,
        "points": 40
    },
    "Amin": {
        "email": "amin@gmail.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "React",
            "Redux",
            "Node.js"
        ],
        "age": 40,
        "isLoggedIn": true,
        "points": 50
    },
    "Mahbub": {
        "email": "mahbub@gmail.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "React"
        ],
        "age": 40,
        "isLoggedIn": false,
        "points": 40
    },
    "Nusaiba": {
        "email": "nusaiba@gmail.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "MongoDB",
            "Express",
            "React",
            "Node"
        ],
        "age": 2,
        "isLoggedIn": false,
        "points": 40
    }
}
*/