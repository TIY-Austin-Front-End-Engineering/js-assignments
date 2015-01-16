//  Part I

/**
 * use any of the looping methods discussed in class
 *
 * 1. for loop,
 * 2. Array.forEach,
 * 3. custom forEach
 *
 * to complete the following problems
 */

// 0. write your own forEach() that takes two arguments: an array, and a callback

function forEach(array, callback){
    // YOUR CODE HERE
}

// testing your code with console.assert
var total = 1;
forEach([1, 2, 3, 4], function(a){ total *= a; });
// and finally assert; if this fails, the program stops
console.assert(total === 24);


// 1. calculate the sum of numbers (returns the sum (A NUMBER))

function sum(){
    // parse arguments into an array
    var args = [].slice.call(arguments);

    // .. do something with each element of args
    // YOUR CODE HERE
}

console.assert( sum(1, 2, 3, 4, 5) === 15 )

// 2. calculate the average of numbers (returns the average (A NUMBER))

function average(){
    // parse arguments into an array
    var args = [].slice.call(arguments);

    // .. do something with each element of args
    // YOUR CODE HERE
}

console.assert( average(2, 4, 6, 8) === 5 )

// 3. find the largest number of the inputs (returns the largest input (A NUMBER))

function largest(){
    // parse arguments into an array
    var args = [].slice.call(arguments);

    // .. do something with each element of args
    // YOUR CODE HERE
}

console.assert( largest(2, 4, 6, 8) === 5 )

// 4. find the longest string of the inputs (returns the longest input (A STRING))

function longest(){
    // parse arguments into an array
    var args = [].slice.call(arguments);

    // .. do something with each element of args
    // YOUR CODE HERE
}

console.assert( longest(2, 4, 6, 8) === 5 )

// 5. write a function that can sort an array of Date objects (returns a NEW ARRAY of Date's)

function sort(){
    // parse arguments into an array
    var args = [].slice.call(arguments);

    // .. do something with each element of args
    // YOUR CODE HERE
}

var dates = [
    new Date("Oct 2, 2015"),
    new Date("Oct 1, 2015"),
    new Date("Jan 2, 2015"),
    new Date("Dec 5, 2014"),
    new Date("Mar 27, 2015")
]

var sorted = sort(dates[0], dates[1], dates[2], dates[3], dates[4]);

console.assert(
    sorted[0] === dates[3] &&
    sorted[1] === dates[2] &&
    sorted[2] === dates[4] &&
    sorted[3] === dates[1] &&
    sorted[4] === dates[0] &&
)

/**
 * PART II
 *
 * For each of the following Array methods,
 *
 * 1. use them in an example
 * 2. write a console.assert to test them
 */

// .sort()

// .concat()

// .indexOf()

// .split()

// .join()

// .pop()

// .push()

// .slice()

// .splice()

// .shift()

// .unshift()

// .filter()

// .map()

/**
 * PART III
 *
 * Fill in the sections below marked 'YOUR CODE HERE'.
 *
 * The code below should find all customers whose first-names start with 'J',
 * map() those people into an array of objects that have a name property:
 *
 * i.e. { name : c.firstname + " " + c.lastname }
 *
 * then sort them alphabetically
 */

// set up arrays
var numbers = [1, 12, 4, 18, 9, 7, 11, 3, 101, 5, 6];
var strings = ['this', 'is', 'a', 'collection', 'of', 'words'];

var customers = [{
    firstname: 'Joe',
    lastname: 'Blogs'
}, {
    firstname: 'John',
    lastname: 'Smith'
}, {
    firstname: 'Dave',
    lastname: 'Jones'
}, {
    firstname: 'Jack',
    lastname: 'White'
}];

console.log(customers);

var projections = customers
.filter(function(c) {
    // YOUR CODE HERE
})
.map(function(c) {
    // YOUR CODE HERE
})
.sort(sortByName);

function sortByName(c1, c2) {
    "use strict";
    //...
}

console.log(projections);
