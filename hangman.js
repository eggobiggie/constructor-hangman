const inquirer = require('inquirer');
const Round = require("./Round");

//Asks the user whether they want to start a round or quit
function gameStart() {

    inquirer.prompt([
        {
        type: 'confirm',
        message: 'Would you like to play a game?',
        name: 'confirm'
        }
    ]).then(answers => {
        if (answers.confirm) {
            fullRound();
        } 
    });
}

//Runs a full round of the game
function fullRound() {
   
    let gamePrompt = [{
        type: 'input',
        message: 'Guess a letter:',
        name: "word"
    }];

    let newRound = new Round();
    var playRound = function() {
        if (newRound.notDone) {
            inquirer.prompt(gamePrompt).then(answers => {
                newRound.lettersGuessed.push(answers.word[0]);
                newRound.useGuess();
                console.log("Guesses remaining: " + newRound.guessCount);
                console.log(newRound.currentWord.display());
                newRound.updateGameCondition();
                playRound();
            });
        } else {
            gameStart();
        }
    }
    playRound();
}

gameStart();