// Write a function that allows you to use `Array.prototype.slice` without using `slice.call` or `slice.apply` to invoke it.
//
// Normally you have to use `slice` with `call` or `apply`:


var slice = Array.prototype.slice

function() {
  var args = slice.call(arguments) // this works
}

// We want this to work:

var slice = yourFunction

function() {
  var args = slice(arguments) // this works
}
