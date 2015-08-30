// Array.forEach(callback) passes
// (value, index, array) to the
// callback each iteration
//
// i.e.
//
// function log(v, i){
//      console.log(v, i)
// }
//
// ['a', 'b', 'c'].forEach(log)
//
// --> a, 0
// --> b, 1
// --> c, 2
//
// Write a function forEach(array, callback)
// that takes an array and callback function,
// and passes each (value, index, array) to
// the callback

function forEach(array, callback){
    //...
}

// tests
function IHazValue(value, index, array){
    console.assert(typeof value !== "undefined")
}
forEach([1, 2, 3], IHazValue)

function IHazIndex(value, index, array){
    console.assert(typeof index === "number")
}
forEach([1, 2, 3], IHazIndex)

function IHazArray(value, index, array){
    console.assert(array instanceof Array)
}
forEach([1, 2, 3], IHazArray)