let submitButton = document.querySelector('\#submit-button');
function emailValidate(email){
    return email.includes('@');
}
function clickListner(event) {
    event.preventDefault();
    let emailInput = document.querySelector('#email');
    let messageInput = document.querySelector('#message');

    let emailText = emailInput.value;
    let messageText = messageInput.value;

    if(emailValidate(emailText) !== true) {
        console.log('The email adress must containt @');
        return false;
    }
    console.log('Thanks for your message');
}
submitButton.addEventListener('click', clickListner);