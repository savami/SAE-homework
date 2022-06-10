var infoSelector = document.querySelector('.infoBtn');
var textContainer = document.querySelector('.textContainer');
var imgDesc = document.querySelector('.imgDesc');
var img = document.querySelector('#aurora');

infoSelector.addEventListener('click', openDesc);

function openDesc() {
    imgDesc.innerText = img.alt;
    var textContainerHeight = textContainer.offsetHeight;
    textContainer.style.marginTop = "-" + textContainerHeight + "px";
    infoSelector.classList.remove('blastIn');
    infoSelector.classList.add('blastOut');
}

function closeDesc() {
    textContainer.style.marginTop = '0px';
    infoSelector.classList.remove('blastOut');
    infoSelector.classList.add('blastIn');
}