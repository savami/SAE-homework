var promptValue = [prompt('Enter a value'), prompt('Enter a second value'), prompt('Enter a third value')]


function printArray() {

    var promptPrint = document.querySelector('#promptPrint')
    
    promptPrint.textContent = promptValue.join(' ')

}

// promptElement.addEventListener("click", function(){
//     for(var i = 1; i < promptValue; i++) {
//       promptElement.innerHTML = promptValue;
//     }
// })

console.log(promptValue)