// primitive variables are passed by value and objects and arrays are passed by reference

function Book(author, price) {
    let details = { // this object is not private
        author: author,
        price: price,
    }
    this.getDetails = function() {
        return details;
    }
}

let book1 = new Book("James Joyce", "29.50" ) // book1 can access to details
console.log(book1.getDetails()); // { author: 'James Joyce', price: '29.50' }

let bookDetails = book1.getDetails();
// it can change the properties of details
bookDetails.author = "Jane Austin"
bookDetails.price = "100.0"
console.log(book1.getDetails()); // { author: 'Jane Austin', price: '100.0' }


// possible solution to keep private is to clone the details object inside the getDetails method

function BookConstructor(author, price) {
    let details = { // this object is not private
        author: author,
        price: price,
    }
    this.getDetails = function() {
        let cloneDetails = {...details}
        return cloneDetails;         // clone of details object
    }
}

let instanceOf = new BookConstructor("James Joyce" , " 30.0")
console.log(instanceOf);
console.log(instanceOf.getDetails()); // { author: 'James Joyce', price: ' 30.0' }

// but properties cannot be modified

let instanceDetails = instanceOf.getDetails()
instanceDetails.author = "Emran Hossain"
instanceDetails.price = "60.0"
console.log(instanceDetails); // { author: 'Emran Hossain', price: '60.0' }


// so previous details object is not changed
console.log(instanceOf.getDetails()); // { author: 'James Joyce', price: ' 30.0' }





function Counter(count) {
    this.count = count;
}

Counter.prototype.count = 2;

let counter = new Counter(6);

console.log(counter.count);     // 6


// closure
function closureFunc() {
    let name = "Emran";
    function findName() {
       return name;
    }
    return findName
}

let resultOne = closureFunc()
console.log(resultOne());

let name = resultOne();
// name value is Emran that can be used to another function.
// console.log(name);


function another(name) {
    let myName = name;
    function found() {
       return myName;
    }
    return found;
}

let getMyName = another(name)
console.log(getMyName());



function negate(f) {       // isNaN is f
    return function(val) {
        return !f(val)       // isNaN is f and val is privided by nuberOne
    }
}

let numberOne = negate(isNaN);
console.log(numberOne(5));
// isNaN returns true if value is not a number
console.log(isNaN(NaN));

console.log(parseInt(4.5, 10));     // 4
