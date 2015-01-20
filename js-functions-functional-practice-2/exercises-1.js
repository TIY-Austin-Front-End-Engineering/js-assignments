/*
This is to be done as a group assignment. We may have one group of 3 students.

    1. Send me a hipchat or email about who is on who's team
    2. Have one person Create a Github Repo for the project, then each other person will need to be added as collaborators (see https://help.github.com/articles/adding-collaborators-to-a-personal-repository/).
    3. Remember back to our discussion on Git and merge conflicts. Those problems can and probably will arise. :-)
*/

// 1. Write your own forEach function (like we did in class). It takes the array and the function (referred to as a callback) as arguments:

function forEach(list, callback) { /* Do stuff */ }


// 2. Write your own map, reduce, and filter functions that use your custom forEach to do their work.

// 3. Write a function called pluck that extracts a list of property names:

function pluck(list, propertyName) { /* Do stuff*/ }

var stooges = [{name: 'moe', age: 40}, {name: 'larry', age: 50}, {name: 'curly', age: 60}];
pluck(stooges, 'name');
// => ["moe", "larry", "curly"]

// 4. Write a function called reject that returns the values in list without the elements that the truth test (predicate) passes. The opposite of filter.


function reject(list, predicate) { /* Do stuff */ }

var odds = reject([1, 2, 3, 4, 5, 6], function(num){ return num % 2 == 0; });
//=> [1, 3, 5]

// 5. Write a function called find that looks through each value in the list, returning the first one that passes a truth test (predicate), or undefined if no value passes the test. The function returns as soon as it finds an acceptable element, and doesn't traverse the entire list.

function find(list, predicate) { /* Do stuff */ }

var even = find([1, 2, 3, 4, 5, 6], function(num){ return num % 2 == 0; });
//=> 2

// 6. Write a function called where that looks through each value in the list, returning an array of all the values that contain all of the key-value pairs listed in properties.

function where(list, properties) { /* Do stuff */ }

where(listOfPlays, {author: "Shakespeare", year: 1611});
// => [{title: "Cymbeline", author: "Shakespeare", year: 1611},
//     {title: "The Tempest", author: "Shakespeare", year: 1611}]
