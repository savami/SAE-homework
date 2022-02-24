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
    console.log(Array.isArray(variableName))
}

checkArray(fox)
checkArray(obj)
checkArray(helloWorld)
checkArray(zero)
checkArray(nothing)
