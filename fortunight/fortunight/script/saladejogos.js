

document.addEventListener('DOMContentLoaded', function() {

    const spanPlayer = document.querySelector('.player');
    const playerName = localStorage.getItem('player');
    

    spanPlayer.innerHTML = `WELLCOME TO FORTUNIGHT, ${playerName}!`  
    
});

// jogo de dados --

console.log('jogo de dados')

const dado = [1,2,3,4,5,6]

console.log(dado)

function jogarDado() {
   dado.sort(function() {
    return 0.5 - Math.random()
   })
    console.log(`Resultado: ${dado[0]}`)
}

jogarDado()
jogarDado()

 



