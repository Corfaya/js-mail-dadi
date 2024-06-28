// Button recovery
let play = document.getElementById("play-game")

// click event on 'play'
play.addEventListener("click", function() {
    // Random number for dice roll
    let randomPlayer = Math.floor(Math.random() * 6 + 1);
    let randomPc = Math.floor(Math.random() * 6 + 1);
    // if the winner is player 1...
    if (randomPlayer > randomPc) {}
    // else if there's a draw...
    else if (randomPlayer === randomPc) {}
    // else if the winner is the pc...
    else {}
})