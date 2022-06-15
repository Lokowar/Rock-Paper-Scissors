game()

function game(){
    console.log("-- PEDRA, PAPEL, TESOURA --")
    console.log("Faça sua escolha")
    const input = prompt()
    const player = playerSelection(input)
    const ai = computerPlay()
    const computer = computerSelection(ai)
    console.log(player, ai, computer) 
    playRound(player, computer)
}

function playRound(playerSelection, computerSelection){
    if (playerSelection === computerSelection){
        console.log("empate")
    }

    if (playerSelection === "pedra" && computerSelection === "tesoura"){
        console.log("Jogador venceu")
    }

    if (playerSelection === "papel" && computerSelection === "pedra"){
        console.log("Jogador venceu")
    }

    if (playerSelection === "tesoura" && computerSelection === "papel"){
        console.log("Jogador venceu")
    }

    if (playerSelection === "tesoura" && computerSelection === "pedra"){
        console.log("CPU venceu")
    }

    if (playerSelection === "pedra" && computerSelection === "papel"){
        console.log("CPU venceu")
    }

    if (playerSelection === "papel" && computerSelection === "tesoura"){
        console.log("CPU venceu")
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