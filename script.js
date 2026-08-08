// Fazer o computador escolher uma opção aleatoria
function getComputerChoice() {
    const choiceComputer = ["pedra", "papel", "tesoura"];
    const indiceAleatorio = Math.floor(Math.random() * 3);
    console.log(choiceComputer[indiceAleatorio]);
    return choiceComputer[indiceAleatorio]
}

// Pegar a escolha do usuário e a retorna
function getHumanChoice() {
    let choiceUser = prompt("pedra, papel ou tesoura? ");
    console.log(choiceUser);
    return choiceUser
}

function playGame() {
    let humanScore = 0;
    let computerScore = 0;

    function playRound(humanChoice, computerChoice) {
        humanChoiceNormalize = humanChoice.toLowerCase();
        if (humanChoiceNormalize === computerChoice) {
            console.log("Deu empate abestado!");
        } else if (humanChoiceNormalize === "pedra" && computerChoice === "tesoura") {
            humanScore++
            console.log("Voce venceu.");
        } else if (humanChoiceNormalize === "tesoura" && computerChoice === "papel") {
            humanScore++
            console.log("Voce venceu.");
        } else if (humanChoiceNormalize === "papel" && computerChoice === "pedra") {
            humanScore++
            console.log("Voce venceu.");
        } else {
            computerScore++
            console.log("Você perdeu")
        }
    }

        for (let i = 0; i < 5; i++) {
            let humanSelection = getHumanChoice();
            let computerSelection = getComputerChoice();

            playRound(humanSelection, computerSelection);
        }
    
    
    if (humanScore === computerScore) {
        console.log("Empate! Jogue novamente.")
    } else if (humanScore > computerScore) {
        console.log("Você venceu o jogo!")
    } else {
        console.log("Você perdeu o jogo!")
    }
}

playGame();