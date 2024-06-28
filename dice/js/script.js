// Button recovery
let play = document.getElementById("play-game")

// click event on 'play'
play.addEventListener("click", function() {
    // Random number for dice roll
    let randomPlayer = Math.floor(Math.random() * 6 + 1);
    let randomPc = Math.floor(Math.random() * 6 + 1);
    console.log(randomPlayer, randomPc)
    // if the winner is player 1...
    if (randomPlayer > randomPc) {
        console.log(`Player 1 vince con un ${randomPlayer}, battendo il numero ${randomPc} del PC`)
    }
    // else if there's a draw...
    else if (randomPlayer === randomPc) {
        console.log(`Pareggio: entrambi hanno totalizzato ${randomPlayer}`)
    }
    // else if the winner is the pc...
    else {
        console.log(`Il PC vince con un ${randomPc}, battendo il numero ${randomPlayer} del Player 1`)
    }
})