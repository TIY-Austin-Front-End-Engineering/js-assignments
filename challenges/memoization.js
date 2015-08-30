// Write a function `memoize` that takes a callback function, and returns a "memoized" function that only runs for new inputs. In otherwords, a memoized function will store return values related to an input and return that cached value immediately if is has been computed before:
//

function expensiveOperation() {
    console.log('this should be shown once')
    return 22
}

function memoize(cb){
    //...
}

var memoized = memoize(expensiveOperation)
console.log(memoized())
console.log(memoized())

// the console should show:
// 'this should be shown once'
// 22
// 22
