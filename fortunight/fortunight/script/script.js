
const playerNameInput = document.querySelector('.login-input')
const playerPasswordInput = document.querySelector('.password-input')
const loginButton = document.querySelector('.login-button')
const mensageError =  document.querySelector('.alert')
const registerButton = document.querySelector('.register-button')



//validate login

mensageError.style.display = 'none';

loginButton.addEventListener('click', function validarLogin() {

    const playerName = playerNameInput.value;
    const playerPassword = playerPasswordInput.value;

    if(playerName.trim().length < 4 || playerPassword.trim().length < 6) {
    
        mensageError.innerText = 'Seu nome deve ter no mímino 4 caracteres e sua senha deve ter no mínimo 6 caracteres!'
        mensageError.style.display = 'block'

        return
    }


    localStorage.setItem('player', playerNameInput.value)
    window.location = "saladejogos.html"

})


//Create Account

registerButton.addEventListener('click', function register() {
     window.location = 'register.html'
})

//remake