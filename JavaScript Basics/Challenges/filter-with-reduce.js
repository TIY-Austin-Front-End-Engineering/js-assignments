// Rewrite the following `filter()` with `reduce()`:

// Basic filter
[1,2,3,4].filter(function (input) {
    return (input > 2);
}) // => [3,4]

// Filter with reduce
[1,2,3,4].reduce(function (result, input) {
    // ...
}, []) // => [3,4]
