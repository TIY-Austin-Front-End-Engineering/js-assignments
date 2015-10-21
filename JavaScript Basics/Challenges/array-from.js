// Implement `Array.from()`, which takes an "array-like" object (such as an ElementList from `querySelectorAll` or an `arguments` object).

Array.from = function(obj){
    // ...
}

console.assert(Array.from({0: 'a', 1: 'b', length: 2}).length === 2)
console.assert(Array.from(document.querySelectorAll('body')).length === 1)
