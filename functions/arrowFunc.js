// Arrow Function
// Arrow function is an alternative to write a function but there are some differences between function declaration and arrow function.

// Arrow function uses arrow instead of the keyword function to declare a function. Let us see arrow function. Arrow function declare with const, let keyword but does not need to declare function keyword

const square = n => {
    return n * n;
}
console.log(square(2)); // 4

// if we have only line in the code block, it can be written as follows, explicit retrun.

const squareAgain = n => n * n
console.log(squareAgain(4)); //16


const change = arr => {
    const newArr = [];
    for (const element of arr) {
        newArr.push(element.toUpperCase())
    }
    return newArr
}

const countries = ['Bangladesh', 'Nepal', 'India', 'Pakistan','Butan']
console.log(change(countries));



const returnFullName = (firstName, lastName) => {
    return `${firstName} ${lastName}`
}
console.log(returnFullName("Emran", "Hossain"));