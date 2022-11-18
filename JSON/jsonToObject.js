// JSON -> JavaScript Object Notation.

// The JSON syntax is derived from JavaScript Object Notation syntax. But the JSON format is text or string only. JSON is a light weight data format for storing and transporting. JSON is mostly used when data is sent from a server to a client. JSON is an easier-to-use alternative to XML.
/*
{
    "users":[
        {
            "firstName":"Emran",
            "lastName":"Hossain",
            "age":25,
            "email":"emho@gmail.com"
        },
        {
            "firstName":"Ruhul",
            "lastName":"Amin",
            "age":35,
            "email":"ruhamin@gmail.com"
        },
        {
        "firstName":"Mahbub",
        "lastName":"Alam",
        "age":28,
        "email":"mahbubalam@gmail.com"
        }
    ]
}
*/

// The above JSON example is not much different from a normal object. Then, what is the difference? The difference is the key of a JSON object which should be with doube quotes or it should be a string. JavaScript Object and JSON are very similar that we can change JSON to Object and Object to JSON.

// Let us see the above example in more detail. It starts with a curly bracket. Inside the curly bracket, there is "users" key which has a value array. Inside the array, we have different objects and each objects has keys, each keys has to have double quotes. For instances, we use "firstName" instead of just firstName. However, in object, we use keys without double quotes. This is the major difference between an object and a JSON. Let us see more examples about JSON.
/*
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

// Converting JSON to JavaScript Object
// Mostly we fetch JSON data from HTTP resonse or from a file. But we can store the JSON as a string and we can change to Object for sake of demonstration. In JavaScript the keyword JSON has parse() and stringify() methods.

// When we want to change the JSON to an JavaScript Object, we parse the JSON using the JSON.parse() method.

// JOSN.prase(json[, reviver])
// json or Text, the data
// reviver is an optional callback function

/*
    JSON.parse(json, (key, value) => {
        // code goes here
    })
*/

const usersTextasJSON = `{
    "users": [
        {
            "fisrtName" : "Emran",
            "lastName" : "Hossain",
            "age" : 32,
            "email" : "emranhossain0335@gmail.com
        }
        {
            "fisrtName" : "Mahbub",
            "lastName" : "Alam",
            "age" : 41,
            "email" : "mahbubalam@gmail.com
        }
        {
            "fisrtName" : "Ruhul",
            "lastName" : "Amin",
            "age" : 40,
            "email" : "ruhulamin@gmail.com
        }
    ]
}`;

const userObject = JSON.parse(usersTextasJSON, undefined, 4)
console.log(userObject);
