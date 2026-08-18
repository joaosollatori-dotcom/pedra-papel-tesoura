const showResult = document.createElement("div")
const showResultText = document.createElement("p")

showResult.appendChild(showResultText)
document.body.appendChild(showResult)

// Fazer o computador escolher uma opção aleatoria
function getComputerChoice() {
    const choiceComputer = ["pedra", "papel", "tesoura"];
    const indiceAleatorio = Math.floor(Math.random() * 3);
    console.log(choiceComputer[indiceAleatorio]);
    return choiceComputer[indiceAleatorio]
}

function playRound(humanChoice, computerChoice) {
    humanChoiceNormalize = humanChoice.toLowerCase();
    
    if (humanChoiceNormalize === computerChoice) {
        showResultText.textContent = `Você escolheu ${humanChoiceNormalize} e o computador escolheu ${computerChoice}, deu empate! Placar: Você ${humanScore} x ${computerScore} Computador`
    } else if (humanChoiceNormalize === "pedra" && computerChoice === "tesoura" || humanChoiceNormalize === "tesoura" && computerChoice === "papel" || humanChoiceNormalize === "papel" && computerChoice === "pedra") {
        humanScore++     
        showResultText.textContent = `Você escolheu ${humanChoiceNormalize} e o computador escolheu ${computerChoice}, você venceu!  Placar: Você ${humanScore} x ${computerScore} Computador`
    } else {
        computerScore++
        showResultText.textContent = `Você escolheu ${humanChoiceNormalize} e o computador escolheu ${computerChoice}, você perdeu! Placar: Você ${humanScore} x ${computerScore} Computador`
    }

    if (humanScore === 5) {
        showResultText.textContent = "🏆 FIM DE JOGO! Você atingiu 5 pontos e venceu a partida!"
    } else if (computerScore === 5) {
        showResultText.textContent = "💀 FIM DE JOGO! O computador atingiu 5 pontos e venceu a partida!"
    }
}

let humanScore = 0;
let computerScore = 0;

const playGame = document.querySelector("#botoes") 
playGame.addEventListener("click", (event) => {
    let playerSelection = event.target.id
    let computerSelection = getComputerChoice()

    playRound(playerSelection, computerSelection)
})

