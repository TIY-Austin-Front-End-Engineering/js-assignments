// Write a function word_frequency() that takes a string
// and returns an object of all the words used in the
// string and the number of times they were used.
//
// Normalize the words...
//
// i.e. "Book" is the same as "book"
//
// Also, remove punctation...
//
// i.e. "don't" is the same as "dont"
//
// Once you've done that, go through the text and
// find the number of times each word is used.
//
// Return the frequencies in an object,
// like this:
//
// {
//    peanut: 33,
//    racket: 31,
//    and: 29,
//    common: 21,
//    religion: 15,
//    fate: 14,
//    algorithm: 10,
//    the: 9,
//    ...
// }

function word_frequency(str){}

// tests
var text = "The midnight brought the signal sound of strife, The morn the marshalling in arms--the day Battle's magnificently stern array! The thunder clouds close o'er it, which when rent The earth is covered thick with other clay, Which her own clay shall cover, heaped and pent, Rider and horse:--friend, foe,--in one red burial blent."
var freqs = word_frequency(text)
console.log(freqs)

console.assert(freqs.the === 6)
console.assert(freqs.oer === 1)
console.assert(freqs.battles === 1)
