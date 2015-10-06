// Challenge two
//
// The function below takes the spanish word for
// the colors red, white, blue, green, and black
// and returns the hex code for that color.
// Refactor this function to use metaprogramming
// instead of an if/else statement to return
// the hex.

function spanishColor(colorName) {
    if (colorName.toLowerCase() === "rojo") {
        return "#ff0000"
    } else if (colorName.toLowerCase() === "blanco") {
        return "#ffffff"
    } else if (colorName.toLowerCase() === "azul") {
        return "#0000ff"
    } else if (colorName.toLowerCase() === "verde") {
        return "#00ff00"
    } else if (colorName.toLowerCase() === "negro") {
        return "#000000"
    }
}

console.assert(spanishColor('rojo') === '#ff0000')
console.assert(spanishColor('blanco') === '#ffffff')
console.assert(spanishColor('verde') === '#00ff00')
