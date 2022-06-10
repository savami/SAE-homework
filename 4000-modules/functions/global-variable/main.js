var promptValue = [prompt('Enter a value'), prompt('Enter a second value'), prompt('Enter a third value')]

console.log(promptValue)

function printArray() {
    var promptPrint = document.querySelector('#promptPrint')
    
    promptPrint.textContent = promptValue.join(' ')

}

