// Implement a recursive function `getDependencies(object)` that returns all of the unique dependencies and sub-dependencies of a module, _sorted alphabetically_.
//
// - Dependencies should be printed as `dependency@version` e.g. `inflection@1.2.6`.
// - Multiple versions of the same module are allowed, but duplicates modules of the same version should be removed.
//
// Example
//
//
var deps = {
    "name": "lorem-ipsum",
    "version": "0.1.1",
    "dependencies": {
        "optimist": {
            "version": "0.3.7",
            "dependencies": {
                "wordwrap": {
                    "version": "0.0.2"
                }
            }
        },
        "inflection": {
            "version": "1.2.6"
        }
    }
}

getDependencies(deps) // => [ 'inflection@1.2.6', 'optimist@0.3.7', 'wordwrap@0.0.2' ]

function getDependencies(){
    // YOUR CODE HERE
}