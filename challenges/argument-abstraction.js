
// The function `callTenTimes()` takes a callback
// function which is called 10 times.
//
// Refactor this into another
// function called `callNtimes` that allows you
// to specify a number of times to call the given
// function.

function range(n){
    return new Array(n).join(',-').split(',')
}

function callTenTimes(callback) {
    range(10).forEach(callback)
}
