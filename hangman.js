const inquirer = require('inquirer');
const Round = require("./Round");

function fullRound() {
   
    let gamePrompt = [{
        type: 'input',
        message: 'Guess a letter:',
        name: "word"
    }];

    let newRound = new Round();
    console.log(newRound.currentWord.word);
    console.log("Before updating with current guesses: "+ newRound.currentWord.display());
    console.log(newRound.guessCount);
    var doGuess = function() {
        if(newRound.guessCount > 0) {
            console.log("inside doGuess with "+newRound.guessCount)
            inquirer.prompt(gamePrompt).then(answers => {
                // console.log(answers.word[0]);
                newRound.lettersGuessed.push(answers.word[0]);
                console.log(newRound.lettersGuessed);
                newRound.useGuess();
                console.log(newRound.currentWord.display());
                doGuess();
            });
        }
    }
    doGuess();
}

fullRound();