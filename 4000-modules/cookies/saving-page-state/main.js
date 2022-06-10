var submitBtn = document.querySelector('#container button')

submitBtn.addEventListener('click', submitForm);

window.addEventListener('load', function() {
    
    var readName = readCookie('userName');
    var readTextColor = readCookie('textColor');
    var readBgColor = readCookie('bgColor');

    if (readCookie('userName') == null || readCookie('textColor') == null || readCookie('bgColor') == null) {
        return;
    } else {
        document.querySelector('#container').remove()
        document.querySelector('#welcome').innerText = "Welcome " + readName;
        document.body.style.color = readTextColor;
        document.body.style.backgroundColor = readBgColor;
    }
})

function createCookie(cookieName, value, days) {
    value = escape(JSON.stringify(value));
    let expires;
    
    if (days) {
        const date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        expires = '; expires=' + date.toGMTString();
    } else {
        expires = '';
    }
    
    document.cookie = cookieName + '=' + value + expires + '; path=/';
}

function readCookie(cookieName) {
    const nameEQ = cookieName + '=';
    const ca = document.cookie.split(';');
    for (let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) === ' ') {
            c = c.substring(1, c.length);
        }
        if (c.indexOf(nameEQ) === 0) {
            let contents = c.substring(nameEQ.length, c.length);
            contents = JSON.parse(unescape(contents));
            return contents;
        }
    }
    return null;
}

function submitForm() {
    var nameInput = document.querySelector('#name').value;
    var textColorInput = document.querySelector('#textColor').value;
    var bgColorInput = document.querySelector('#bgColor').value;

    if (nameInput == "" || textColorInput == "" || bgColorInput == "") {
        alert('Please fill in all the fields');
    } else {
        createCookie("userName", nameInput, 30);
        createCookie("textColor", textColorInput, 30);
        createCookie("bgColor", bgColorInput, 30);
        document.querySelector('#container p').style.display = "block";
    }

    console.log(nameInput)
    console.log(textColorInput)
    console.log(bgColorInput)
}