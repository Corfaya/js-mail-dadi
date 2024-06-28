// Button
const play = document.getElementById("play-game")

// click event on 'play'
play.addEventListener("click", function() {
    // Random number for dice roll
    let randomPlayer = Math.floor(Math.random() * 6 + 1);
    let randomPc = Math.floor(Math.random() * 6 + 1);
    // h4 and p recovery
    let score = document.getElementById("score")
    let victory = document.getElementById("victory")
    // if the winner is player 1...
    if (randomPlayer > randomPc) {
        winner.innerHTML = "Player 1 vince"
        score.innerHTML = `Player 1 vince con un ${randomPlayer}, battendo il numero ${randomPc} del PC`
        victory.innerText = `Player 1: ${randomPlayer} PC: ${randomPc}`
    
    }
    // else if there's a draw...
    else if (randomPlayer === randomPc) {
        winner.innerHTML = "Pareggio"
        score.innerHTML = `Pareggio: entrambi hanno totalizzato ${randomPlayer}`
        victory.innerText = `Player 1: ${randomPlayer} PC: ${randomPc}`
    
    }
    // else if the winner is the pc...
    else {
        winner.innerHTML = "Pc vince"
        score.innerHTML = `Il PC vince con un ${randomPc}, battendo il numero ${randomPlayer} del Player 1`
        victory.innerText = `Player 1: ${randomPlayer} PC: ${randomPc}`
    
    }    
})