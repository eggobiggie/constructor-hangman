const inquirer = require('inquirer');
const Word = require("./Word");
const Letter = require("./Letter");
const Round = require("./Round");

// let currentWord = new Word();
// currentWord.getWord();

// console.log(currentWord.word);


// Game loop in kindasortapesudocode:
// {
//   Setup:
//     let currentRound = new Round()
//     currentRound.setup()
//   Play:while(currentRound.notDone){
//     use inquirer to get userGuess
//     currentRound.useAGuess()
//     currentRound.checkWord(userGuess)
//     Are We Done?
//       if(currentRound.guessCounter > 0)
//         currentRound.notDone = true
//       else
//         currentRound.notDone = false
//       if(userDisplay === currentRound.word)  ( good spot for a prototype )
//         currentRound.notDone = false
//         win = true
//   }
//   Again:
//     use inquirer to get Y or N from user
//   if(N){
//     exit?
//   }
// }


// Game loop in english:
// Setup:
//   Generate new Word
//     Set up new letter variables
//   Reset guess counter
//   Reset used guesses
// Play:
//   Guess a letter
//   Update guess counter
//   Update letter display
// Loop decision:
//   Finished Correct Answer?
//     Yes - back to Setup
//   Any guesses remaining?
//     Yes: back to Play
//     No: Play again/quit?
//   Play again prompt answer:
//     Yes - back to Setup
//     No - exit



// let newRound = new Round();
// newRound.roundSetup();

let exampleMessage = "this is a test"
//INQUIRER
inquirer.prompt([
    {
        type: 'input',
        message: exampleMessage,
        name: "word"
    }
]).then(answers => {
    console.log(JSON.stringify(answers, null, ' '));
});