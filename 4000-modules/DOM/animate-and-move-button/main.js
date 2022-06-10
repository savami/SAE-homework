var button = document.getElementById('button')
var buttonContainer = document.getElementById('container')
button.addEventListener('click', editButton)

function editButton() {
    var currentLeft = button.getBoundingClientRect().left;
    console.log(currentLeft)
    

    if (button.classList.contains('button-transformation')) {
        console.log ('Moving button to the right...')
        // button.style.transform = "translateX(100px)"
        buttonContainer.style.left = currentLeft + 100 + "px";
    } else {
        console.log('Adding button-transformation class...')
        button.classList.add('button-transformation');
    }
}