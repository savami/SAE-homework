var boyInput = document.getElementById('boy');
var girlInput = document.getElementById('girl');

var result = Math.round(similarity(boyInput, girlInput)*10000)/100;

var buttonSelector = document.getElementById('calculate');
buttonSelector.addEventListener('click', validateForm)

function validateForm() {
    if (boyInput.value === "") {
        alert('Enter a boy\'s name')
    } else {
        if (girlInput.value === "") {
            alert('Enter a girl\'s name')
        } else {
            alert(result);
        }
    }
}

function similarity(name1, name2) {
    var longer = name1;
    var shorter = name2;
    if (name1.length < name2.length) {
      longer = name2;
      shorter = name1;
    }
    var longerLength = longer.length;
    if (longerLength === 0) {
      return 1.0;
    }
    return (longerLength - editDistance(longer, shorter)) / parseFloat(longerLength);
  }

function editDistance(name1, name2) {
    name1 = name1;
    name2 = name2;

    var names = new Array();

    for (var i = 0; i <= name1.length; i++) {
        var lastValue = i;
        for (var j = 0; j <= name2.length; j++) {
            if (i == 0)
            names[j] = j;
        else {
            if (j > 0) {
                var newValue = names[j - 1];
                if (name1.charAt(i - 1) != name2.charAt(j - 1))
                    newValue = Math.min(Math.min(newValue, lastValue), names[j]) + 1;
                names[j - 1] = lastValue;
                lastValue = newValue;
                }
            }
        }
        if (i > 0)
            names[name2.length] = lastValue;
    }
    return names[name2.length];
}