// Write a class/constructor OddArray
// which wraps around and accepts only
// odd numbers.
//
// The class should have it's own add() and get()
//
// add(x) -> when x is odd, accept it, otherwise do nothing
//
// get() when provided no arguments should
// return the entire internal array
//
// get(3) should return state[3]
//
// The constructor should accept an initial array
// as an argument, and will set the internal array
// as only those numbers that are odd
//
// i.e. new OddArray([1, 2, 3, 4]) --> {state: [1, 3]}

function OddArray(arr){
    // this.state = ...
}

OddArray.prototype = {
    add: function(){},
    get: function(){}
}

// testing your code from above
var odd = new OddArray([1, 2, 3, 4, 5])
console.assert(odd.get().length, 3)
console.assert(odd.get()[0], 1)
console.assert(odd.get()[1], 3)
console.assert(odd.get()[2], 5)

odd.add(2)
console.assert(odd.get().length, 3)

odd.add(3)
console.assert(odd.get().length, 4)