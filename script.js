var fields = {};

document.addEventListener("DOMContentLoaded", function() {
    fields.firstName = document.getElementById('firstName');
    fields.lastName = document.getElementById('lastName');
    fields.emailAddress = document.getElementById('emailAddress');
    fields.message = document.getElementById('message');
})

function isNotEmpty(value) {
    if (value == null || typeof value == 'undefined' ) return false;

    return (value.length >= 1);
}

function fieldValidation(field, validationFunction) {
    if (field == null) return false;
   
    let isFieldValid = validationFunction(field.value)
    if (!isFieldValid) {
    field.className = 'placeholderRed';
    } else {
    field.className = '';
    }
   
    return isFieldValid;
}

function isValid() {
    var valid = true;

    valid &= fieldValidation(fields.firstName, isNotEmpty);
    valid &= fieldValidation(fields.lastname, isNotEmpty);
    valid &= fieldValidation(fields.emailAddress, isNotEmpty);
    valid &= fieldValidation(fields.message, isNotEmpty);

    return valid;
}

function sendMessage() {
    
    if (isValid()) {

        alert('Thank you for your message. I will reply as soon as possible!')
    } 

    else {
        alert("I'm sorry, please try again.")
    }
}
