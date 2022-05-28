var form = document.getElementById('contactForm')
form.addEventListener('submit', validateForm);

var firstNameInput = document.getElementById('firstName')
var lastNameInput = document.getElementById('lastName')
var ageInput = document.getElementById('age')
var genderInput = document.getElementById('gender')
var phoneInput = document.getElementById('phone')
var emailInput = document.getElementById('email')
var messageInput = document.getElementById('message')

var errorTextSelector = document.getElementsByTagName('p')

// function hasError() {
    // errorTextSelector.style.display = "block";
    // inputSelector.style.borderColor = "red";
// }

function validateForm(event) {
    event.preventDefault();
    
    // Checks first name for empty string
    if (firstNameInput.value === "") {
        // hasError()
        document.getElementById('firstNameError').innerText = "Name is required";
        console.log("Name is empty")
    } else {
        // Checks first name string for spaces
        if (firstNameInput.value.indexOf(' ') > -1) {
            // hasError()
            document.getElementById('firstNameError').innerText = "Name cannot contain spaces"
            console.log("Name cannot contain spaces")
        }
    }  
    
    // Checks last name for empty string
    if (lastNameInput.value === "") {
        // hasError()
        document.getElementById('lastNameError').innerText = "Last name is required"
        console.log("Last name is empty")
    } else {
        // Checks last name for spaces
        if (lastNameInput.value.indexOf(' ') > -1) {
            // hasError()
            document.getElementById('lastNameError').innerText = "Last name cannot contain spaces"
            console.log("Last name cannot contain spaces")
        }
    }
    
    // Checks if age is a number or contains spaces
    if (isNaN(ageInput.value)) {
        // hasError()
        document.getElementById('ageError').innerText = "Age must be a number"
        console.log('Age must be a number')
    } else {
        // Checks age for empty string
        if (ageInput.value === "") {
            // hasError()
            document.getElementById('ageError').innerText = "Age is required"
            console.log("Age is empty")  
        } else {
            // Checks if age number is a float
            if (ageInput.value % 1 !== 0) {
                // hasError()
                document.getElementById('ageError').innerText = "Age must be a whole number"
                console.log('Age must be an integer')
            } else 
            // Checks if the minimum age is 18
            if (ageInput.value < 18) {
                // hasError()
                document.getElementById('ageError').innerText = "The minimum age is 18"
                console.log('Minimum age is 18')
            }
        }
    } 
    
    if (genderInput.value === undefined || genderInput.value === null) {
        // hasError()
        document.getElementById('genderError').innerText = "Please select a gender"
        console.log('Gender not defined')
    } else {
        if (emailInput.value === "") {
            // hasError()
            document.getElementById('emailError').innerText = "An e-mail address is required"
            console.log('E-mail address empty')
        } else {
            form.submit()
        }
    }
}