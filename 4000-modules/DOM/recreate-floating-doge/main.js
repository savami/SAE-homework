var doge = document.getElementById('doge');
doge.addEventListener('mouseover', moveDoge);

var marquee = document.getElementById('marquee');
var marquee2 = document.getElementById('marquee2');

function moveDoge() {
    if (doge.classList.contains('dogeMoved')) {
        doge.classList.remove('dogeMoved');
    } else {
        doge.classList.add('dogeMoved');
    }
}

setInterval(function randomColor() {
    var x = Math.floor(Math.random() * 256);
    var y = Math.floor(Math.random() * 256);
    var z = Math.floor(Math.random() * 256);
    var marqueeColor = "rgb(" + x + "," + y + "," + z + ")";

    marquee.style.color = marqueeColor;
    marquee2.style.color = marqueeColor;
}, 150);

