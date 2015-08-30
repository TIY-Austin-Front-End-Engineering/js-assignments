// When we use `new` with a function, JavaScript injects an implicit reference to the new object being created in the form of the `this` keyword and implicitly returns `this` at the end of the constructor.
//
// When we do:

function Alien() {
    this.kind = 'alien';
}

var zippy = new Alien();
zippy.kind; //=> 'alien'

// Behind the scenes it is like doing something like:

function Alien() {
    var this = {}; // not valid JavaScript, just for illustration
    this.__proto__ = Alien.prototype;

    this.kind = 'alien';

    return this;
}

// If we forgot `new` in front of `Alien()`, it can cause unknown/unwanted side-effects in our code:

Alien()

window.kind //--> 'alien'

// Uh oh! Without `new`, `this` refers to the global context!!

// How can we detect or prevent a constructor like `Alien()` from being called without `new`?

