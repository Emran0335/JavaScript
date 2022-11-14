// function: push, pop, peek, length

var letters =[]   //this is our stack

var word = "freecodecamp";
var rword = ""

//put letters of word into stack

for(let i = 0; i < word.length; i++) {
    letters.push(word[i])
}

console.log(letters);

// pop off the stack in reverse order
for(let i = 0; i < word.length; i++) {
    rword +=letters.pop() //as letters is an array, pop() method does not need to use index(i). So, rword = rword + letters.pop()
}
console.log(rword);
console.log(rword)

if(rword === word) {  // data tupe is same but the value is not same. so, === returns false.
    console.log(word + " is a palindrome.");
} else {
    console.log(word + " is not a palindrome.");
}


//create a stack 
var Stack = function() {
    this.count = 0;
    this.storage = {};
    // Adds a value onto the end of the stack
    this.push = function(value) {
        this.storage[this.count] = value;
        this.count++; //when storage this.count is 0 and value is 1(or other number), count value is 1(c++). Again when storage this.count is 1 and value is 2(or other number), count value is 2(c++).
    }

    // Removes and  returns the value at the end of the stack
    this.pop = function() {
        if(this.count === 0) {
            return undefined;
        }
        this.count--; // this count is now 4 to 3(c--)

        let result = this.storage[this.count];
        delete this.storage[this.count]
        return result;
    }

    this.size = function() {
        return this.count;
    }

    // Returns the value at the end of the stack
    this.peek = function() {
        return this.storage[this.count - 1]
    }
}

let myStack = new Stack()
console.log(myStack);
myStack.push(1)
myStack.push(2)
myStack.push(3)
myStack.push(4)
console.log(myStack);
console.log(myStack.pop())