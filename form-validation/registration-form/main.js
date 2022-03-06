// const { on } = require("nodemon");

var form = document.getElementById('registrationForm');
form.addEventListener('submit', validateForm);

// Input Selectors
var userIdInput = document.getElementById('userId')
var passwordInput = document.getElementById('password')
var nameInput = document.getElementById('fullName')
var addressInput = document.getElementById('address')
var countryInput = document.getElementById('country')
var zipCodeInput = document.getElementById('zipCode')
var emailInput = document.getElementById('email')
var genderInput = document.getElementById('sexRadio')
var languageInput = document.getElementById('language')
var aboutInput = document.getElementById('about')

// Error selector
var countryError = document.getElementById('countryError')
var genderError = document.getElementById('genderError')
var languageError = document.getElementById('languageError')

var hasError = false; 

function errorMessage(errorSelector=null) {
    if (errorSelector !== null) {
        hasError = true;
        errorSelector.classList.add('error')
    }
}

console.log(genderInput.value)

function validateForm(event) {
    event.preventDefault();

    console.log("Country value is " + countryInput.value)
    console.log("Gender value is " + genderInput.value)
    console.log("Language value is " + languageInput.value)

    if (userIdInput.value === "") {
        errorMessage(userIdInput)
        userIdInput.placeholder = "User ID is required"
    } else {
        if (userIdInput.value < 5 || userIdInput.value > 12) {
            errorMessage(userIdInput)
            userIdInput.placeholder = "User ID must be between 5 and 12 characters"
        }
    }

    if (passwordInput.value === "") {
        errorMessage(passwordInput)
        passwordInput.placeholder = "Password is required"
    } else {
        if (passwordInput.value < 7 || passwordInput.value > 12) {
            errorMessage(passwordInput)
            passwordInput.placeholder = "Password msut be between 7 and 12 characters"
        }
    }

    if (nameInput.value === "") {
        errorMessage(nameInput)
        nameInput.placeholder = "Full name is required"
    } else {
        if (!/[^a-zA-Z]/.test(nameInput.value)) {
            errorMessage(nameInput)
            nameInput.placeholder = "Name can only contain letters"
        }
    }

    if (countryInput.value === "undefined") {
        errorMessage(countryInput)
        countryError.innerText = "Required"
        countryError.style.display = "inline"
    }

    if (zipCodeInput.value == "") {
        errorMessage(zipCodeInput)
        zipCodeInput.placeholder = "ZIP Code is required"
    } else {
        if (isNaN(zipCodeInput)) {
            errorMessage(zipCodeInput)
            zipCodeInput.placeholder = "ZIP Code can only contain numbers"
        }
    }

    if (emailInput.value === "") {
        errorMessage(emailInput)
        emailInput.placeholder = "E-mail is required"
        console.log('E-mail is required')
    } else {
        if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(emailInput.value)) {
            console.log('Succesfully validated e-mail')
        } else {
            errorMessage(emailInput);
            emailInput.placeholder = "Please enter a proper e-mail address"
        }
    }

    if (genderInput.value === null) {
        errorMessage(genderInput)
        genderError.innerText = "Required"
        genderError.style.display = "inline"
    }

    if (languageInput.value === null) {
        errorMessage(languageInput)
        languageError.innerText = "Required"
        languageError.style.display = "inline"
    }

    if (errorMessage === false) {
        console.log('Form succesfully submitted')
        form.submit();
    }
}