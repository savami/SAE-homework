var button = document.querySelector('button')
var box = document.getElementById('box')
var boxContainer = document.getElementById('boxContainer')

button.addEventListener('click', showMagic)

var id = null;

function myMove() {   
    var pos = 0;
    clearInterval(id);
    id = setInterval(frame, 10);
    function frame() {
      if (pos == 350) {
        clearInterval(id);
      } else {
        pos++; 
        box.style.top = pos + 'px'; 
        box.style.left = pos + 'px'; 
      }
    }
  }

function showMagic() {
    if (box.classList.contains('hidden')) {
        box.classList.remove('hidden')
    } else {
        myMove();
    }   
}