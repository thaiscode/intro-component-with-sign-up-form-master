/*button submit*/ 
let submitButton = document.querySelector('.form__box-button')

/*Box error of inputs*/
let errorName = document.querySelector('.name__box--error')
let errorLastName = document.querySelector('.lastName__box--error')
let errorEmail = document.querySelector('.email__box--error')
let errorPassword = document.querySelector('.password__box--error')


submitButton.addEventListener('click', validation)


function validation() {
    /*Input's*/
    let name = document.querySelector('#form__name')
    let lastName = document.querySelector('#form__last-name')
    let email = document.querySelector('#form__email')
    let password = document.querySelector('#form__password')

    /*Validation for each input*/

    /*Name input*/
    if (name.value == "") {
        errorName.innerHTML = `${name.name} cannot be empty`
        name.style.background = 'url(images/icon-error.svg) no-repeat right 1.5rem center'
    } 

    /*Last name input*/
    if (lastName.value == "") {
        errorLastName.innerHTML = `${lastName.name} cannot be empty`
        lastName.style.background = 'url(images/icon-error.svg) no-repeat right 1.5rem center'
    } 

    /*Email input*/
    if (email.value == "") {
        errorEmail.innerHTML = `${email.name} cannot be empty`
        email.style.background = 'url(images/icon-error.svg) no-repeat right 1.5rem center'

    } else if (!email.checkValidity()) {
        /*Clear value of input*/
        email.value = 'email@example/com'

        /*Change value color*/
        email.style.color = 'hsl(0, 100%, 74%)'

        errorEmail.innerHTML = "Looks like this is not an email"
        email.style.background = 'url(images/icon-error.svg) no-repeat right 1.5rem center'
    }

    /*Password input*/
    if (password.value == "") {
        errorPassword.innerHTML = `${password.name} cannot be empty`
        password.style.background = 'url(images/icon-error.svg) no-repeat right 1.5rem center'
    } 
}   