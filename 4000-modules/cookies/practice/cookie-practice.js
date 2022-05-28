// Cookie structure: Cookie name, cookie value, expiration date, path (default "/")

var submitBtn = document.querySelector('button');
submitBtn.addEventListener('click', createCookie);

var nameInput = document.querySelector('#name')
var valueInput = document.querySelector('#value')
var expirationInput = document.querySelector('#expiration')

function createCookie() {
    var cookieName = nameInput.value;
    var cookieValue = valueInput.value;
    var date = new Date();
    date.setTime(date.getTime() + expirationInput.value * 1000); // Gets current time + 60 seconds
    
    var expirationDate = date.toUTCString();
    
    
    document.cookie = cookieName + "=" + cookieValue + "; expires=" + expirationDate + ";path=/";
}

function readCookie() {
    var allCookies = document.cookie;
    console.log(allCookies); // logs all active cookies
    var splitCookies = allCookies.split(';')
    console.log(splitCookies); // makes the allCookies var split into an array
    console.log(splitCookies[1]); // selects a specific cookie inside of the array

    var splitRequestedCookie = splitCookies[2].split('=')
    var requestedCookie = splitRequestedCookie[1];
    console.log(requestedCookie);
}

readCookie();