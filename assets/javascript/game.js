var compChoices = "abcdefghijklmnopqrstuvwxyz".split("")
console.log(compChoices)
var stats = {
    wins: 0,
    losses: 0,
    guessesLeft: 10
}
var compSelect = compChoices[Math.floor(Math.random() * compChoices.length)]

document.onkeyup = function(event){
    var userGuess = event.key
    
    if (userGuess === compSelect) {
        stats.wins = stats.wins + 1
        document.getElementById("winsCount").textContent ="Number of wins: " + stats.wins
    }

    if (userGuess != compSelect) { 
        stats.guessesLeft = stats.guessesLeft + -1
        document.getElementById("guessRem").textContent ="Guesses remaining: " + stats.guessesLeft
    }

    if (stats.guessesLeft < 1) {
        stats.losses = stats.losses + 1
        document.getElementById("lossesCount").textContent ="Number of losses: " + stats.losses
       
    }


}
