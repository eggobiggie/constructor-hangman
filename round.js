const Word = require("./Word");
const Letter = require("./Letter");

function Round() {
    this.currentWord = new Word();
    this.currentWord.setup();
    this.lettersGuessed = ['a','b','g','f','d'];
    this.guessCount = 8;
    this.notDone = true;
    this.didWeWin = false;
    this.useGuess = function() {
        this.currentWord.update(this.lettersGuessed);
        this.guessCount--;
    }
}

let newRound = new Round();
newRound = new Round();
// newRound.roundSetup();
console.log(newRound.currentWord.word);
console.log("Before updating with current guesses: "+ newRound.currentWord.display());
newRound.useGuess();
console.log(newRound.guessCount);
console.log("After updating: "+ newRound.currentWord.display());
module.exports = Round;