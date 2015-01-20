# rot13

## Description
rot13


## Objectives

### Learning Objectives

After completing this assignment, you should:

* Understand general JS syntax
* Grasp why functions are important
* Understand arrays and loops
* Understand the meaning of String.charCodeAt()
* Recall particular uses of Strings and their methods (charCodeAt(), charCodeFrom())
* Be able to recite the meaning and importance of SOLID principles
* Be able to breakdown a simple process of mathematical steps into a series of statements in JS

### Performance Objectives

After completing this assignment, you should be able to effectively use:

* The terminal and `node` to test your JS

## Details

### Deliverables

* A repo containing at least:
  * `main.js`

### Requirements

* The code meets the given requirements in the modes below.

## Easy Mode

> About ROT13 : http://en.wikipedia.org/wiki/ROT13

Write two functions, `encode()`, and `decode()`, that compute the plaintext ("hello") and ciphertext ("uryyb").

Here's where discussion ended at:

```js
function encode(phrase){
    var result = "";
    // .. for each character in phrase
    for(var i = 0; i < phrase.length; i++){
        // get the charCode if letter at index i
        var cc = phrase[i].charCodeAt(0);
        // add 13 to the letter's charCode
        result += String.fromCharCode(cc+13);
    }
    return result;
}

console.log(encode("hello")); //---> "uryyb"

function decode(phrase){

}

console.log(decode("uryyb")); //---> "hello"
```
            
## Hard Mode

In addition to the [Easy Mode](#easy-mode), make `encode2()` and `decode2()` take an optional, extra argument that takes a `rotation`:

```js
function encode2(phrase, rotation){
    
}

console.log(encode("hello")); //---> "uryyb"

function decode2(phrase, rotation){

}

console.log(decode("uryyb")); //---> "hello"
```

## Notes

- http://en.wikipedia.org/wiki/ROT13
- http://devdocs.io/
