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
    // imgs recovery
    let player = document.getElementById("player-one")
    let pc = document.getElementById("pc");
    // [src="img/dice+random"]
    player.setAttribute("src", `./img/dice${randomPlayer}.png`);
    pc.setAttribute("src", `./img/dice${randomPc}.png`);
    // if the winner is player 1...
    if (randomPlayer > randomPc) {
        winner.innerHTML = "Player 1 vince"
        score.innerHTML = `Player 1 vince con un ${randomPlayer}, battendo il numero ${randomPc} del PC`
        victory.innerHTML = `Player 1: <span class="fw-bolder text-danger">${randomPlayer}</span> PC: <span class="fw-bolder text-danger">${randomPc}</span>`
    }
    // else if there's a draw...
    else if (randomPlayer === randomPc) {
        winner.innerHTML = "Pareggio"
        score.innerHTML = `Pareggio: entrambi hanno totalizzato ${randomPlayer}`
        victory.innerHTML = `Player 1: <span class="fw-bolder text-danger">${randomPlayer}</span> PC: <span class="fw-bolder text-danger">${randomPc}</span>`
    }
    // else if the winner is the pc...
    else {
        winner.innerHTML = "Pc vince"
        score.innerHTML = `Il PC vince con un ${randomPc}, battendo il numero ${randomPlayer} del Player 1`
        victory.innerHTML = `Player 1: <span class="fw-bolder text-danger">${randomPlayer}</span> PC: <span class="fw-bolder text-danger">${randomPc}</span>`
    }    
})