// write a method names()
// which takes a string of
// comma-separated names
// (first and last) and then
// returns an object where each
// firstname is a key, and each
// lastname is a value
//
// i.e. names("George Washington, John Adams, Kanye West")
//   .. --> {
//     George: "Washington",
//     John: "Adams",
//     Kanye: "West"
//   }

function names(str) {

}

var results = names("George Washington, John Adams, Kanye West")
console.assert(results.George === "Washington")
console.assert(results['John'] === "Adams")
console.assert(results['Kanye'] === "West")