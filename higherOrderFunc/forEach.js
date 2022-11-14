// Let us see where we use callback functions.

const numbers = [1,2,3,4,5] 
const sumArray = arr => {
    let sum = 0
    const callback = function(element) {
        sum +=element
    }

    arr.forEach(callback)
    return sum
}
console.log(sumArray(numbers)); // 15

// The above example can be simplified as follows:

const sumArraySimple = arr => {
    let sum = 0
    arr.forEach((element)=> {
        sum += element
    })

    return sum;
}

console.log(sumArraySimple(numbers)); //15