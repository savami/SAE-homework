var btn = document.getElementsByTagName('button');
var options = ['enable', 'disabled', 'alert']

function randomize(max) {
    return Math.round(Math.random() * (max -1));
    

    // if (randomBtn >= 0 && randomBtn <= 2) {
    //     btn[randomBtn].setAttribute('disabled', 'true');
    // } else {
    //     if (randomBtn >= 3 && randomBtn <= 6) {
    //         btn[randomBtn].removeAttribute('disabled')
    //     } else {
    //         alert("You've won 1.000.000 dollars!!!")
    //     }
    // }
    
}

function doStuff() {
    var randomBtn = randomize(btn.length);
    console.log('button ' + randomBtn)
    var randomOption = randomize(options.length);
    console.log('option ' + randomOption)

    if(options[randomOption] == 'disabled') {
        btn[randomBtn].setAttribute('disabled', 'true')
    } else if (options[randomOption] == 'enable') {
        btn[randomBtn].removeAttribute('disabled')
    } else {
        alert("CONGRATS!!! You've won 1.000.000 dollars!!!")
    }
}

for (var i = 0; i < btn.length; i++) {
    btn[i].addEventListener('click', doStuff)
}