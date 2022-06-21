menu()

function menu(){
    console.log("-- PEDRA, PAPEL, TESOURA --")
    console.log("Faça sua escolha")
    /* MOUSE */
    window.onload = function(){
        let div1 = document.querySelector('#btn1');
        div1.addEventListener('click', (event) => {game(input = 'papel')});

        let div2 = document.querySelector('#btn2');
        div2.addEventListener('click', (event) => {game(input = 'pedra')});

        let div3 = document.querySelector('#btn3');
        div3.addEventListener('click', (event) => {game(input = 'tesoura')});
    }
}

function game(input){
    /* MECANICA */
    const player = playerSelection(input)
    const ai = computerPlay()
    const computer = computerSelection(ai)
    console.log(player, ai, computer) 
    playRound(player, computer)
}

function playRound(playerSelection, computerSelection){
    if (playerSelection === computerSelection){
        var paragrafo = document.getElementById('r');
        paragrafo.textContent = "Empate";
    }

    if (playerSelection === "pedra" && computerSelection === "tesoura"){
        var paragrafo = document.getElementById('r');
        paragrafo.textContent = "Vitória";
    }

    if (playerSelection === "papel" && computerSelection === "pedra"){
        var paragrafo = document.getElementById('r');
        paragrafo.textContent = "Vitória";
    }

    if (playerSelection === "tesoura" && computerSelection === "papel"){
        var paragrafo = document.getElementById('r');
        paragrafo.textContent = "Vitória";
    }

    if (playerSelection === "tesoura" && computerSelection === "pedra"){
        var paragrafo = document.getElementById('r');
        paragrafo.textContent = "Perdeu";
    }

    if (playerSelection === "pedra" && computerSelection === "papel"){
        var paragrafo = document.getElementById('r');
        paragrafo.textContent = "Perdeu";
    }

    if (playerSelection === "papel" && computerSelection === "tesoura"){
        var paragrafo = document.getElementById('r');
        paragrafo.textContent = "Perdeu";
    }
}

function computerSelection(computerPlay){
    let result = "" 

    if (computerPlay === 0){
        result = "pedra"
        return result
    }

    if (computerPlay === 1){
        result = "papel"
        return result
    }

    if (computerPlay === 2){
        result = "tesoura"
        return result
    }
}

function playerSelection(input){
    if (input === "pedra") {
        return input
    }

    if (input === "papel") {
        return input
    }

    if (input === "tesoura") {
        return input
    } else {
        console.log("Digite uma opção valida")
        game()
    }
}

function computerPlay(){
    const a = randomNumber()
    return a
}

function randomNumber() { 
    return Math.trunc(Math.random() * 3)
} 