// Button recovery
let play = document.getElementById("play-game")

// click event on 'play'
play.addEventListener("click", function() {
    // Random number for dice roll
    let randomPlayer = Math.floor(Math.random() * 6 + 1);
    let randomPc = Math.floor(Math.random() * 6 + 1);
    // h2#winner and p#victory-info recovery
    let winner = document.getElementById("winner")
    let victory = document.getElementById("victory-info")
    // if the winner is player 1...
    if (randomPlayer > randomPc) {
        winner.innerHTML = "Player 1 vince"
        victory.innerHTML = `Player 1 vince con un ${randomPlayer}, battendo il numero ${randomPc} del PC`
    }
    // else if there's a draw...
    else if (randomPlayer === randomPc) {
        winner.innerHTML = "Pareggio"
        victory.innerHTML = `Pareggio: entrambi hanno totalizzato ${randomPlayer}`
    }
    // else if the winner is the pc...
    else {
        winner.innerHTML = "Pc vince"
        victory.innerHTML = `Il PC vince con un ${randomPc}, battendo il numero ${randomPlayer} del Player 1`
    }
})