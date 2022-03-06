var form = document.getElementById('contactForm');
form.addEventListener('submit', validateForm);

// Input selectors
var firstNameInput = document.getElementById('firstName');
var lastNameInput = document.getElementById('lastName');
var ageInput = document.getElementById('age');
var genderInput = document.getElementById('gender');
var phoneInput = document.getElementById('phone');
var emailInput = document.getElementById('email');
var messageInput = document.getElementById('message');

// Error message paragraph selectors
var firstNameError = document.getElementById('firstNameError');
var lastNameError = document.getElementById('lastNameError');
var ageError = document.getElementById('ageError');
var genderError = document.getElementById('genderError')
var emailError = document.getElementById('emailError')

// Error class selector for errorMessage() function
var errorTextSelector = document.getElementsByClassName('error');

var hasError = false;

function errorMessage(errorSelector=null) {
    if (errorSelector !== null) {
        hasError = true;
        errorSelector.classList.add('error');
        // errorSelector.style.display = "block"
        // errorSelector.style.color = "white"
        // errorSelector.style.backgroundColor = "red"
    }
}

// function removeError() {
//     inputSelector.classList.remove('error');
// }

function validateForm(event) {
    event.preventDefault();

    // Checks first name for empty string
    if (firstNameInput.value === "") {
        errorMessage(firstNameError)
        firstNameError.innerText = "Name is required";
        console.log("First name is empty")
    } else {
        // Checks first name string for spaces
        if (firstNameInput.value.indexOf(' ') > -1) {
            errorMessage(firstNameError)
            firstNameError.innerText = "Name cannot contain spaces";
            console.log("First name contains a space")
        }
    }

    // Checks last name for empty string
    if (lastNameInput.value === "") {
        errorMessage(lastNameError)
        lastNameError.innerText = "Last name is required";
        console.log("Last name is empty")
    } else {
        // Checks last name for spaces
        if (lastNameInput.value.indexOf(' ') > -1) {
            errorMessage(lastNameError)
            lastNameError.innerText = "Last name cannot contain spaces";
            console.log("Last name contains space")
        }
    }

    // Checks if age is empty
    if (ageInput.value === "") {
        errorMessage(ageError)
        ageError.innerText = "Age is required";
        console.log("Age is empty")
    } else {
        // Checks if age is a number
        if (isNaN(ageInput.value)) {
            errorMessage(ageError)
            ageError.innerText = "Age must be a number";
            console.log("Age is not a number")
        } else {
            // Checks if age is not a float
            if (ageInput.value % 1 !== 0) {
                errorMessage(ageError)
                ageError.innerText = "Age must be a whole number";
                console.log("Age must be an integer")
            } else {
                // Checks if minimum age is 18
                if (ageInput.value < 18) {
                    errorMessage(ageError)
                    ageError.innerText = "The minimum age is 18";
                    console.log('Age is lower than 18')
                }
            }
        }
    }

    // Checks if phone is a number (if filled in, not required)
    if (isNaN(phoneInput.value)) {
        errorMessage(phoneError);
        phoneError.innerText = "Only numbers are allowed"
        console.log('Phone contains more than just numbers')
    } else {
        // Checks if phone number contains floats
        if (phoneInput.value % 1 !== 0) {
            errorMessage(phoneError);
            phoneError.innerText = "Only numbers are allowed"
            console.log('Phone contains float value')
        } else {
            // Checks if phone number contains spaces
            if (phoneInput.value.indexOf(' ') > -1) {
                errorMessage(phoneError);
                phoneError.innerText = "Phone number cannot contain spaces"
                console.log('Phone value contains space')
            }
        }
    }

    // Checks if e-mail is filled in
    if (emailInput.value === "") {
        errorMessage(emailError)
        emailError.innerText = "An e-mail address is required";
        console.log('Email is empty')
    } else {
        if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(emailInput.value)) {
            console.log('Email validation passed')
        } else {
            errorMessage(emailError);
            emailError.innerText = "Please enter a proper e-mail address"
            console.log('Not a proper e-mail')
        }
    }

    if (hasError === false) {
        console.log('Form succesfully submitted')
        form.submit();
    }
}

firstNameInput.addEventListener('keydown', function(){
    firstNameError.classList.remove('error')
})

lastNameInput.addEventListener('keydown', function(){
    lastNameError.classList.remove('error')
})

ageInput.addEventListener('keydown', function(){
    ageError.classList.remove('error')
})

genderInput.addEventListener('keydown', function(){
    genderError.classList.remove('error')
})

phoneInput.addEventListener('keydown', function(){
    phoneError.classList.remove('error')
})

emailInput.addEventListener('keydown', function(){
    emailError.classList.remove('error')
})