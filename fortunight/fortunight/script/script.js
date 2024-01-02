
const playerNameInput = document.querySelector('.login-input')
const loginButton = document.querySelector('.login-button')
const mensageError =  document.querySelector('.alert')


//validate login

mensageError.style.display = 'none';

loginButton.addEventListener('click', function validarLogin() {

    const playerName = playerNameInput.value;

    if(playerName.trim().length < 4 || playerPassword.trim().length < 6) {
    
        mensageError.innerText = 'Seu nome deve ter no mímino 4 caracteres e sua senha deve ter no mínimo 6 caracteres!'
        mensageError.style.display = 'block'

        return
    }


    localStorage.setItem('player', playerNameInput.value)
    window.location = "./pages/gameroom.html"

})
