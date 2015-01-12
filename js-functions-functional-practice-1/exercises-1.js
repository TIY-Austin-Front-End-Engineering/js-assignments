//  Part I

// use EACH the iteration methods discussed in class today (for loop, Array.forEach, custom forEach) for EACH of the following problems
// 1. calculate the sum of numbers (can be any number of arguments)
// 2. calculate the average of numbers
// 3. find the largest number of the inputs
// 4. find the longest string of the inputs
// 5. given an array of Date() objects (Oct 4th 2014, Oct 3rd 2014, Sept 30th 2014, Sept 1st 2012, March 13th 2010), in that order, sort them chronologically. Use http://devdocs.io/javascript/global_objects/date for reference on creating Date() objects with a specific date.


// Part II

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

// YOUR CODE WILL GO IN THIS NEXT SECTION
// find all customers whose firstname starts with 'J',
// map() those people into an array of objects like: { name : c.firstname + " " + c.lastname }
// then sort alphabetically

var projections = customers
    .filter(function(c) { /* ... */ })
    .map(function(c) { /* ... */ })
    .sort(sortByName);

function sortByName(c1, c2) {
    "use strict";
    //...
}

console.log(projections);
