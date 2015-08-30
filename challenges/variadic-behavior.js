// The function below allows you to call another
// function at a later time. It takes 2 params, an
// amount of miliseconds and a function. It will
// call the function that many milliseconds later.
// Refactor it so that is has a default timeout.
//
// This is more advanced than the default param on
// the accelerate function. This is because there
// is another parameter to consider.
//
// When setting the timeout, the function needs to
// work like this:
//
//     callLater(1000, function(){
//          ...
//     })
//
// When using the default timeout, the function
// needs to work like this:
//
//     callLater(function(){
//          ...
//     })

function callLater(timeout, callback) {
    setTimeout(callback, timeout)
}
