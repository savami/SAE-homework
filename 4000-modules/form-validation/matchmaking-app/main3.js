var boyInput = document.getElementById('boy').value;
var girlInput = document.getElementById('girl').value;

var buttonSelector = document.getElementById('calculate');
buttonSelector.addEventListener('click', compareString)

function compareString() {
    var string1 = boyInput;
    var string2 = girlInput;
    var result = string1.localeCompare(string2);

    alert(result);
}