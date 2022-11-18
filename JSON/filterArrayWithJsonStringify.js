// Using a Filter Array with JSON.stringify
// Now, let's use the replacer as a filter. The user object has long list of keys but we are interested only in few of them. We put the keys that we want to keep in array and use it in the palce of the replacer.

const user = {
    firstName: 'Emran',
    lastName: 'Hossain',
    country: 'Bangladesh',
    city: 'Dhaka',
    email: 'emranhossain0335@gmail.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Python'],
    age: 32,
    isLoading: false,
    points: 30
}

const txt = JSON.stringify(user, ['firstName', 'lastName', 'country', 'city', 'age'], 4)
console.log(txt);

/*
    {
        "firstName": "Emran",
        "lastName": "Hossain",
        "country": "Bangladesh",
        "city": "Dhaka",
        "age": 32
    }
*/