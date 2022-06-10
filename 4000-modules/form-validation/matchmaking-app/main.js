var boyInput = document.getElementById('boy').value;
var girlInput = document.getElementById('girl').value;
var buttonSelector = document.getElementById('calculate');

buttonSelector.addEventListener('click', validateForm)

function validateForm() {
    if (boyInput === null) {
        alert("Enter a boy's name")
    } else {
        if (girlInput === null) {
            alert("Enter a girl's name")
        } else {
            similarity(boyInput, girlInput)
        }
    }
}

function similarity(name1, name2) {
    var equivalency = 0;
    var minLength = (name1.length > name2.length) ? name2.length : name1.length;
    var maxLength = (name1.length < name2.length) ? name2.length : name1.length;

    for(var i = 0; i < minLength; i++) {
        if(name1[i] == name2[i]) {
            equivalency++;
        }
    }

    var names = equivalency / maxLength;
    alert((names * 100) + "%");
}





