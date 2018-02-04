const Word = require("./Word");
const Letter = require("./Letter");

function Round(currentWord, lettersGuessed, guessCount, notDone, didWeWin) {
    this.currentWord = currentWord;
    this.lettersGuessed = lettersGuessed;
    this.guessCount = 8;
    this.notDone = true;
    this.didWeWin = false;
    this.roundSetup = function() {
        // let currentWord = new Word();
        // currentWord.getWord();
        let newLetter = new Letter();
        newLetter.setUnderscores();
    },
    this.useGuess = function() {
        //if userguess is incorrect {
        this.guessCount--;
        // }
    },
    this.checkWord = function(userGuess) {
        for (var i = 0; i < this.currentWord.length; i++) {
            //compare currentWord to userguess?
        }
    }
}

let newRound = new Round();
newRound.roundSetup();


module.exports = Round;