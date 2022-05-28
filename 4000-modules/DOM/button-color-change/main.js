var box = document.querySelector('.box')

box.addEventListener('mouseover', mouseHover)
function mouseHover() {
    box.classList.add('hover')
}

box.addEventListener('mouseout', mouseOut)
function mouseOut() {
    box.classList.remove('hover')
}

function randomBgColor() {
    var x = Math.floor(Math.random() * 256);
    var y = Math.floor(Math.random() * 256);
    var z = Math.floor(Math.random() * 256);
    var bgColor = "rgb(" + x + "," + y + "," + z + ")";

    document.body.style.backgroundColor = bgColor;
}

box.addEventListener('click', boxClick)
function boxClick() {
    document.body.style.backgroundColor = randomBgColor();
}