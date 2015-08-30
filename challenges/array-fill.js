// Write a function on the Array prototype `fill(val, start, stop)` that overwrites every value in the array calling it with `val`, with an optional `start` (inclusive) and `stop` (exclusive) index.

Array.prototype.fill = function(val, start, stop){
    // ...
}

console.assert(new Array(5).fill(1)[3] === 5)
console.assert(new Array(5).fill(1, 2, 3)[2] === 5)