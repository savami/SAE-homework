var fox = ['The', 'quick', 'brown', 'fox', 'jumps', 'over', 'the', 'lazy', 'dog'];

var obj = {
    name: "Sava",
    lastname: "Miljkovic",
    age: 26,
    gender: "male"
}

var helloWorld = 'Hello World!'

var zero = null;

var nothing = undefined;

function checkArray(variableName) {
    return Array.isArray(variableName);
}

console.log(checkArray(fox))
console.log(checkArray(obj))
console.log(checkArray(helloWorld))
console.log(checkArray(zero))
console.log(checkArray(nothing))
