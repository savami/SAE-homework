var paragraphText = document.querySelector('p');
var boldText = document.getElementsByTagName('b');

paragraphText.addEventListener('mouseover', highlightText)
paragraphText.addEventListener('mouseout', resetHighlight)

function highlightText() {

    for (var i = 0; i < boldText.length; i++) {
        boldText[i].style.backgroundColor = "green";
    }
    
}

function resetHighlight() {

    for (var i = 0; i < boldText.length; i++) {
        boldText[i].style.backgroundColor = "white";
    }
    
}