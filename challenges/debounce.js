// Implement your own `_.debounce()` method.
//
// `debounce()` should take a callback function and a timeout. A debounced function only calls once within the given timeout window. Look at the usage and description below to see how debounce works.

var sum = 0
var inc = function() {
    sum++
}

function debounce(cb, timeout){
    //...
}

var debounced = debounce(inc, 100)

debounced()
debounced()
debounced()
debounced()

console.assert(sum === 1)
