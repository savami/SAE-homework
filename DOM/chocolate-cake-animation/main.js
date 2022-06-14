var img = document.querySelector('img');

function shakeNo() {
    img.classList.add('shakeNo')
}

function enlargeCake() {
    var currentSize = img.width;
    var screenSize = window.innerWidth;
    img.classList.remove('shakeNo');
    // console.log('Current image size is ' + currentSize + 'px');
    // console.log('Current window width is ' + screenSize + 'px');

    if (currentSize < (screenSize / 2)) {
        img.style.width = currentSize + 50 + 'px';
    } else {
        setTimeout(shakeNo, 1);
    }  
}

img.addEventListener('click', enlargeCake);