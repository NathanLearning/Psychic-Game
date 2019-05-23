var compChoices = "abcdefghijklmnopqrstuvwxyz".split("")
console.log(compChoices)
var stats = {
    wins: 0,
    losses: 0,
    guessesLeft: 10
}

document.onkeyup = function(event){
    var userGuess = event.key
    var compSelect = compChoices[Math.floor(Math.random() * compChoices.length)]
    
    if (userGuess === compSelect) {
        stats.wins = stats.wins + 1
        document.getElementById("winsCount").textContent ="Number of wins: " + stats.wins
    }
}
