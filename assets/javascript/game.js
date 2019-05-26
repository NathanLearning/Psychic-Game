var compChoices = "abcdefghijklmnopqrstuvwxyz".split("")
console.log(compChoices)
var stats = {
    wins: 0,
    losses: 0,
    guessesLeft: 10,
    guessedLetters: []
}
var compSelect

function compGuess() {
    compSelect = compChoices[Math.floor(Math.random() * compChoices.length)]
    return compSelect
}

compGuess()

document.onkeyup = function(event) {
    var userGuess = event.key
    
    if (userGuess === compSelect) {
        stats.wins++
        stats.guessesLeft = 10
        stats.guessedLetters = []
        compGuess()
    }

    if (userGuess !== compSelect) { 
        stats.guessesLeft--
    }

    if (stats.guessesLeft == 0) {
        stats.losses++
        stats.guessedLetters = []
        stats.guessesLeft = 10
        compGuess()
    }

    if  (stats.guessedLetters.indexOf(userGuess) >= 0) {
    
    } else {
        stats.guessedLetters.push(userGuess)
        document.getElementById("guessLet").innerHTML = stats.guessedLetters 
        console.log(stats.guessedLetters)
    }


    document.getElementById("winsCount").textContent = "Number of wins: " + stats.wins
    document.getElementById("guessRem").textContent = "Guesses remaining: " + stats.guessesLeft
    document.getElementById("lossesCount").textContent = "Number of losses: " + stats.losses
}
