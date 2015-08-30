// Write a function sum_recursive() that sums all
// numbers in the provided list of lists (of lists of lists)

function sum_recursive(list){}

// tests
// ---
var test1 = [ [1,2,3] ]
console.assert(sum_recursive(test1) === 6)

var test2 = [ [1,2,3], [4,5,6] ]
console.assert(sum_recursive(test2) === 21)

var test3 = [
    [1, 23, 5],
    [
        [5, 6],
        [10, 15],
        [
            4,
            [
                10, 19
            ]
        ],
        [
            [
                [
                    90
                ]
            ]
        ]
    ]
]

console.assert(sum_recursive(test3) === 188)