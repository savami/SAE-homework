var num = parseInt(prompt('Enter a number'))

function factorialize() {
    if (num === 0 || num === 1)
        return 1;
    for (var i = num - 1; i>= 1; i--) {
        num *= i;
    }
    console.log(num)
    return num;
}

factorialize()