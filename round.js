const Word = require("./Word");
const Letter = require("./Letter");

function Round() {
    this.currentWord = new Word();
    this.currentWord.setup();
    this.lettersGuessed = [];
    this.guessCount = 8;
    this.notDone = true;
    this.didWeWin = false;
    this.useGuess = function() {
        this.currentWord.update(this.lettersGuessed);
        this.guessCount--;
    }
}

module.exports = Round;