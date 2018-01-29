const inquirer = require('inquirer');
const Word = require("./Word");
const fs = require("fs");
let guessData;

const Letter = function(guessesRemaining, letter) {
    this.guessesRemaining = 10;
    this.letter = letter;
    this.newWordChoice = function(word) {
        fs.readFile("log.txt", "utf8", function(error, data) {
            if (error) {
                console.log(error);
            }
            guessData = data;
            console.log(guessData);
        });    
    }
}

let newLetter = new Letter();
newLetter.newWordChoice();
// newLetter.underscoreLetter();


// inquirer.prompt([
//     {
//         type: 'input',
//         message: "what's the word",
//         name: "word"
//     }
// ]).then(answers => {
//     console.log(JSON.stringify(answers, null, ' '));
// });